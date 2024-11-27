<small><sup>This file is generated from the source code. Do not edit directly, use `npm run docs`</sup></small>

# Statuses and type

- [Document Type](#document-type)
- [Document Status](#document-status)
- [Onfido Document Status](#onfido-document-status), status of an identity document sent to onfido
- [Wallet Status](#wallet-status)
- [Transaction Status](#transaction-status)
- [Iban Status](#iban-status)
- [Money In Type](#money-in-type)
- [Gender Type](#gender-type), lemonway only
- [Alert Type](#alert-type)
- [Notification Type](#notification-type)
- [Project Payout Strategy Type](#project-payout-strategy-type)
- [Event Status](#event-status)
- [Prospect Status](#prospect-status)
- [Prospect Rate Status](#prospect-rate-status)
- [Prospect Rate Investor Status](#prospect-rate-investor-status)
- [Investment Status](#investment-status)
- [Classification Status](#classification-status)
- [Category Project](#category-project)
- [Project Status](#project-status)
- [User Registration Status](#user-registration-status), a.k.a. StatusRegisterType
- [Account Type](#account-type)
- [Transaction Type](#transaction-type)
- [Voucher Category](#voucher-category)
- [Voucher Activity Type](#voucher-activity-type)
- [Survey Level](#survey-level), user classification survey score
- [Legal Form](#legal-form)
- [Top Investor Type](#top-investor-type), a.k.a. StatusInvestmentTop
- [Permission](#permission), backoffice permissions
- [TAS Onboarding Status](#tas-onboarding-status)
- [TAS AML Question Type](#tas-aml-question-type)
- [TAS AML Answer Type](#tas-aml-answer-type)
- [TAS User Type](#tas-user-type)
- [TAS Gender](#tas-gender)
- [TAS Address Type](#tas-address-type)
- [TAS Document Type](#tas-document-type)
- [TAS Additional Document Type](#tas-additional-document-type)
- [TAS Document Issuer](#tas-document-issuer)
## Document Type

<table>
<tr><td>Pending</td><td>"-1"</td></tr>
<tr><td>Identity Card (identity document)</td><td>"0"</td></tr>
<tr><td>Proof Of Address</td><td>"1"</td></tr>
<tr><td>Iban Cert</td><td>"2"</td></tr>
<tr><td>Passport EU (identity document)</td><td>"3"</td></tr>
<tr><td>Passport Extra EU (identity document)</td><td>"4"</td></tr>
<tr><td>Residence</td><td>"5"</td></tr>
<tr><td>Company Cert</td><td>"7"</td></tr>
<tr><td>Driving License (identity document)</td><td>"11"</td></tr>
<tr><td>Shareholder1ID (identity document)</td><td>"14"</td></tr>
<tr><td>Shareholder2ID (identity document)</td><td>"15"</td></tr>
<tr><td>Shareholder3ID (identity document)</td><td>"16"</td></tr>
<tr><td>Shareholder4ID (identity document)</td><td>"17"</td></tr>
<tr><td>Residency Permit</td><td>"5"</td></tr>
<tr><td>Status</td><td>"12"</td></tr>
<tr><td>Selfie</td><td>"13"</td></tr>
<tr><td>Ssd Mandate</td><td>"21"</td></tr>

</table>

## Document Status

<table>
<tr><td>Initialized</td><td>"-1"</td></tr>
<tr><td>On Hold</td><td>"0"</td></tr>
<tr><td>Received</td><td>"1"</td></tr>
<tr><td>Accepted</td><td>"2"</td></tr>
<tr><td>Rejected</td><td>"3"</td></tr>
<tr><td>Rejected Unreadable</td><td>"4"</td></tr>
<tr><td>Rejected Expired</td><td>"5"</td></tr>
<tr><td>Rejected Wrong Type</td><td>"6"</td></tr>
<tr><td>Rejected Wrong Name</td><td>"7"</td></tr>
<tr><td>Rejected Duplicated</td><td>"8"</td></tr>

</table>

## Onfido Document Status

status of an identity document sent to onfido

<table>
<tr><td>Initialized</td><td>0</td></tr>
<tr><td>Processing</td><td>1</td></tr>
<tr><td>Complete</td><td>2</td></tr>
<tr><td>Error</td><td>3</td></tr>

</table>

## Wallet Status

<table>
<tr><td>Wallet SC (recrowd wallet)</td><td>"-1"</td></tr>
<tr><td>Missing Documents</td><td>"2"</td></tr>
<tr><td>Documents Rejected</td><td>"3"</td></tr>
<tr><td>Registered</td><td>"5"</td></tr>
<tr><td>Valid</td><td>"6"</td></tr>
<tr><td>Pending KYC3</td><td>"7"</td></tr>
<tr><td>Expired Documents</td><td>"8"</td></tr>
<tr><td>Blocked</td><td>"10"</td></tr>
<tr><td>Closed</td><td>"12"</td></tr>
<tr><td>Missing Documents KYC3</td><td>"13"</td></tr>
<tr><td>One Time Customer</td><td>"14"</td></tr>
<tr><td>Special Wallet For Crowdlending</td><td>"15"</td></tr>
<tr><td>Technical Wallet</td><td>"16"</td></tr>

</table>

## Transaction Status

<table>
<tr><td>Created</td><td>"-1"</td></tr>
<tr><td>Completed</td><td>"0"</td></tr>
<tr><td>Completed P2P</td><td>"3"</td></tr>
<tr><td>Pending</td><td>"4"</td></tr>
<tr><td>Error</td><td>"6"</td></tr>

</table>

## Iban Status

<table>
<tr><td>None</td><td>"1"</td></tr>
<tr><td>Internal</td><td>"2"</td></tr>
<tr><td>Not Used</td><td>"3"</td></tr>
<tr><td>To Be Verified</td><td>"4"</td></tr>
<tr><td>Enabled</td><td>"5"</td></tr>
<tr><td>Rejected By Bank</td><td>"6"</td></tr>
<tr><td>Rejected No Owner</td><td>"7"</td></tr>
<tr><td>Disabled</td><td>"8"</td></tr>
<tr><td>Rejected By Lemonway</td><td>"9"</td></tr>

</table>

## Money In Type

<table>
<tr><td>Wire Received</td><td>"10"</td></tr>
<tr><td>Sdd Received</td><td>"11"</td></tr>
<tr><td>Cheque Received</td><td>"12"</td></tr>
<tr><td>Card Received Subscription</td><td>"22"</td></tr>
<tr><td>Sofort Received</td><td>"48"</td></tr>

</table>

## Gender Type

lemonway only

<table>
<tr><td>Male</td><td>"M"</td></tr>
<tr><td>Female</td><td>"F"</td></tr>
<tr><td>Juridical</td><td>"J"</td></tr>
<tr><td>Unknown</td><td>"U"</td></tr>

</table>

## Alert Type

<table>
<tr><td>Info</td><td>0</td></tr>
<tr><td>Warning</td><td>1</td></tr>
<tr><td>Error</td><td>2</td></tr>

</table>

## Notification Type

<table>
<tr><td>Info</td><td>0</td></tr>
<tr><td>Basic</td><td>1</td></tr>
<tr><td>Warning</td><td>2</td></tr>
<tr><td>Error</td><td>3</td></tr>

</table>

## Project Payout Strategy Type

<table>
<tr><td>Immediate</td><td>0</td></tr>
<tr><td>Partial</td><td>1</td></tr>

</table>

## Event Status

<table>
<tr><td>Overdue</td><td>0</td></tr>
<tr><td>Active</td><td>1</td></tr>
<tr><td>Done</td><td>2</td></tr>

</table>

## Prospect Status

<table>
<tr><td>Created (default status)</td><td>-1</td></tr>
<tr><td>Modified (modified by user)</td><td>0</td></tr>
<tr><td>Refund Period (awaiting 5-day refund period)</td><td>1</td></tr>
<tr><td>Active (paying rates)</td><td>2</td></tr>
<tr><td>Done (all rates paid)</td><td>3</td></tr>

</table>

## Prospect Rate Status

<table>
<tr><td>Created</td><td>0</td></tr>
<tr><td>To Be Paid</td><td>1</td></tr>
<tr><td>In Payment</td><td>2</td></tr>
<tr><td>Paid</td><td>3</td></tr>
<tr><td>Error</td><td>4</td></tr>

</table>

## Prospect Rate Investor Status

<table>
<tr><td>Created</td><td>0</td></tr>
<tr><td>To Be Paid</td><td>1</td></tr>
<tr><td>In Payment</td><td>2</td></tr>
<tr><td>Paid</td><td>3</td></tr>
<tr><td>Error</td><td>4</td></tr>

</table>

## Investment Status

<table>
<tr><td>Created</td><td>-1</td></tr>
<tr><td>Success</td><td>2</td></tr>
<tr><td>Refunded</td><td>3</td></tr>

</table>

## Classification Status

<table>
<tr><td>Pending</td><td>0</td></tr>
<tr><td>Approved</td><td>1</td></tr>
<tr><td>Declined</td><td>2</td></tr>

</table>

## Category Project

<table>
<tr><td>Relax</td><td>"RELAX"</td></tr>
<tr><td>Exclusive</td><td>"EXCLUSIVE"</td></tr>
<tr><td>Elite</td><td>"ELITE"</td></tr>

</table>

## Project Status

<table>
<tr><td>Default</td><td>"DEFAULT"</td></tr>
<tr><td>Draft</td><td>"DRAFT"</td></tr>
<tr><td>Coming Soon</td><td>"COMING_SOON"</td></tr>
<tr><td>Crowdfunding</td><td>"CROWDFUNDING"</td></tr>
<tr><td>Financed</td><td>"READY"</td></tr>
<tr><td>Closed</td><td>"CLOSED"</td></tr>
<tr><td>Test</td><td>"TEST"</td></tr>
<tr><td>Overdue (in gestione)</td><td>"OVERDUE"</td></tr>
<tr><td>Postponed (in proproga)</td><td>"POSTPONED"</td></tr>

</table>

## User Registration Status

a.k.a. StatusRegisterType

<table>
<tr><td>Registered</td><td>"REGISTERED"</td></tr>
<tr><td>Email Confirmed</td><td>"REGISTERED_CONFIRMED"</td></tr>
<tr><td>KYC Completed</td><td>"REGISTERED_PROFILE"</td></tr>
<tr><td>Document Uploaded</td><td>"REGISTERED_DOCUMENT"</td></tr>
<tr><td>Aml Completed</td><td>"REGISTERED_AML"</td></tr>
<tr><td>Registration Completed</td><td>"REGISTERED_COMPLETED"</td></tr>
<tr><td>Investor</td><td>"INVESTOR"</td></tr>

</table>

## Account Type

<table>
<tr><td>Company</td><td>"AZIENDA"</td></tr>
<tr><td>Private</td><td>"PRIVATO"</td></tr>
<tr><td>Proponent</td><td>"PROPONENT"</td></tr>

</table>

## Transaction Type

<table>
<tr><td>Money In</td><td>"MONEYIN"</td></tr>
<tr><td>Money Out</td><td>"MONEYOUT"</td></tr>
<tr><td>P2P</td><td>"P2P"</td></tr>
<tr><td>Pay By Bank</td><td>"PAYBYBANK"</td></tr>
<tr><td>Voucher</td><td>"VOUCHER"</td></tr>

</table>

## Voucher Category

<table>
<tr><td>Tracking Code</td><td>"TRACKING_CODE"</td></tr>
<tr><td>Investment</td><td>"INVESTMENT"</td></tr>
<tr><td>First Investment</td><td>"FIRST_INVESTMENT"</td></tr>
<tr><td>Invite Friend</td><td>"INVITE_FRIEND"</td></tr>
<tr><td>Wallet</td><td>"WALLET"</td></tr>

</table>

## Voucher Activity Type

<table>
<tr><td>Friend Registration</td><td>"FRIEND_REGISTRATION"</td></tr>
<tr><td>Promotion</td><td>"PROMOTION"</td></tr>

</table>

## Survey Level

user classification survey score

<table>
<tr><td>Low (score < 50)</td><td>"LOW"</td></tr>
<tr><td>Mid (50 <= score < 90)</td><td>"MIDDLE"</td></tr>
<tr><td>High (score >= 90)</td><td>"HIGH"</td></tr>

</table>

## Legal Form

<table>
<tr><td>Spa</td><td>"SPA"</td></tr>
<tr><td>Srl</td><td>"SRL"</td></tr>

</table>

## Top Investor Type

a.k.a. StatusInvestmentTop

<table>
<tr><td>Top</td><td>"TOP"</td></tr>
<tr><td>Super Top</td><td>"SUPER_TOP"</td></tr>

</table>

## Permission

backoffice permissions

<table>
<tr><td>Assign Role</td><td>"assign:role"</td></tr>
<tr><td>Create Role</td><td>"create:role"</td></tr>
<tr><td>Read Role</td><td>"read:role"</td></tr>
<tr><td>Update Role</td><td>"update:role"</td></tr>
<tr><td>Delete Role</td><td>"delete:role"</td></tr>
<tr><td>Create Admin</td><td>"create:admin"</td></tr>
<tr><td>Read Admin</td><td>"read:admin"</td></tr>
<tr><td>Update Admin</td><td>"update:admin"</td></tr>
<tr><td>Delete Admin</td><td>"delete:admin"</td></tr>

</table>

## TAS Onboarding Status

<table>
<tr><td>Created</td><td>0</td></tr>
<tr><td>Completed</td><td>1</td></tr>
<tr><td>Aborted</td><td>2</td></tr>

</table>

## TAS AML Question Type

<table>
<tr><td>B2B</td><td>"AML-B2B"</td></tr>
<tr><td>B2C</td><td>"AML-B2C"</td></tr>

</table>

## TAS AML Answer Type

<table>
<tr><td>B2B</td><td>"AML-B2B-ANSWER"</td></tr>
<tr><td>B2C</td><td>"AML-B2C-ANSWER"</td></tr>

</table>

## TAS User Type

<table>
<tr><td>Private</td><td>"RETAIL"</td></tr>
<tr><td>Company</td><td>"BUSINESS"</td></tr>

</table>

## TAS Gender

<table>
<tr><td>Male</td><td>"M"</td></tr>
<tr><td>Female</td><td>"F"</td></tr>

</table>

## TAS Address Type

<table>
<tr><td>Residence</td><td>"RESIDENCE"</td></tr>
<tr><td>Domicile</td><td>"DOMICILE"</td></tr>
<tr><td>Legal</td><td>"LEGAL"</td></tr>
<tr><td>Office</td><td>"OFFICE"</td></tr>

</table>

## TAS Document Type

<table>
<tr><td>Identity Card</td><td>"IDENTITY_CARD"</td></tr>
<tr><td>Passport</td><td>"PASSPORT"</td></tr>
<tr><td>Driving License</td><td>"DRIVING_LICENSE"</td></tr>

</table>

## TAS Additional Document Type

<table>
<tr><td>Residency Permit</td><td>"PS"</td></tr>
<tr><td>W9</td><td>"W9"</td></tr>

</table>

## TAS Document Issuer

<table>
<tr><td>Municipality</td><td>"MUNICIPALITY"</td></tr>
<tr><td>Motorisation</td><td>"MCTC"</td></tr>
<tr><td>Embassy</td><td>"ITALIAN_REPRESENTATION_ABROAD"</td></tr>
<tr><td>Ministry</td><td>"MINISTRY"</td></tr>

</table>

