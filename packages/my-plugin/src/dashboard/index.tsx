import { defineDashboardExtension } from '@vendure/dashboard';

export default defineDashboardExtension({
  detailForms: [
    {
      pageId: 'product-detail',
      displays: [
        {
          blockId: 'main-form',
          field: 'name',
          component: () => {
            return <span>Hello</span>;
          },
        },
      ],
    },
  ],
});
