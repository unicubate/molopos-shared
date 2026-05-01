/**
 * Customer type enum
 */
export enum CustomerTypeEnum {
  Private = "PRIVATE",
  Subscription = "SUBSCRIPTION",
}

/**
 * Discount type enum
 */
export enum DiscountTypeEnum {
  Percentage = "PERCENTAGE",
  Amount = "AMOUNT",
}

/**
 * Payment method enum
 */
export enum PaymentMethodEnum {
  Paypal = "PAYPAL",
  Stripe = "STRIPE",
  Free = "FREE",
  Card = "CARD",
  Office = "OFFICE",
  Phone = "PHONE",
  Cash = "CASH",
  Iban = "IBAN",
}

/**
 * Product type enum
 */
export enum ProductTypeEnum {
  Physical = "PHYSICAL",
  Digital = "DIGITAL",
}

/**
 * Query type enum
 */
export enum QueryTypeEnum {
  Unit = "UNIT",
  Post = "POST",
  Shop = "SHOP",
  Brand = "BRAND",
  Order = "ORDER",
  Quote = "QUOTE",
  Message = "MESSAGE",
  Catalog = "CATALOG",
  Product = "PRODUCT",
  Contact = "CONTACT",
  Invoice = "INVOICE",
  Expense = "EXPENSE",
  Profile = "PROFILE",
  Variant = "VARIANT",
  Checkout = "CHECKOUT",
  Category = "CATEGORY",
  Warehouse = "WAREHOUSE",
  OrderItem = "ORDERITEM",
  QuoteItem = "QUOTEITEM",
  QuoteOption = "QUOTEOPTION",
  Section = "SECTION",
  Discount = "DISCOUNT",
  UserAddress = "USERADDRESS",
  Subcategory = "SUBCATEGORY",
  ExpenseItem = "EXPENSEITEM",
  Organization = "ORGANIZATION",
  ApplicationSection = "APPLICATIONSECTION",
}

/**
 * Transaction direction enum
 */
export enum TransactionDirectionEnum {
  In = "IN",
  Out = "OUT",
  InProgress = "INPROGRESS",
}

/**
 * Transaction model enum
 */
export enum TransactionModelEnum {
  Product = "PRODUCT",
  StoreShop = "STORESHOP",
  Subscription = "SUBSCRIPTION",
  Withdraw = "WITHDRAW",
}

/**
 * Boolean string enum
 */
export enum BooleanStringEnum {
  True = "true",
  False = "false",
}

/**
 * Sort type enum
 */
export enum SortOrderEnum {
  Asc = "ASC",
  Desc = "DESC",
}

/**
 * Export file extensions
 */
export enum ExportExtEnum {
  Csv = "csv",
  Xlsx = "xlsx",
}

/**
 * Currency codes used in the system
 * @see https://en.wikipedia.org/wiki/ISO_4217
 */
export enum CurrencyEnum {
  USD = "USD",
  GBP = "GBP",
  XAF = "XAF",
  EUR = "EUR",
  XOF = "XOF",
  CHF = "CHF",
  CAD = "CAD",
}

/**
 * Quote signed view enum
 */
export enum QuoteSignedViewEnum {
  Signed = "signed",
  View = "view",
}
