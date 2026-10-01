
import fs from 'fs';

let content = fs.readFileSync('/opt/extispba/server/src/index.js', 'utf8');

const bundleRouteCode = `
app.get('/api/bundles', ah(async (_req, res) => {
  try {
    const { rows: bundles } = await query(
      \`SELECT * FROM engagement_bundles WHERE is_active = true ORDER BY sort_order, created_at\`
    );
    const { rows: items } = await query(
      \`SELECT bi.*,
              s.id AS svc_id, s.name AS svc_name, s.price AS svc_price,
              s.min_quantity AS svc_min, s.provider_id AS svc_provider_id,
              s.provider_service_id AS svc_provider_service_id
         FROM bundle_items bi
         LEFT JOIN services s ON s.id = bi.service_id
        ORDER BY bi.sort_order, bi.created_at\`
    );

    const itemsByBundle = {};
    for (const item of items) {
      if (!itemsByBundle[item.bundle_id]) itemsByBundle[item.bundle_id] = [];
      const { svc_id, svc_name, svc_price, svc_min, svc_provider_id, svc_provider_service_id, ...rest } = item;
      itemsByBundle[item.bundle_id].push({
        ...rest,
        service: svc_id ? {
          id: svc_id,
          name: svc_name,
          price: svc_price,
          min_quantity: svc_min,
          provider_id: svc_provider_id,
          provider_service_id: svc_provider_service_id,
        } : null,
      });
    }

    res.json(bundles.map(b => ({ ...b, items: itemsByBundle[b.id] || [] })));
  } catch (err) {
    console.error('Failed to fetch bundles:', err);
    res.status(500).json({ error: 'Failed to fetch bundles' });
  }
}));
`;

if (!content.includes("app.get('/api/bundles'")) {
  content = content.replace("app.use('/api/auth', authRoutes);", bundleRouteCode + "
app.use('/api/auth', authRoutes);");
  fs.writeFileSync('/opt/extispba/server/src/index.js', content, 'utf8');
  console.log('Successfully added GET /api/bundles to server/src/index.js!');
} else {
  console.log('GET /api/bundles already present in index.js');
}
