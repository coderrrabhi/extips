
import bcrypt from 'bcryptjs';
import { query } from './server/src/db.js';

async function fixAdmin() {
  const hash = await bcrypt.hash('admin12345', 10);
  console.log('Generated hash:', hash);
  
  // Update admin@gmail.com password
  await query("UPDATE auth_users SET encrypted_password = $1 WHERE email = 'admin@gmail.com'", [hash]);
  
  // Ensure user_roles has admin role
  const { rows } = await query("SELECT id FROM auth_users WHERE email = 'admin@gmail.com'");
  if (rows.length > 0) {
    const adminId = rows[0].id;
    await query(`
      INSERT INTO user_roles (user_id, role)
      VALUES ($1, 'admin')
      ON CONFLICT (user_id, role) DO NOTHING
    `, [adminId]);
    console.log('Admin user updated successfully for admin@gmail.com! ID:', adminId);
  }
  process.exit(0);
}
fixAdmin().catch(console.error);
