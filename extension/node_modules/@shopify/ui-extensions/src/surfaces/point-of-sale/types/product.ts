export interface Product {
  id: number;
  createdAt: string;
  updatedAt: string;
  title: string;
  description: string;
  descriptionHtml: string;
  featuredImage?: string;
  isGiftCard: boolean;
  tracksInventory: boolean;
  vendor: string;
  minVariantPrice: string;
  maxVariantPrice: string;
  productType: string;
  productCategory: string;
  tags: string[];
  numVariants: number;
  totalAvailableInventory?: number;
  totalInventory: number;
  variants: ProductVariant[];
  options: ProductOption[];
  hasOnlyDefaultVariant: boolean;
  hasInStockVariants?: boolean;
  onlineStoreUrl?: string;
}

export interface ProductVariant {
  id: number;
  createdAt: string;
  updatedAt: string;
  title: string;
  price: string;
  compareAtPrice?: string;
  taxable: boolean;
  sku?: string;
  barcode?: string;
  displayName: string;
  image?: string;
  inventoryIsTracked: boolean;
  inventoryAtLocation?: number;
  inventoryAtAllLocations?: number;
  inventoryPolicy: ProductVariantInventoryPolicy;
  hasInStockVariants?: boolean;
  options?: ProductVariantOption[];
  product?: Product;
  productId: number;
  position: number;
}

export interface ProductVariantOption {
  name: string;
  value: string;
}

export type ProductVariantInventoryPolicy = 'DENY' | 'CONTINUE';

export interface ProductOption {
  id: number;
  name: string;
  optionValues: string[];
  productId: number;
}
