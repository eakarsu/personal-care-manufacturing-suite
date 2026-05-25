export type Metric = { label: string; value: string; note: string };
export const sourceSystems = [
  { name: 'AIPersonalCareManufacturingAssistant', ownership: 'Orders source capabilities and workflows', coverage: ['Orders', 'Work Centers', 'Materials'] },
  { name: 'AIPersonalCareManufacturingOperations', ownership: 'Work Centers source capabilities and workflows', coverage: ['Quality', 'Maintenance', 'Safety'] },
  { name: 'AIPersonalCareManufacturingAnalytics', ownership: 'Materials source capabilities and workflows', coverage: ['Suppliers', 'Yield', 'Exceptions'] },
  { name: 'AIPersonalCareManufacturingWorkflow', ownership: 'Quality source capabilities and workflows', coverage: ['Capacity', 'Analytics', 'Reports'] },
];
export const dashboardMetrics: Metric[] = [
  { label: 'Orders', value: '84', note: 'Active' },
  { label: 'Work Centers', value: '61', note: 'Open' },
  { label: 'Materials', value: '37', note: 'Need review' },
  { label: 'AI Tool Runs', value: '318', note: 'Last 24 hours' },
];
export const healthMetrics: Metric[] = [
  { label: 'Exceptions', value: '28', note: 'Open' },
  { label: 'Approvals', value: '46', note: 'Pending' },
  { label: 'Documents', value: '640', note: 'Tracked' },
  { label: 'Audit Items', value: '91%', note: 'Current' },
];
export const dashboardModules = ['Orders operating view', 'Work Centers operating view', 'Materials operating view', 'Quality operating view', 'Maintenance operating view', 'Safety operating view', 'Suppliers operating view', 'Yield operating view'];
export const workflowHighlights = ['Orders workflow with records, approvals, audit, and reporting', 'Work Centers workflow with records, approvals, audit, and reporting', 'Materials workflow with records, approvals, audit, and reporting', 'Quality workflow with records, approvals, audit, and reporting', 'Maintenance workflow with records, approvals, audit, and reporting'];
