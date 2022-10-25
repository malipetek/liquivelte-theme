const cart: ShopifyCartDrop | undefined;

export default cart;

export interface ShopifyCartDrop
{
  note: string;
  attributes: Attributes;
  original_total_price: number;
  total_price: number;
  total_discount: number;
  total_weight: number;
  item_count: number;
  items?: (ItemsEntity)[] | null;
  requires_shipping: boolean;
  currency: string;
  items_subtotal_price: number;
  cart_level_discount_applications?: (null)[] | null;
}
export interface Attributes {
}
export interface ItemsEntity {
  id: number;
  properties?: null;
  quantity: number;
  variant_id: number;
  key: string;
  title: string;
  price: number;
  original_price: number;
  discounted_price: number;
  line_price: number;
  original_line_price: number;
  total_discount: number;
  discounts?: (null)[] | null;
  sku: string;
  grams: number;
  vendor: string;
  taxable: boolean;
  product_id: number;
  product_has_only_default_variant: boolean;
  gift_card: boolean;
  final_price: number;
  final_line_price: number;
  url: string;
  featured_image: FeaturedImage;
  image?: null;
  handle: string;
  requires_shipping: boolean;
  product_type: string;
  product_title: string;
  product_description?: null;
  variant_title?: null;
  variant_options?: (string)[] | null;
  options_with_values?: (OptionsWithValuesEntity)[] | null;
  line_level_discount_allocations?: (null)[] | null;
  line_level_total_discount: number;
}
export interface FeaturedImage {
  aspect_ratio?: null;
  alt?: null;
  height?: null;
  url?: null;
  width?: null;
}
export interface OptionsWithValuesEntity {
  name: string;
  value: string;
}
