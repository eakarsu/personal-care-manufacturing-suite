# Personal Care Manufacturing Suite

Wave:
- Portfolio next-20 completion batch

Source candidates represented:
- `AIPersonalCareManufacturingAssistant`
- `AIPersonalCareManufacturingOperations`
- `AIPersonalCareManufacturingAnalytics`
- `AIPersonalCareManufacturingWorkflow`

This suite is a runnable merged app with one login, one dashboard, one feature-first sidebar, PostgreSQL-backed records/documents/notifications/audit, role behavior, and smoke coverage.

## Local Run

```bash
cd /Users/erolakarsu/projects/merged/personal-care-manufacturing-suite
./start.sh
```

Local URL:
- `http://127.0.0.1:5760`

Seeded users:
- `admin@personal-care-manufacturing.local / admin123`
- `manager@personal-care-manufacturing.local / manager123`
- `analyst@personal-care-manufacturing.local / analyst123`

## Validation

```bash
cd /Users/erolakarsu/projects/merged/personal-care-manufacturing-suite/frontend
npm run typecheck
SMOKE_BASE_URL=http://127.0.0.1:5760 npm run smoke
```
