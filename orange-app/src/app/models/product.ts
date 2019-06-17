export interface Product {
  "id":string;
  "isActive":boolean;
  "price":string;
  "avatar":string;
  "itemsAvailable":number;
  "category"?:ProductCategory;
  "name":string;
  "description":string;
  "created":number;
  "createdBy":string;
}

export type ProductCategory = 'others' | 'food' | 'electronic';
