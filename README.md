<small><sup>This file is generated from the source code. Do not edit directly, use `npm run docs`</sup></small>

## Installation

```sh
npm install @molopos/shared
```

## Usage

```typescript
import { CustomerTypeEnum } from '@molopos/shared';
```

# Statuses and types

- [Customer Type Enum](#customer-type-enum-customertypeenum), Customer type enum
- [Discount Type Enum](#discount-type-enum-discounttypeenum), Discount type enum
- [Payment Method Enum](#payment-method-enum-paymentmethodenum), Payment method enum
- [Product Type Enum](#product-type-enum-producttypeenum), Product type enum
- [Query Type Enum](#query-type-enum-querytypeenum), Query type enum
- [Activity Model Enum](#activity-model-enum-activitymodelenum), Activity model enum
- [Transaction Direction Enum](#transaction-direction-enum-transactiondirectionenum), Transaction direction enum
- [Transaction Model Enum](#transaction-model-enum-transactionmodelenum), Transaction model enum
- [Boolean String Enum](#boolean-string-enum-booleanstringenum), Boolean string enum
- [Sort Order Enum](#sort-order-enum-sortorderenum), Sort type enum
- [Export Ext Enum](#export-ext-enum-exportextenum), Export file extensions
- [Currency Enum](#currency-enum-currencyenum), Currency codes used in the system
- [Quote Signed View Enum](#quote-signed-view-enum-quotesignedviewenum), Quote signed view enum
- [Contributor Role Enum](#contributor-role-enum-contributorroleenum), Contributor role enum
- [Status Quote Item Enum](#status-quote-item-enum-statusquoteitemenum), Status quote item enum
- [Private Public Enum](#private-public-enum-privatepublicenum), Private public enum
- [Pages Provider Enum](#pages-provider-enum-pagesproviderenum), Pages provider enum
- [Application Section Module Enum](#application-section-module-enum-applicationsectionmoduleenum), Application section module enum
- [User Status Enum](#user-status-enum-userstatusenum), User status enum
- [Pricing Type Enum](#pricing-type-enum-pricingtypeenum), Pricing type status enum
- [Quote Status Enum](#quote-status-enum-quotestatusenum), Quote status enum
- [Status Enum](#status-enum-statusenum), Status enum
- [Section Status Enum](#section-status-enum-sectionstatusenum), Section status enum
- [Upload Folder Enum](#upload-folder-enum-uploadfolderenum), Upload folder enum
## Customer Type Enum <sub><sup>[CustomerTypeEnum](./src/enum/index.ts#L4)</sup></sub>

Customer type enum
<table>
<tr><td>Private</td><td>"PRIVATE"</td></tr>
<tr><td>Subscription</td><td>"SUBSCRIPTION"</td></tr>

</table>

## Discount Type Enum <sub><sup>[DiscountTypeEnum](./src/enum/index.ts#L12)</sup></sub>

Discount type enum
<table>
<tr><td>Percentage</td><td>"PERCENTAGE"</td></tr>
<tr><td>Amount</td><td>"AMOUNT"</td></tr>

</table>

## Payment Method Enum <sub><sup>[PaymentMethodEnum](./src/enum/index.ts#L20)</sup></sub>

Payment method enum
<table>
<tr><td>Paypal</td><td>"PAYPAL"</td></tr>
<tr><td>Stripe</td><td>"STRIPE"</td></tr>
<tr><td>Free</td><td>"FREE"</td></tr>
<tr><td>Card</td><td>"CARD"</td></tr>
<tr><td>Office</td><td>"OFFICE"</td></tr>
<tr><td>Phone</td><td>"PHONE"</td></tr>
<tr><td>Cash</td><td>"CASH"</td></tr>
<tr><td>Iban</td><td>"IBAN"</td></tr>

</table>

## Product Type Enum <sub><sup>[ProductTypeEnum](./src/enum/index.ts#L34)</sup></sub>

Product type enum
<table>
<tr><td>Physical</td><td>"PHYSICAL"</td></tr>
<tr><td>Digital</td><td>"DIGITAL"</td></tr>

</table>

## Query Type Enum <sub><sup>[QueryTypeEnum](./src/enum/index.ts#L42)</sup></sub>

Query type enum
<table>
<tr><td>Task</td><td>"TASK"</td></tr>
<tr><td>Unit</td><td>"UNIT"</td></tr>
<tr><td>Post</td><td>"POST"</td></tr>
<tr><td>Shop</td><td>"SHOP"</td></tr>
<tr><td>Brand</td><td>"BRAND"</td></tr>
<tr><td>Order</td><td>"ORDER"</td></tr>
<tr><td>Quote</td><td>"QUOTE"</td></tr>
<tr><td>Section</td><td>"SECTION"</td></tr>
<tr><td>Message</td><td>"MESSAGE"</td></tr>
<tr><td>Catalog</td><td>"CATALOG"</td></tr>
<tr><td>Product</td><td>"PRODUCT"</td></tr>
<tr><td>Contact</td><td>"CONTACT"</td></tr>
<tr><td>Invoice</td><td>"INVOICE"</td></tr>
<tr><td>Expense</td><td>"EXPENSE"</td></tr>
<tr><td>Profile</td><td>"PROFILE"</td></tr>
<tr><td>Variant</td><td>"VARIANT"</td></tr>
<tr><td>Project</td><td>"PROJECT"</td></tr>
<tr><td>Pipeline</td><td>"PIPELINE"</td></tr>
<tr><td>Customer</td><td>"CUSTOMER"</td></tr>
<tr><td>Checkout</td><td>"CHECKOUT"</td></tr>
<tr><td>Category</td><td>"CATEGORY"</td></tr>
<tr><td>Discount</td><td>"DISCOUNT"</td></tr>
<tr><td>Currency</td><td>"CURRENCY"</td></tr>
<tr><td>Warehouse</td><td>"WAREHOUSE"</td></tr>
<tr><td>Order Item</td><td>"ORDERITEM"</td></tr>
<tr><td>Quote Item</td><td>"QUOTEITEM"</td></tr>
<tr><td>Quote Option</td><td>"QUOTEOPTION"</td></tr>
<tr><td>User Address</td><td>"USERADDRESS"</td></tr>
<tr><td>Subcategory</td><td>"SUBCATEGORY"</td></tr>
<tr><td>Expense Item</td><td>"EXPENSEITEM"</td></tr>
<tr><td>Organization</td><td>"ORGANIZATION"</td></tr>
<tr><td>Advancement</td><td>"ADVANCEMENT"</td></tr>
<tr><td>Application Section</td><td>"APPLICATIONSECTION"</td></tr>
<tr><td>Collaborative Fund</td><td>"COLLABORATIVEFUND"</td></tr>
<tr><td>Subscription</td><td>"SUBSCRIPTION"</td></tr>

</table>

## Activity Model Enum <sub><sup>[ActivityModelEnum](./src/enum/index.ts#L83)</sup></sub>

Activity model enum
<table>
<tr><td>View Count</td><td>"VIEW_COUNT"</td></tr>
<tr><td>Product Create</td><td>"PRODUCT_CREATE"</td></tr>
<tr><td>Product Update</td><td>"PRODUCT_UPDATE"</td></tr>
<tr><td>Catalog Create</td><td>"CATALOG_CREATE"</td></tr>
<tr><td>Catalog Update</td><td>"CATALOG_UPDATE"</td></tr>
<tr><td>Variant Create</td><td>"VARIANT_CREATE"</td></tr>
<tr><td>Variant Update</td><td>"VARIANT_UPDATE"</td></tr>
<tr><td>Category Create</td><td>"CATEGORY_CREATE"</td></tr>
<tr><td>Category Update</td><td>"CATEGORY_UPDATE"</td></tr>
<tr><td>Brand Create</td><td>"BRAND_CREATE"</td></tr>
<tr><td>Brand Update</td><td>"BRAND_UPDATE"</td></tr>
<tr><td>Addition Create</td><td>"ADDITION_CREATE"</td></tr>
<tr><td>Addition Update</td><td>"ADDITION_UPDATE"</td></tr>
<tr><td>Discount Create</td><td>"DISCOUNT_CREATE"</td></tr>
<tr><td>Discount Update</td><td>"DISCOUNT_UPDATE"</td></tr>
<tr><td>Unit Create</td><td>"UNIT_CREATE"</td></tr>
<tr><td>Unit Update</td><td>"UNIT_UPDATE"</td></tr>
<tr><td>Order Update</td><td>"ORDER_UPDATE"</td></tr>
<tr><td>Order Confirmed</td><td>"ORDER_CONFIRMED"</td></tr>
<tr><td>Quote Create</td><td>"QUOTE_CREATE"</td></tr>
<tr><td>Quote Update</td><td>"QUOTE_UPDATE"</td></tr>
<tr><td>Order Item Create</td><td>"ORDER_ITEM_CREATE"</td></tr>
<tr><td>Order Item Update</td><td>"ORDER_ITEM_UPDATE"</td></tr>
<tr><td>Point Of Sale Create</td><td>"POINT_OF_SALE_CREATE"</td></tr>
<tr><td>Point Of Sale Update</td><td>"POINT_OF_SALE_UPDATE"</td></tr>
<tr><td>User Create</td><td>"USER_CREATE"</td></tr>
<tr><td>User Update</td><td>"USER_UPDATE"</td></tr>
<tr><td>User Login</td><td>"USER_LOGIN"</td></tr>
<tr><td>Warehouse Create</td><td>"WAREHOUSE_CREATE"</td></tr>
<tr><td>Warehouse Update</td><td>"WAREHOUSE_UPDATE"</td></tr>
<tr><td>Quote Item Update</td><td>"QUOTE_ITEM_UPDATE"</td></tr>
<tr><td>Quote Item Create</td><td>"QUOTE_ITEM_CREATE"</td></tr>
<tr><td>User Point Of Sale Create</td><td>"USER_POINT_OF_SALE_CREATE"</td></tr>
<tr><td>User Point Of Sale Update</td><td>"USER_POINT_OF_SALE_UPDATE"</td></tr>
<tr><td>Expense Create</td><td>"EXPENSE_CREATE"</td></tr>
<tr><td>Expense Update</td><td>"EXPENSE_UPDATE"</td></tr>
<tr><td>Expense Item Create</td><td>"EXPENSE_ITEM_CREATE"</td></tr>
<tr><td>Expense Item Update</td><td>"EXPENSE_ITEM_UPDATE"</td></tr>
<tr><td>Section Create</td><td>"SECTION_CREATE"</td></tr>
<tr><td>Section Update</td><td>"SECTION_UPDATE"</td></tr>
<tr><td>Quote Option Create</td><td>"QUOTE_OPTION_CREATE"</td></tr>
<tr><td>Quote Option Update</td><td>"QUOTE_OPTION_UPDATE"</td></tr>
<tr><td>Application Section Create</td><td>"APPLICATION_SECTION_CREATE"</td></tr>
<tr><td>Application Section Update</td><td>"APPLICATION_SECTION_UPDATE"</td></tr>
<tr><td>Application Section Delete</td><td>"APPLICATION_SECTION_DELETE"</td></tr>
<tr><td>Quote Paid</td><td>"QUOTE_PAID"</td></tr>
<tr><td>Quote Signed</td><td>"QUOTE_SIGNED"</td></tr>
<tr><td>Quote Confirmed</td><td>"QUOTE_CONFIRMED"</td></tr>
<tr><td>Quote Cancelled</td><td>"QUOTE_CANCELLED"</td></tr>
<tr><td>Quote Archived</td><td>"QUOTE_ARCHIVED"</td></tr>
<tr><td>Project Create</td><td>"PROJECT_CREATE"</td></tr>
<tr><td>Project Update</td><td>"PROJECT_UPDATE"</td></tr>
<tr><td>Project Delete</td><td>"PROJECT_DELETE"</td></tr>
<tr><td>Pipeline Create</td><td>"PIPELINE_CREATE"</td></tr>
<tr><td>Pipeline Update</td><td>"PIPELINE_UPDATE"</td></tr>
<tr><td>Pipeline Delete</td><td>"PIPELINE_DELETE"</td></tr>
<tr><td>Task Create</td><td>"TASK_CREATE"</td></tr>
<tr><td>Task Update</td><td>"TASK_UPDATE"</td></tr>
<tr><td>Task Delete</td><td>"TASK_DELETE"</td></tr>
<tr><td>Note Create</td><td>"NOTE_CREATE"</td></tr>
<tr><td>Note Update</td><td>"NOTE_UPDATE"</td></tr>
<tr><td>Note Delete</td><td>"NOTE_DELETE"</td></tr>
<tr><td>Subscription Create</td><td>"SUBSCRIPTION_CREATE"</td></tr>
<tr><td>Subscription Update</td><td>"SUBSCRIPTION_UPDATE"</td></tr>
<tr><td>Subscription Delete</td><td>"SUBSCRIPTION_DELETE"</td></tr>

</table>

## Transaction Direction Enum <sub><sup>[TransactionDirectionEnum](./src/enum/index.ts#L154)</sup></sub>

Transaction direction enum
<table>
<tr><td>In</td><td>"IN"</td></tr>
<tr><td>Out</td><td>"OUT"</td></tr>
<tr><td>In Progress</td><td>"INPROGRESS"</td></tr>

</table>

## Transaction Model Enum <sub><sup>[TransactionModelEnum](./src/enum/index.ts#L163)</sup></sub>

Transaction model enum
<table>
<tr><td>Withdraw</td><td>"WITHDRAW"</td></tr>
<tr><td>Product</td><td>"PRODUCT"</td></tr>
<tr><td>Store Shop</td><td>"STORESHOP"</td></tr>
<tr><td>Subscription</td><td>"SUBSCRIPTION"</td></tr>

</table>

## Boolean String Enum <sub><sup>[BooleanStringEnum](./src/enum/index.ts#L173)</sup></sub>

Boolean string enum
<table>
<tr><td>True</td><td>"true"</td></tr>
<tr><td>False</td><td>"false"</td></tr>

</table>

## Sort Order Enum <sub><sup>[SortOrderEnum](./src/enum/index.ts#L181)</sup></sub>

Sort type enum
<table>
<tr><td>Asc</td><td>"ASC"</td></tr>
<tr><td>Desc</td><td>"DESC"</td></tr>

</table>

## Export Ext Enum <sub><sup>[ExportExtEnum](./src/enum/index.ts#L189)</sup></sub>

Export file extensions
<table>
<tr><td>Csv</td><td>"csv"</td></tr>
<tr><td>Xlsx</td><td>"xlsx"</td></tr>

</table>

## Currency Enum <sub><sup>[CurrencyEnum](./src/enum/index.ts#L197)</sup></sub>

Currency codes used in the system
<table>
<tr><td>USD</td><td>"USD"</td></tr>
<tr><td>GBP</td><td>"GBP"</td></tr>
<tr><td>XAF</td><td>"XAF"</td></tr>
<tr><td>EUR</td><td>"EUR"</td></tr>
<tr><td>XOF</td><td>"XOF"</td></tr>
<tr><td>CHF</td><td>"CHF"</td></tr>
<tr><td>CAD</td><td>"CAD"</td></tr>

</table>

## Quote Signed View Enum <sub><sup>[QuoteSignedViewEnum](./src/enum/index.ts#L210)</sup></sub>

Quote signed view enum
<table>
<tr><td>Signed</td><td>"signed"</td></tr>
<tr><td>View</td><td>"view"</td></tr>

</table>

## Contributor Role Enum <sub><sup>[ContributorRoleEnum](./src/enum/index.ts#L218)</sup></sub>

Contributor role enum
<table>
<tr><td>Admin</td><td>"ADMIN"</td></tr>
<tr><td>Moderator</td><td>"MODERATOR"</td></tr>

</table>

## Status Quote Item Enum <sub><sup>[StatusQuoteItemEnum](./src/enum/index.ts#L226)</sup></sub>

Status quote item enum
<table>
<tr><td>Pending</td><td>"PENDING"</td></tr>
<tr><td>Confirmed</td><td>"CONFIRMED"</td></tr>
<tr><td>Or For Delivery</td><td>"OR_FOR_DELIVERY"</td></tr>
<tr><td>Received</td><td>"RECEIVED"</td></tr>
<tr><td>Cancelled</td><td>"CANCELLED"</td></tr>

</table>

## Private Public Enum <sub><sup>[PrivatePublicEnum](./src/enum/index.ts#L237)</sup></sub>

Private public enum
<table>
<tr><td>Private</td><td>"PRIVATE"</td></tr>
<tr><td>Public</td><td>"PUBLIC"</td></tr>

</table>

## Pages Provider Enum <sub><sup>[PagesProviderEnum](./src/enum/index.ts#L245)</sup></sub>

Pages provider enum
<table>
<tr><td>Dashboard</td><td>"DASHBOARD"</td></tr>
<tr><td>Point Of Sale</td><td>"POINTOFSALE"</td></tr>
<tr><td>Shop</td><td>"SHOP"</td></tr>
<tr><td>Variant</td><td>"VARIANT"</td></tr>
<tr><td>Catalog</td><td>"CATALOG"</td></tr>
<tr><td>Customer</td><td>"CUSTOMER"</td></tr>

</table>

## Application Section Module Enum <sub><sup>[ApplicationSectionModuleEnum](./src/enum/index.ts#L257)</sup></sub>

Application section module enum
<table>
<tr><td>Quote</td><td>"QUOTE"</td></tr>
<tr><td>Product</td><td>"PRODUCT"</td></tr>
<tr><td>Expense</td><td>"EXPENSE"</td></tr>
<tr><td>Collaborative Fund</td><td>"COLLABORATIVEFUND"</td></tr>

</table>

## User Status Enum <sub><sup>[UserStatusEnum](./src/enum/index.ts#L267)</sup></sub>

User status enum
<table>
<tr><td>Client</td><td>"CLIENT"</td></tr>
<tr><td>Creator</td><td>"CREATOR"</td></tr>
<tr><td>Admin</td><td>"ADMIN"</td></tr>
<tr><td>Demo</td><td>"DEMO"</td></tr>

</table>

## Pricing Type Enum <sub><sup>[PricingTypeEnum](./src/enum/index.ts#L277)</sup></sub>

Pricing type status enum
<table>
<tr><td>Free</td><td>"free"</td></tr>
<tr><td>Custom</td><td>"enterprise-stripe"</td></tr>
<tr><td>Basic Month Stripe</td><td>"basic-month-stripe"</td></tr>
<tr><td>Basic Year Stripe</td><td>"basic-year-stripe"</td></tr>
<tr><td>Pro Month Stripe</td><td>"pro-month-stripe"</td></tr>
<tr><td>Pro Year Stripe</td><td>"pro-year-stripe"</td></tr>
<tr><td>Business Month Stripe</td><td>"business-month-stripe"</td></tr>
<tr><td>Business Year Stripe</td><td>"business-year-stripe"</td></tr>
<tr><td>Premium Month Stripe</td><td>"premium-month-stripe"</td></tr>
<tr><td>Premium Year Stripe</td><td>"premium-year-stripe"</td></tr>

</table>

## Quote Status Enum <sub><sup>[QuoteStatusEnum](./src/enum/index.ts#L293)</sup></sub>

Quote status enum
<table>
<tr><td>Paid</td><td>"PAID"</td></tr>
<tr><td>Signed</td><td>"SIGNED"</td></tr>
<tr><td>Pending</td><td>"PENDING"</td></tr>
<tr><td>Archived</td><td>"ARCHIVED"</td></tr>
<tr><td>Confirmed</td><td>"CONFIRMED"</td></tr>
<tr><td>Cancelled</td><td>"CANCELLED"</td></tr>
<tr><td>Deposited</td><td>"DEPOSITED"</td></tr>

</table>

## Status Enum <sub><sup>[StatusEnum](./src/enum/index.ts#L306)</sup></sub>

Status enum
<table>
<tr><td>Public</td><td>"PUBLIC"</td></tr>
<tr><td>Private</td><td>"PRIVATE"</td></tr>

</table>

## Section Status Enum <sub><sup>[SectionStatusEnum](./src/enum/index.ts#L314)</sup></sub>

Section status enum
<table>
<tr><td>Open</td><td>"OPEN"</td></tr>
<tr><td>Close</td><td>"CLOSE"</td></tr>

</table>

## Upload Folder Enum <sub><sup>[UploadFolderEnum](./src/enum/index.ts#L322)</sup></sub>

Upload folder enum
<table>
<tr><td>File</td><td>"FILE"</td></tr>
<tr><td>Cover</td><td>"COVER"</td></tr>
<tr><td>Image</td><td>"IMAGE"</td></tr>
<tr><td>Document</td><td>"DOCUMENT"</td></tr>

</table>

