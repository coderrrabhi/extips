
import bcrypt from 'bcryptjs';
import { query } from './server/src/db.js';

async function fix() {
  const hash = await bcrypt.hash('admin12345', 10);
  await query("UPDATE auth_users SET encrypted_password = $1 WHERE email = 'bjkagrahaoamqnvs@gmail.com'", [hash]);
  const { rows } = await query("SELECT id FROM auth_users WHERE email = 'bjkagrahaoamqnvs@gmail.com'");
  if (rows.length > 0) {
    const adminId = rows[0].id;
    await query(`
      INSERT INTO user_roles (user_id, role)
      VALUES ($1, 'admin')
      ON CONFLICT (user_id, role) DO NOTHING
    `, [adminId]);
    console.log('Admin role & password set for bjkagrahaoamqnvs@gmail.com!');
  }
  process.exit(0);
}
fix().catch(console.error);
