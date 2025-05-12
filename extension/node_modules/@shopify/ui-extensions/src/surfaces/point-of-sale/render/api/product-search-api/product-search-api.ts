import type {MultipleResourceResult} from '../../../types/multiple-resource-result';
import type {PaginatedResult} from '../../../types/paginated-result';
import type {Product, ProductVariant} from '../../../types/product';

export type ProductSortType =
  | 'RECENTLY_ADDED'
  | 'RECENTLY_ADDED_ASCENDING'
  | 'ALPHABETICAL_A_TO_Z'
  | 'ALPHABETICAL_Z_TO_A';

/**
 * Base interface for pagination.
 */
export interface PaginationParams {
  /**
   * Specifies the number of results to be returned in this page. The maximum number of items that will be returned is 50.
   */
  first?: number;
  /**
   * Specifies the page cursor. Items after this cursor will be returned.
   */
  afterCursor?: string;
}

/**
 * Interface for product search
 */
export interface ProductSearchParams extends PaginationParams {
  /**
   * The search term to be used to search for POS products.
   */
  queryString?: string;
  /**
   * Specifies the order in which products should be sorted. When a `queryString` is provided, sortType will not have any effect, as the results will be returned in order by relevance to the `queryString`.
   */
  sortType?: ProductSortType;
}

export interface ProductSearchApiContent {
  /** Search for products on the POS device.
   * @param searchParams The parameters for the product search.
   */
  searchProducts(
    searchParams: ProductSearchParams,
  ): Promise<PaginatedResult<Product>>;

  /** Fetches a single product's details.
   * @param productId The ID of the product to lookup.
   */
  fetchProductWithId(productId: number): Promise<Product | undefined>;

  /** Fetches multiple products' details.
   * @param productIds Specifies the array of product IDs to lookup. This is limited to 50 products. All excess requested IDs will be removed from the array.
   */
  fetchProductsWithIds(
    productIds: number[],
  ): Promise<MultipleResourceResult<Product>>;

  /** Fetches a single product variant's details.
   * @param productVariantId The ID of the product variant to lookup.
   */
  fetchProductVariantWithId(
    productVariantId: number,
  ): Promise<ProductVariant | undefined>;

  /** Fetches multiple product variants' details.
   * @param productVariantIds Specifies the array of product variant IDs to lookup. This is limited to 50 product variants. All excess requested IDs will be removed from the array.
   */
  fetchProductVariantsWithIds(
    productVariantIds: number[],
  ): Promise<MultipleResourceResult<ProductVariant>>;

  /** Fetches all product variants associated with a product.
   * @param productId The product ID. All variants' details associated with this product ID are returned.
   */
  fetchProductVariantsWithProductId(
    productId: number,
  ): Promise<ProductVariant[]>;

  /** Fetches a page of product variants associated with a product.
   * @param paginationParams The parameters for pagination.
   */
  fetchPaginatedProductVariantsWithProductId(
    productId: number,
    paginationParams: PaginationParams,
  ): Promise<PaginatedResult<ProductVariant>>;
}

/**
 * Access Point of Sale's native product search functionality.
 */
export interface ProductSearchApi {
  productSearch: ProductSearchApiContent;
}
