import { defineDashboardExtension } from '@vendure/dashboard';

export default defineDashboardExtension({
  detailForms: [
    {
      pageId: 'product-detail',
      inputs: [
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
