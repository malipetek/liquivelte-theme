
const product: ShopifyProductDrop | undefined;

export default product;

export interface ShopifyProductDrop
{
  id: number;
  title: string;
  handle: string;
  description?: null;
  published_at: string;
  created_at: string;
  vendor: string;
  type: string;
  tags?: (null)[] | null;
  price: number;
  price_min: number;
  price_max: number;
  available: boolean;
  price_varies: boolean;
  compare_at_price?: null;
  compare_at_price_min: number;
  compare_at_price_max: number;
  compare_at_price_varies: boolean;
  variants?: (VariantsEntity)[] | null;
  images?: (null)[] | null;
  featured_image?: null;
  options?: (string)[] | null;
  content?: null;
}
export interface VariantsEntity {
  id: number;
  title: string;
  option1: string;
  option2?: null;
  option3?: null;
  sku: string;
  requires_shipping: boolean;
  taxable: boolean;
  featured_image?: null;
  available: boolean;
  name: string;
  public_title?: null;
  options?: (string)[] | null;
  price: number;
  weight: number;
  compare_at_price?: null;
  inventory_management?: null;
  barcode?: null;
}
