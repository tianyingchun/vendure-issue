import { defineDashboardExtension } from '@vendure/dashboard';

export default defineDashboardExtension({
  detailForms: [
    {
      pageId: 'product-detail',
      displays: [
        {
          blockId: 'custom-fields',
          field: 'customFields',
          component: () => {
            return <span>Hello</span>;
          },
        },
      ],
    },
  ],
});
