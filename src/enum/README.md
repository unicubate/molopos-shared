# Statuses and type

<small><sup>This file is generated from the source code. Do not edit directly, use `npm run docs`</sup></small>

## Document Type

|name|value|
|----|-----|
|Pending|'-1'|
|Identity Card|'0'|
|Proof Of Address|'1'|
|Iban Cert|'2'|
|Passport EU|'3'|
|Passport Extra EU|'4'|
|Residence|'5'|
|Company Cert|'7'|
|Driving License|'11'|
|Shareholder1ID|'14'|
|Shareholder2ID|'15'|
|Shareholder3ID|'16'|
|Shareholder4ID|'17'|
|Residency Permit|'5'|
|Status|'12'|
|Selfie|'13'|
|Ssd Mandate|'21'|


## Document Status

|name|value|
|----|-----|
|Initialized|'-1'|
|On Hold|'0'|
|Received|'1'|
|Accepted|'2'|
|Rejected|'3'|
|Rejected Unreadable|'4'|
|Rejected Expired|'5'|
|Rejected Wrong Type|'6'|
|Rejected Wrong Name|'7'|
|Rejected Duplicated|'8'|


## Onfido Document Status

|name|value|
|----|-----|
|Initialized|0|
|Processing|1|
|Complete|2|
|Error|3|


## Wallet Status

|name|value|
|----|-----|
|Wallet SC|'-1'|
|Missing Documents|'2'|
|Documents Rejected|'3'|
|Registered|'5'|
|Valid|'6'|
|Pending KYC3|'7'|
|Expired Documents|'8'|
|Blocked|'10'|
|Closed|'12'|
|Missing Documents KYC3|'13'|
|One Time Customer|'14'|
|Special Wallet For Crowdlending|'15'|
|Technical Wallet|'16'|


## Transaction Status

|name|value|
|----|-----|
|Created|'-1'|
|Completed|'0'|
|Completed P2P|'3'|
|Pending|'4'|
|Error|'6'|


## Iban Status

|name|value|
|----|-----|
|None|'1'|
|Internal|'2'|
|Not Used|'3'|
|To Be Verified|'4'|
|Enabled|'5'|
|Rejected By Bank|'6'|
|Rejected No Owner|'7'|
|Disabled|'8'|
|Rejected By Lemonway|'9'|


## Money In Type

|name|value|
|----|-----|
|Wire Received|'10'|
|Sdd Received|'11'|
|Cheque Received|'12'|
|Card Received Subscription|'22'|
|Sofort Received|'48'|


## Gender Type

|name|value|
|----|-----|
|Male|'M'|
|Female|'F'|
|Juridical|'J'|
|Unknown|'U'|


## Alert Type

|name|value|
|----|-----|
|Info|0|
|Warning|1|
|Error|2|


## Notification Type

|name|value|
|----|-----|
|Info|0|
|Basic|1|
|Warning|2|
|Error|3|


## Project Payout Strategy Type

|name|value|
|----|-----|
|Immediate|0|
|Partial|1|


## Event Status

|name|value|
|----|-----|
|Overdue|0|
|Active|1|
|Done|2|


## Prospect Status

|name|value|
|----|-----|
|Created|-1|
|Overdue|0|
|Active|1|
|Done|2|


## Prospect Rate Status

|name|value|
|----|-----|
|Created|0|
|To Be Paid|1|
|In Payment|2|
|Paid|3|
|Error|4|


## Prospect Rate Investor Status

|name|value|
|----|-----|
|Created|0|
|To Be Paid|1|
|In Payment|2|
|Paid|3|
|Error|4|


## Investment Status

|name|value|
|----|-----|
|Created|-1|
|Confirmed|2|
|Refunded|3|


## Classification Status

|name|value|
|----|-----|
|Pending|0|
|Approved|1|
|Declined|2|


## Category Project

|name|value|
|----|-----|
|Relax|"RELAX"|
|Exclusive|"EXCLUSIVE"|
|Elite|"ELITE"|


## Statuses Project

|name|value|
|----|-----|
|Default|"DEFAULT"|
|Draft|"DRAFT"|
|Coming Soon|"COMING_SOON"|
|Crowdfunding|"CROWDFUNDING"|
|Financed|"READY"|
|Closed|"CLOSED"|
|Test|"TEST"|
|Overdue (in gestione)|"OVERDUE"|
|Postponed (in proproga)|"POSTPONED"|


## Status Register Type

|name|value|
|----|-----|
|Registered|"REGISTERED"|
|Email Confirmed|"REGISTERED_CONFIRMED"|
|KYC Completed|"REGISTERED_PROFILE"|
|Document Uploaded|"REGISTERED_DOCUMENT"|
|Aml Completed|"REGISTERED_AML"|
|Registration Completed|"REGISTERED_COMPLETED"|
|Investor|"INVESTOR"|


## Account Type

|name|value|
|----|-----|
|Company|"AZIENDA"|
|Private|"PRIVATO"|
|Proponent|"PROPONENT"|


## Transaction Type

|name|value|
|----|-----|
|Money In|"MONEYIN"|
|Money Out|"MONEYOUT"|
|P2P|"P2P"|
|Pay By Bank|"PAYBYBANK"|
|Voucher|"VOUCHER"|


## Voucher Activity Type

|name|value|
|----|-----|
|Receive|"RECEIVE"|
|Friend|"FRIEND"|
|Friend Invested|"FRIEND_INVESTED"|
|Promotion|"PROMOTION"|
|Invited|"INVITED"|


## Voucher Category

|name|value|
|----|-----|
|Wallet|"WALLET"|
|Investment|"INVESTMENT"|
|Invite User|"INVITE_USER"|
|Invite|"INVITE"|
|First Investment|"FIRST_INVESTMENT"|
|Not Benefit|"NOT_BENEFIT"|
|Tracking Code|"TRACKING_CODE"|


## Survey Level

User classification survey score

|name|value|
|----|-----|
|Low (score < 50)|"LOW"|
|Mid (50 <= score < 90)|"MIDDLE"|
|High (score >= 90)|"HIGH"|


