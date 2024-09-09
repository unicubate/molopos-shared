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
- [Statuses Project](#statuses-project)
- [Status Register Type](#status-register-type)
- [Account Type](#account-type)
- [Transaction Type](#transaction-type)
- [Voucher Activity Type](#voucher-activity-type)
- [Voucher Category](#voucher-category)
- [Survey Level](#survey-level), user classification survey score
## Document Type

<table>
<tr><td>Pending</td><td>'-1'</td></tr>
<tr><td>Identity Card (identity document)</td><td>'0'</td></tr>
<tr><td>Proof Of Address</td><td>'1'</td></tr>
<tr><td>Iban Cert</td><td>'2'</td></tr>
<tr><td>Passport EU (identity document)</td><td>'3'</td></tr>
<tr><td>Passport Extra EU (identity document)</td><td>'4'</td></tr>
<tr><td>Residence</td><td>'5'</td></tr>
<tr><td>Company Cert</td><td>'7'</td></tr>
<tr><td>Driving License (identity document)</td><td>'11'</td></tr>
<tr><td>Shareholder1ID (identity document)</td><td>'14'</td></tr>
<tr><td>Shareholder2ID (identity document)</td><td>'15'</td></tr>
<tr><td>Shareholder3ID (identity document)</td><td>'16'</td></tr>
<tr><td>Shareholder4ID (identity document)</td><td>'17'</td></tr>
<tr><td>Residency Permit</td><td>'5'</td></tr>
<tr><td>Status</td><td>'12'</td></tr>
<tr><td>Selfie</td><td>'13'</td></tr>
<tr><td>Ssd Mandate</td><td>'21'</td></tr>

</table>

## Document Status

<table>
<tr><td>Initialized</td><td>'-1'</td></tr>
<tr><td>On Hold</td><td>'0'</td></tr>
<tr><td>Received</td><td>'1'</td></tr>
<tr><td>Accepted</td><td>'2'</td></tr>
<tr><td>Rejected</td><td>'3'</td></tr>
<tr><td>Rejected Unreadable</td><td>'4'</td></tr>
<tr><td>Rejected Expired</td><td>'5'</td></tr>
<tr><td>Rejected Wrong Type</td><td>'6'</td></tr>
<tr><td>Rejected Wrong Name</td><td>'7'</td></tr>
<tr><td>Rejected Duplicated</td><td>'8'</td></tr>

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
<tr><td>Wallet SC (recrowd wallet)</td><td>'-1'</td></tr>
<tr><td>Missing Documents</td><td>'2'</td></tr>
<tr><td>Documents Rejected</td><td>'3'</td></tr>
<tr><td>Registered</td><td>'5'</td></tr>
<tr><td>Valid</td><td>'6'</td></tr>
<tr><td>Pending KYC3</td><td>'7'</td></tr>
<tr><td>Expired Documents</td><td>'8'</td></tr>
<tr><td>Blocked</td><td>'10'</td></tr>
<tr><td>Closed</td><td>'12'</td></tr>
<tr><td>Missing Documents KYC3</td><td>'13'</td></tr>
<tr><td>One Time Customer</td><td>'14'</td></tr>
<tr><td>Special Wallet For Crowdlending</td><td>'15'</td></tr>
<tr><td>Technical Wallet</td><td>'16'</td></tr>

</table>

## Transaction Status

<table>
<tr><td>Created</td><td>'-1'</td></tr>
<tr><td>Completed</td><td>'0'</td></tr>
<tr><td>Completed P2P</td><td>'3'</td></tr>
<tr><td>Pending</td><td>'4'</td></tr>
<tr><td>Error</td><td>'6'</td></tr>

</table>

## Iban Status

<table>
<tr><td>None</td><td>'1'</td></tr>
<tr><td>Internal</td><td>'2'</td></tr>
<tr><td>Not Used</td><td>'3'</td></tr>
<tr><td>To Be Verified</td><td>'4'</td></tr>
<tr><td>Enabled</td><td>'5'</td></tr>
<tr><td>Rejected By Bank</td><td>'6'</td></tr>
<tr><td>Rejected No Owner</td><td>'7'</td></tr>
<tr><td>Disabled</td><td>'8'</td></tr>
<tr><td>Rejected By Lemonway</td><td>'9'</td></tr>

</table>

## Money In Type

<table>
<tr><td>Wire Received</td><td>'10'</td></tr>
<tr><td>Sdd Received</td><td>'11'</td></tr>
<tr><td>Cheque Received</td><td>'12'</td></tr>
<tr><td>Card Received Subscription</td><td>'22'</td></tr>
<tr><td>Sofort Received</td><td>'48'</td></tr>

</table>

## Gender Type

lemonway only

<table>
<tr><td>Male</td><td>'M'</td></tr>
<tr><td>Female</td><td>'F'</td></tr>
<tr><td>Juridical</td><td>'J'</td></tr>
<tr><td>Unknown</td><td>'U'</td></tr>

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
<tr><td>Created</td><td>-1</td></tr>
<tr><td>Waiting</td><td>0</td></tr>
<tr><td>Confirmed</td><td>1</td></tr>
<tr><td>Active</td><td>2</td></tr>
<tr><td>Done (every rate has been paid)</td><td>3</td></tr>

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

## Statuses Project

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

## Status Register Type

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

## Voucher Activity Type

<table>
<tr><td>Receive</td><td>"RECEIVE"</td></tr>
<tr><td>Friend</td><td>"FRIEND"</td></tr>
<tr><td>Friend Invested</td><td>"FRIEND_INVESTED"</td></tr>
<tr><td>Promotion</td><td>"PROMOTION"</td></tr>
<tr><td>Invited</td><td>"INVITED"</td></tr>

</table>

## Voucher Category

<table>
<tr><td>Wallet</td><td>"WALLET"</td></tr>
<tr><td>Investment</td><td>"INVESTMENT"</td></tr>
<tr><td>Invite User</td><td>"INVITE_USER"</td></tr>
<tr><td>Invite</td><td>"INVITE"</td></tr>
<tr><td>First Investment</td><td>"FIRST_INVESTMENT"</td></tr>
<tr><td>Not Benefit</td><td>"NOT_BENEFIT"</td></tr>
<tr><td>Tracking Code</td><td>"TRACKING_CODE"</td></tr>

</table>

## Survey Level

user classification survey score

<table>
<tr><td>Low (score < 50)</td><td>"LOW"</td></tr>
<tr><td>Mid (50 <= score < 90)</td><td>"MIDDLE"</td></tr>
<tr><td>High (score >= 90)</td><td>"HIGH"</td></tr>

</table>

