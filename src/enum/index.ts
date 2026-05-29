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
  Task = "TASK",
  Unit = "UNIT",
  Post = "POST",
  Shop = "SHOP",
  Brand = "BRAND",
  Order = "ORDER",
  Quote = "QUOTE",
  Section = "SECTION",
  Message = "MESSAGE",
  Catalog = "CATALOG",
  Product = "PRODUCT",
  Contact = "CONTACT",
  Invoice = "INVOICE",
  Expense = "EXPENSE",
  Profile = "PROFILE",
  Variant = "VARIANT",
  Project = "PROJECT",
  Pipeline = "PIPELINE",
  Customer = "CUSTOMER",
  Checkout = "CHECKOUT",
  Category = "CATEGORY",
  Discount = "DISCOUNT",
  Warehouse = "WAREHOUSE",
  OrderItem = "ORDERITEM",
  QuoteItem = "QUOTEITEM",
  QuoteOption = "QUOTEOPTION",
  UserAddress = "USERADDRESS",
  Subcategory = "SUBCATEGORY",
  ExpenseItem = "EXPENSEITEM",
  Organization = "ORGANIZATION",
  ApplicationSection = "APPLICATIONSECTION",
}

/**
 * Activity model enum
 */
export enum ActivityModelEnum {
  ViewCount = "VIEW_COUNT",
  ProductCreate = "PRODUCT_CREATE",
  ProductUpdate = "PRODUCT_UPDATE",
  CatalogCreate = "CATALOG_CREATE",
  CatalogUpdate = "CATALOG_UPDATE",
  VariantCreate = "VARIANT_CREATE",
  VariantUpdate = "VARIANT_UPDATE",
  CategoryCreate = "CATEGORY_CREATE",
  CategoryUpdate = "CATEGORY_UPDATE",
  BrandCreate = "BRAND_CREATE",
  BrandUpdate = "BRAND_UPDATE",
  AdditionCreate = "ADDITION_CREATE",
  AdditionUpdate = "ADDITION_UPDATE",
  DiscountCreate = "DISCOUNT_CREATE",
  DiscountUpdate = "DISCOUNT_UPDATE",
  UnitCreate = "UNIT_CREATE",
  UnitUpdate = "UNIT_UPDATE",
  OrderUpdate = "ORDER_UPDATE",
  OrderConfirmed = "ORDER_CONFIRMED",
  QuoteCreate = "QUOTE_CREATE",
  QuoteUpdate = "QUOTE_UPDATE",
  OrderItemCreate = "ORDER_ITEM_CREATE",
  OrderItemUpdate = "ORDER_ITEM_UPDATE",
  PointOfSaleCreate = "POINT_OF_SALE_CREATE",
  PointOfSaleUpdate = "POINT_OF_SALE_UPDATE",
  UserCreate = "USER_CREATE",
  UserUpdate = "USER_UPDATE",
  UserLogin = "USER_LOGIN",
  WarehouseCreate = "WAREHOUSE_CREATE",
  WarehouseUpdate = "WAREHOUSE_UPDATE",
  QuoteItemUpdate = "QUOTE_ITEM_UPDATE",
  QuoteItemCreate = "QUOTE_ITEM_CREATE",
  UserPointOfSaleCreate = "USER_POINT_OF_SALE_CREATE",
  UserPointOfSaleUpdate = "USER_POINT_OF_SALE_UPDATE",
  ExpenseCreate = "EXPENSE_CREATE",
  ExpenseUpdate = "EXPENSE_UPDATE",
  ExpenseItemCreate = "EXPENSE_ITEM_CREATE",
  ExpenseItemUpdate = "EXPENSE_ITEM_UPDATE",
  SectionCreate = "SECTION_CREATE",
  SectionUpdate = "SECTION_UPDATE",
  QuoteOptionCreate = "QUOTE_OPTION_CREATE",
  QuoteOptionUpdate = "QUOTE_OPTION_UPDATE",
  ApplicationSectionCreate = "APPLICATION_SECTION_CREATE",
  ApplicationSectionUpdate = "APPLICATION_SECTION_UPDATE",
  ApplicationSectionDelete = "APPLICATION_SECTION_DELETE",
  QuoteConfirmed = "QUOTE_CONFIRMED",
  ProjectCreate = "PROJECT_CREATE",
  ProjectUpdate = "PROJECT_UPDATE",
  ProjectDelete = "PROJECT_DELETE",
  PipelineCreate = "PIPELINE_CREATE",
  PipelineUpdate = "PIPELINE_UPDATE",
  PipelineDelete = "PIPELINE_DELETE",
  TaskCreate = "TASK_CREATE",
  TaskUpdate = "TASK_UPDATE",
  TaskDelete = "TASK_DELETE",
  NoteCreate = "NOTE_CREATE",
  NoteUpdate = "NOTE_UPDATE",
  NoteDelete = "NOTE_DELETE",
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

/**
 * Contributor role enum
 */
export enum ContributorRoleEnum {
  Admin = "ADMIN",
  Moderator = "MODERATOR",
}

/**
 * Status quote item enum
 */
export enum StatusQuoteItemEnum {
  Pending = "PENDING",
  Confirmed = "CONFIRMED",
  OrForDelivery = "OR_FOR_DELIVERY",
  Received = "RECEIVED",
  Cancelled = "CANCELLED",
}

/**
 * Private public enum
 */
export enum PrivatePublicEnum {
  Private = "PRIVATE",
  Public = "PUBLIC",
}

/**
 * Pages provider enum
 */
export enum PagesProviderEnum {
  Dashboard = "DASHBOARD",
  PointOfSale = "POINTOFSALE",
  Shop = "SHOP",
  Variant = "VARIANT",
  Catalog = "CATALOG",
  Customer = "CUSTOMER",
}

/**
 * Application section module enum
 */
export enum ApplicationSectionModuleEnum {
  Quote = "QUOTE",
  Product = "PRODUCT",
  Expense = "EXPENSE",
}

/**
 * User status enum
 */
export enum UserStatusEnum {
  Client = "CLIENT",
  Creator = "CREATOR",
  Admin = "ADMIN",
  Demo = "DEMO",
}

/**
 * Pricing type status enum
 */
export enum PricingTypeEnum {
  Free = "free",
  Custom = "enterprise-stripe",
  BasicMonthStripe = "basic-month-stripe",
  BasicYearStripe = "basic-year-stripe",
  ProMonthStripe = "pro-month-stripe",
  ProYearStripe = "pro-year-stripe",
  BusinessMonthStripe = "business-month-stripe",
  BusinessYearStripe = "business-year-stripe",
  PremiumMonthStripe = "premium-month-stripe",
  PremiumYearStripe = "premium-year-stripe",
}

/**
 * Quote status enum
 */
export enum QuoteStatusEnum {
  Signed = "SIGNED",
  Pending = "PENDING",
  Confirmed = "CONFIRMED",
  Cancelled = "CANCELLED",
}

/**
 * Status enum
 */
export enum StatusEnum {
  Public = "PUBLIC",
  Private = "PRIVATE",
}

/**
 * Section status enum
 */
export enum SectionStatusEnum {
  Open = "OPEN",
  Close = "CLOSE",
}
