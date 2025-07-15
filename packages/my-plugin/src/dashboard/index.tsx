import { defineDashboardExtension } from '@vendure/dashboard';
import { JsonDisplayComponent } from './components/JsonDisplay.jsx';

export default defineDashboardExtension({
  detailForms: [
    {
      pageId: 'product-detail',
      displays: [
        {
          blockId: 'custom-fields',
          field: 'customMappings',
          component: JsonDisplayComponent,
        },
      ],
    },
  ],
});
