export interface ShopifyCollectionDrop {
  id: number;
  handle: string;
  updated_at: string;
  published_at: string;
  sort_order: string;
  template_suffix?: null;
  published_scope: string;
  title: string;
  body_html?: null;
}

const collection: ShopifyCollectionDrop | undefined;

export default collection;