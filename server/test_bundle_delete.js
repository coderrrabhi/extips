
const { Client } = require("pg");
async function test() {
  const client = new Client({ connectionString: "postgres://extis_user:SecurePass123!@localhost:5432/extispba_db" });
  await client.connect();

  const bRes = await client.query("INSERT INTO engagement_bundles (name, platform, description, is_active) VALUES ('Test Bundle Delete', 'instagram', 'temp', true) RETURNING id");
  const bundleId = bRes.rows[0].id;
  console.log("Created test bundle:", bundleId);

  const iRes = await client.query("INSERT INTO bundle_items (bundle_id, engagement_type, ratio_percent) VALUES ($1, 'likes', 100) RETURNING id", [bundleId]);
  const itemId = iRes.rows[0].id;
  console.log("Created test item:", itemId);

  await client.query("DELETE FROM bundle_items WHERE id = $1", [itemId]);
  console.log("Successfully deleted item:", itemId);

  await client.query("UPDATE engagement_orders SET bundle_id = NULL WHERE bundle_id = $1", [bundleId]);
  await client.query("DELETE FROM bundle_items WHERE bundle_id = $1", [bundleId]);
  await client.query("DELETE FROM engagement_bundles WHERE id = $1", [bundleId]);
  console.log("Successfully deleted bundle:", bundleId);

  await client.end();
}
test().catch(console.error);
