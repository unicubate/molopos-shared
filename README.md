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
- [Transaction Direction Enum](#transaction-direction-enum-transactiondirectionenum), Transaction direction enum
- [Transaction Model Enum](#transaction-model-enum-transactionmodelenum), Transaction model enum
- [Boolean String Enum](#boolean-string-enum-booleanstringenum), Boolean string enum
- [Sort Order Enum](#sort-order-enum-sortorderenum), Sort type enum
- [Export Ext Enum](#export-ext-enum-exportextenum), Export file extensions
- [Currency Enum](#currency-enum-currencyenum), Currency codes used in the system @see https:en.wikipedia.orgwikiISO_4217
- [Quote Signed View Enum](#quote-signed-view-enum-quotesignedviewenum), Quote signed view enum
- [Contributor Role Enum](#contributor-role-enum-contributorroleenum), Contributor role enum
- [Status Quote Item Enum](#status-quote-item-enum-statusquoteitemenum), Status quote item enum
- [Private Public Enum](#private-public-enum-privatepublicenum), Private public enum
- [Pages Provider Enum](#pages-provider-enum-pagesproviderenum), Pages provider enum
- [Application Section Module Enum](#application-section-module-enum-applicationsectionmoduleenum), Application section module enum
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
<tr><td>Unit</td><td>"UNIT"</td></tr>
<tr><td>Post</td><td>"POST"</td></tr>
<tr><td>Shop</td><td>"SHOP"</td></tr>
<tr><td>Brand</td><td>"BRAND"</td></tr>
<tr><td>Order</td><td>"ORDER"</td></tr>
<tr><td>Quote</td><td>"QUOTE"</td></tr>
<tr><td>Message</td><td>"MESSAGE"</td></tr>
<tr><td>Catalog</td><td>"CATALOG"</td></tr>
<tr><td>Product</td><td>"PRODUCT"</td></tr>
<tr><td>Contact</td><td>"CONTACT"</td></tr>
<tr><td>Invoice</td><td>"INVOICE"</td></tr>
<tr><td>Expense</td><td>"EXPENSE"</td></tr>
<tr><td>Profile</td><td>"PROFILE"</td></tr>
<tr><td>Variant</td><td>"VARIANT"</td></tr>
<tr><td>Checkout</td><td>"CHECKOUT"</td></tr>
<tr><td>Category</td><td>"CATEGORY"</td></tr>
<tr><td>Warehouse</td><td>"WAREHOUSE"</td></tr>
<tr><td>Order Item</td><td>"ORDERITEM"</td></tr>
<tr><td>Quote Item</td><td>"QUOTEITEM"</td></tr>
<tr><td>Quote Option</td><td>"QUOTEOPTION"</td></tr>
<tr><td>Section</td><td>"SECTION"</td></tr>
<tr><td>Discount</td><td>"DISCOUNT"</td></tr>
<tr><td>User Address</td><td>"USERADDRESS"</td></tr>
<tr><td>Subcategory</td><td>"SUBCATEGORY"</td></tr>
<tr><td>Expense Item</td><td>"EXPENSEITEM"</td></tr>
<tr><td>Organization</td><td>"ORGANIZATION"</td></tr>
<tr><td>Application Section</td><td>"APPLICATIONSECTION"</td></tr>

</table>

## Transaction Direction Enum <sub><sup>[TransactionDirectionEnum](./src/enum/index.ts#L75)</sup></sub>

Transaction direction enum
<table>
<tr><td>In</td><td>"IN"</td></tr>
<tr><td>Out</td><td>"OUT"</td></tr>
<tr><td>In Progress</td><td>"INPROGRESS"</td></tr>

</table>

## Transaction Model Enum <sub><sup>[TransactionModelEnum](./src/enum/index.ts#L84)</sup></sub>

Transaction model enum
<table>
<tr><td>Product</td><td>"PRODUCT"</td></tr>
<tr><td>Store Shop</td><td>"STORESHOP"</td></tr>
<tr><td>Subscription</td><td>"SUBSCRIPTION"</td></tr>
<tr><td>Withdraw</td><td>"WITHDRAW"</td></tr>

</table>

## Boolean String Enum <sub><sup>[BooleanStringEnum](./src/enum/index.ts#L94)</sup></sub>

Boolean string enum
<table>
<tr><td>True</td><td>"true"</td></tr>
<tr><td>False</td><td>"false"</td></tr>

</table>

## Sort Order Enum <sub><sup>[SortOrderEnum](./src/enum/index.ts#L102)</sup></sub>

Sort type enum
<table>
<tr><td>Asc</td><td>"ASC"</td></tr>
<tr><td>Desc</td><td>"DESC"</td></tr>

</table>

## Export Ext Enum <sub><sup>[ExportExtEnum](./src/enum/index.ts#L110)</sup></sub>

Export file extensions
<table>
<tr><td>Csv</td><td>"csv"</td></tr>
<tr><td>Xlsx</td><td>"xlsx"</td></tr>

</table>

## Currency Enum <sub><sup>[CurrencyEnum](./src/enum/index.ts#L119)</sup></sub>

Currency codes used in the system @see https:en.wikipedia.orgwikiISO_4217
<table>
<tr><td>USD</td><td>"USD"</td></tr>
<tr><td>GBP</td><td>"GBP"</td></tr>
<tr><td>XAF</td><td>"XAF"</td></tr>
<tr><td>EUR</td><td>"EUR"</td></tr>
<tr><td>XOF</td><td>"XOF"</td></tr>
<tr><td>CHF</td><td>"CHF"</td></tr>
<tr><td>CAD</td><td>"CAD"</td></tr>

</table>

## Quote Signed View Enum <sub><sup>[QuoteSignedViewEnum](./src/enum/index.ts#L132)</sup></sub>

Quote signed view enum
<table>
<tr><td>Signed</td><td>"signed"</td></tr>
<tr><td>View</td><td>"view"</td></tr>

</table>

## Contributor Role Enum <sub><sup>[ContributorRoleEnum](./src/enum/index.ts#L140)</sup></sub>

Contributor role enum
<table>
<tr><td>Admin</td><td>"ADMIN"</td></tr>
<tr><td>Moderator</td><td>"MODERATOR"</td></tr>

</table>

## Status Quote Item Enum <sub><sup>[StatusQuoteItemEnum](./src/enum/index.ts#L148)</sup></sub>

Status quote item enum
<table>
<tr><td>Pending</td><td>"PENDING"</td></tr>
<tr><td>Confirmed</td><td>"CONFIRMED"</td></tr>
<tr><td>Or For Delivery</td><td>"OR_FOR_DELIVERY"</td></tr>
<tr><td>Received</td><td>"RECEIVED"</td></tr>
<tr><td>Cancelled</td><td>"CANCELLED"</td></tr>

</table>

## Private Public Enum <sub><sup>[PrivatePublicEnum](./src/enum/index.ts#L159)</sup></sub>

Private public enum
<table>
<tr><td>Private</td><td>"PRIVATE"</td></tr>
<tr><td>Public</td><td>"PUBLIC"</td></tr>

</table>

## Pages Provider Enum <sub><sup>[PagesProviderEnum](./src/enum/index.ts#L167)</sup></sub>

Pages provider enum
<table>
<tr><td>Dashboard</td><td>"DASHBOARD"</td></tr>
<tr><td>Point Of Sale</td><td>"POINTOFSALE"</td></tr>
<tr><td>Shop</td><td>"SHOP"</td></tr>
<tr><td>Variant</td><td>"VARIANT"</td></tr>
<tr><td>Catalog</td><td>"CATALOG"</td></tr>
<tr><td>Customer</td><td>"CUSTOMER"</td></tr>

</table>

## Application Section Module Enum <sub><sup>[ApplicationSectionModuleEnum](./src/enum/index.ts#L179)</sup></sub>

Application section module enum
<table>
<tr><td>Quote</td><td>"QUOTE"</td></tr>
<tr><td>Product</td><td>"PRODUCT"</td></tr>
<tr><td>Expense</td><td>"EXPENSE"</td></tr>

</table>

