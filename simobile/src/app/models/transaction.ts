export interface TransactionItem {
  productId: number;
  productName: string;
  qty: number;
  price: number;
}

export interface Transaction {
  id: number;
  date: Date;
  items: TransactionItem[];
  total: number;
}