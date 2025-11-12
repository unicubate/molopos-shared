<small><sup>This file is generated from the source code. Do not edit directly, use `npm run docs`</sup></small>

# Statuses and types

- [Document Type](#document-type-documenttype)
- [Document Status](#document-status-documentstatus)
- [Onfido Document Status](#onfido-document-status-onfidodocumentstatus), status of an identity document sent to onfido
- [Wallet Status](#wallet-status-walletstatus)
- [Transaction Status](#transaction-status-transactionstatus)
- [Transaction Direction](#transaction-direction-transactiondirection)
- [Iban Status](#iban-status-ibanstatus)
- [Money In Type](#money-in-type-moneyintype)
- [Gender Type](#gender-type-gendertype), lemonway only
- [Alert Type](#alert-type-alerttype)
- [Notification Type](#notification-type-notificationtype)
- [Project Payout Strategy Type](#project-payout-strategy-type-projectpayoutstrategytype)
- [Event Status](#event-status-eventstatus)
- [Prospect Status](#prospect-status-prospectstatus)
- [Prospect Rate Status](#prospect-rate-status-prospectratestatus)
- [Prospect Rate Investor Status](#prospect-rate-investor-status-prospectrateinvestorstatus)
- [Investment Status](#investment-status-investmentstatus)
- [Classification Status](#classification-status-classificationstatus)
- [Category Project](#category-project-categoryproject)
- [Project Status](#project-status-projectstatus)
- [User Registration Status](#user-registration-status-userregistrationstatus), a.k.a. *StatusRegisterType*
- [Account Type](#account-type-accounttype)
- [Transaction Type](#transaction-type-transactiontype)
- [Voucher Category](#voucher-category-vouchercategory)
- [Voucher Activity Type](#voucher-activity-type-voucheractivitytype)
- [Survey Level](#survey-level-surveylevel), user classification survey score
- [Legal Form](#legal-form-legalform)
- [Top Investor Type](#top-investor-type-topinvestortype), a.k.a. *StatusInvestmentTop*
- [Integration Type](#integration-type-integrationtype)
- [Permission](#permission-permission), backoffice permissions
- [Auth Type](#auth-type-authtype)
- [TAS Onboarding Status](#tas-onboarding-status-tas_onboardingstatus)
- [TAS Onboarding Attempt Status](#tas-onboarding-attempt-status-tas_onboardingattemptstatus)
- [TAS AML Question Type](#tas-aml-question-type-tas_amlquestiontype)
- [TAS AML Answer Type](#tas-aml-answer-type-tas_amlanswertype)
- [TAS User Type](#tas-user-type-tas_usertype)
- [TAS Gender](#tas-gender-tas_gender)
- [TAS Address Type](#tas-address-type-tas_addresstype)
- [TAS Document Type](#tas-document-type-tas_documenttype)
- [TAS Additional Document Type](#tas-additional-document-type-tas_additionaldocumenttype)
- [TAS Document Issuer](#tas-document-issuer-tas_documentissuer)
- [TAS Shufti Status](#tas-shufti-status-tas_shuftistatus)
- [TAS Pep](#tas-pep-tas_pep)
- [TAS Pep Type](#tas-pep-type-tas_peptype)
- [TAS Shufti Error Target](#tas-shufti-error-target-tas_shuftierrortarget)
- [TAS Legal Form](#tas-legal-form-tas_legalform)
- [TAS Transaction Type](#tas-transaction-type-tas_transactiontype)
- [TAS Transaction Status](#tas-transaction-status-tas_transactionstatus)
- [TAS Operation Over All Status](#tas-operation-over-all-status-tas_operationoverallstatus)
- [TAS Operation Current Status](#tas-operation-current-status-tas_operationcurrentstatus)
- [TAS Transaction Direction](#tas-transaction-direction-tas_transactiondirection)
- [Tas Contracts Document Type](#tas-contracts-document-type-tascontracts_documenttype)
- [Bank Account Type](#bank-account-type-bankaccounttype)
- [Onboarding Types](#onboarding-types-onboardingtypes)
- [Gateway Type](#gateway-type-gatewaytype)
- [Amortization Method](#amortization-method-amortizationmethod)
- [Project Files Type](#project-files-type-projectfilestype)
- [Feature Flag](#feature-flag-featureflag)
- [User Onboarding Status](#user-onboarding-status-useronboardingstatus)
- [COI Relationship Type](#coi-relationship-type-coi_relationshiptype)
- [COI Alert Type](#coi-alert-type-coi_alerttype)
- [Restitution Type](#restitution-type-restitutiontype)
- [Project File Type](#project-file-type-projectfiletype)
- [Project File Subtype](#project-file-subtype-projectfilesubtype)
- [Event Type](#event-type-eventtype)
- [Partial Rate Types](#partial-rate-types-partialratetypes)
## Document Type <sub><sup>[DocumentType](./src/enum/index.ts#L1)</sup></sub>

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

## Document Status <sub><sup>[DocumentStatus](./src/enum/index.ts#L29)</sup></sub>

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

## Onfido Document Status <sub><sup>[OnfidoDocumentStatus](./src/enum/index.ts#L43)</sup></sub>

status of an identity document sent to onfido
<table>
<tr><td>Initialized</td><td>0</td></tr>
<tr><td>Processing</td><td>1</td></tr>
<tr><td>Complete</td><td>2</td></tr>
<tr><td>Error</td><td>3</td></tr>

</table>

## Wallet Status <sub><sup>[WalletStatus](./src/enum/index.ts#L50)</sup></sub>

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

## Transaction Status <sub><sup>[TransactionStatus](./src/enum/index.ts#L67)</sup></sub>

<table>
<tr><td>Created</td><td>"-1"</td></tr>
<tr><td>Completed</td><td>"0"</td></tr>
<tr><td>Completed P2P</td><td>"3"</td></tr>
<tr><td>Pending</td><td>"4"</td></tr>
<tr><td>Error</td><td>"6"</td></tr>

</table>

## Transaction Direction <sub><sup>[TransactionDirection](./src/enum/index.ts#L75)</sup></sub>

<table>
<tr><td>In</td><td>"IN"</td></tr>
<tr><td>Out</td><td>"OUT"</td></tr>

</table>

## Iban Status <sub><sup>[IbanStatus](./src/enum/index.ts#L80)</sup></sub>

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

## Money In Type <sub><sup>[MoneyInType](./src/enum/index.ts#L92)</sup></sub>

<table>
<tr><td>Wire Received</td><td>"10"</td></tr>
<tr><td>Sdd Received</td><td>"11"</td></tr>
<tr><td>Cheque Received</td><td>"12"</td></tr>
<tr><td>Card Received Subscription</td><td>"22"</td></tr>
<tr><td>Sofort Received</td><td>"48"</td></tr>

</table>

## Gender Type <sub><sup>[GenderType](./src/enum/index.ts#L101)</sup></sub>

lemonway only
<table>
<tr><td>Male</td><td>"M"</td></tr>
<tr><td>Female</td><td>"F"</td></tr>
<tr><td>Juridical</td><td>"J"</td></tr>
<tr><td>Unknown</td><td>"U"</td></tr>

</table>

## Alert Type <sub><sup>[AlertType](./src/enum/index.ts#L108)</sup></sub>

<table>
<tr><td>Info</td><td>0</td></tr>
<tr><td>Warning</td><td>1</td></tr>
<tr><td>Error</td><td>2</td></tr>

</table>

## Notification Type <sub><sup>[NotificationType](./src/enum/index.ts#L114)</sup></sub>

<table>
<tr><td>Info</td><td>0</td></tr>
<tr><td>Basic</td><td>1</td></tr>
<tr><td>Warning</td><td>2</td></tr>
<tr><td>Error</td><td>3</td></tr>

</table>

## Project Payout Strategy Type <sub><sup>[ProjectPayoutStrategyType](./src/enum/index.ts#L121)</sup></sub>

<table>
<tr><td>Immediate</td><td>0</td></tr>
<tr><td>Partial</td><td>1</td></tr>

</table>

## Event Status <sub><sup>[EventStatus](./src/enum/index.ts#L126)</sup></sub>

<table>
<tr><td>Overdue</td><td>0</td></tr>
<tr><td>Active</td><td>1</td></tr>
<tr><td>Done</td><td>2</td></tr>

</table>

## Prospect Status <sub><sup>[ProspectStatus](./src/enum/index.ts#L132)</sup></sub>

<table>
<tr><td>Created (default status)</td><td>-1</td></tr>
<tr><td>Modified (modified by user)</td><td>0</td></tr>
<tr><td>Refund Period (awaiting 5-day refund period)</td><td>1</td></tr>
<tr><td>Active (paying rates)</td><td>2</td></tr>
<tr><td>Done (all rates paid)</td><td>3</td></tr>

</table>

## Prospect Rate Status <sub><sup>[ProspectRateStatus](./src/enum/index.ts#L145)</sup></sub>

<table>
<tr><td>Created</td><td>0</td></tr>
<tr><td>To Be Paid</td><td>1</td></tr>
<tr><td>In Payment</td><td>2</td></tr>
<tr><td>Paid</td><td>3</td></tr>
<tr><td>Error</td><td>4</td></tr>

</table>

## Prospect Rate Investor Status <sub><sup>[ProspectRateInvestorStatus](./src/enum/index.ts#L153)</sup></sub>

<table>
<tr><td>Created</td><td>0</td></tr>
<tr><td>To Be Paid</td><td>1</td></tr>
<tr><td>In Payment</td><td>2</td></tr>
<tr><td>Paid</td><td>3</td></tr>
<tr><td>Error</td><td>4</td></tr>
<tr><td>Excluded</td><td>5</td></tr>

</table>

## Investment Status <sub><sup>[InvestmentStatus](./src/enum/index.ts#L162)</sup></sub>

<table>
<tr><td>Created</td><td>-1</td></tr>
<tr><td>Success</td><td>2</td></tr>
<tr><td>Refunded</td><td>3</td></tr>
<tr><td>Expired</td><td>4</td></tr>
<tr><td>Refund Requested</td><td>5</td></tr>

</table>

## Classification Status <sub><sup>[ClassificationStatus](./src/enum/index.ts#L170)</sup></sub>

<table>
<tr><td>Pending</td><td>0</td></tr>
<tr><td>Approved</td><td>1</td></tr>
<tr><td>Declined</td><td>2</td></tr>

</table>

## Category Project <sub><sup>[CategoryProject](./src/enum/index.ts#L176)</sup></sub>

<table>
<tr><td>Relax</td><td>"RELAX"</td></tr>
<tr><td>Exclusive</td><td>"EXCLUSIVE"</td></tr>
<tr><td>Elite</td><td>"ELITE"</td></tr>

</table>

## Project Status <sub><sup>[ProjectStatus](./src/enum/index.ts#L182)</sup></sub>

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
<tr><td>Settlement</td><td>"SETTLEMENT"</td></tr>

</table>

## User Registration Status <sub><sup>[UserRegistrationStatus](./src/enum/index.ts#L198)</sup></sub>

a.k.a. *StatusRegisterType*
<table>
<tr><td>Registered</td><td>"REGISTERED"</td></tr>
<tr><td>Email Confirmed</td><td>"REGISTERED_CONFIRMED"</td></tr>
<tr><td>KYC Completed</td><td>"REGISTERED_PROFILE"</td></tr>
<tr><td>Document Uploaded</td><td>"REGISTERED_DOCUMENT"</td></tr>
<tr><td>Aml Completed</td><td>"REGISTERED_AML"</td></tr>
<tr><td>Registration Completed</td><td>"REGISTERED_COMPLETED"</td></tr>
<tr><td>Investor</td><td>"INVESTOR"</td></tr>

</table>

## Account Type <sub><sup>[AccountType](./src/enum/index.ts#L208)</sup></sub>

<table>
<tr><td>Company</td><td>"AZIENDA"</td></tr>
<tr><td>Private</td><td>"PRIVATO"</td></tr>
<tr><td>Proponent</td><td>"PROPONENT"</td></tr>

</table>

## Transaction Type <sub><sup>[TransactionType](./src/enum/index.ts#L214)</sup></sub>

<table>
<tr><td>Money In</td><td>"MONEYIN"</td></tr>
<tr><td>Money Out</td><td>"MONEYOUT"</td></tr>
<tr><td>P2P</td><td>"P2P"</td></tr>
<tr><td>Pay By Bank</td><td>"PAYBYBANK"</td></tr>
<tr><td>Voucher</td><td>"VOUCHER"</td></tr>

</table>

## Voucher Category <sub><sup>[VoucherCategory](./src/enum/index.ts#L222)</sup></sub>

<table>
<tr><td>Tracking Code</td><td>"TRACKING_CODE"</td></tr>
<tr><td>Investment</td><td>"INVESTMENT"</td></tr>
<tr><td>First Investment</td><td>"FIRST_INVESTMENT"</td></tr>
<tr><td>Invite Friend</td><td>"INVITE_FRIEND"</td></tr>
<tr><td>Wallet</td><td>"WALLET"</td></tr>

</table>

## Voucher Activity Type <sub><sup>[VoucherActivityType](./src/enum/index.ts#L230)</sup></sub>

<table>
<tr><td>Friend Registration</td><td>"FRIEND_REGISTRATION"</td></tr>
<tr><td>Promotion</td><td>"PROMOTION"</td></tr>

</table>

## Survey Level <sub><sup>[SurveyLevel](./src/enum/index.ts#L236)</sup></sub>

user classification survey score
<table>
<tr><td>Low (score < 50)</td><td>"LOW"</td></tr>
<tr><td>Mid (50 <= score < 90)</td><td>"MIDDLE"</td></tr>
<tr><td>High (score >= 90)</td><td>"HIGH"</td></tr>

</table>

## Legal Form <sub><sup>[LegalForm](./src/enum/index.ts#L245)</sup></sub>

<table>
<tr><td>Spa</td><td>"SPA"</td></tr>
<tr><td>Srl</td><td>"SRL"</td></tr>

</table>

## Top Investor Type <sub><sup>[TopInvestorType](./src/enum/index.ts#L251)</sup></sub>

a.k.a. *StatusInvestmentTop*
<table>
<tr><td>Top</td><td>"TOP"</td></tr>
<tr><td>Super Top</td><td>"SUPER_TOP"</td></tr>

</table>

## Integration Type <sub><sup>[IntegrationType](./src/enum/index.ts#L256)</sup></sub>

<table>
<tr><td>Lemonway</td><td>"LEMONWAY"</td></tr>
<tr><td>Activecampaign</td><td>"ACTIVECAMPAIGN"</td></tr>
<tr><td>Tas</td><td>"TAS"</td></tr>
<tr><td>Tas Tech</td><td>"TAS_TECH"</td></tr>

</table>

## Permission <sub><sup>[Permission](./src/enum/index.ts#L264)</sup></sub>

backoffice permissions
<table>
<tr><td>Assign Role (role)</td><td>"assign:role"</td></tr>
<tr><td>Create Role</td><td>"create:role"</td></tr>
<tr><td>Read Role</td><td>"read:role"</td></tr>
<tr><td>Update Role</td><td>"update:role"</td></tr>
<tr><td>Delete Role</td><td>"delete:role"</td></tr>
<tr><td>Create Admin (admin)</td><td>"create:admin"</td></tr>
<tr><td>Read Admin</td><td>"read:admin"</td></tr>
<tr><td>Update Admin</td><td>"update:admin"</td></tr>
<tr><td>Delete Admin</td><td>"delete:admin"</td></tr>
<tr><td>Generate Prospect Prospect Rate (prospect rate)</td><td>"generate_prospect:prospect_rate"</td></tr>
<tr><td>Read Prospect Rate Investors Prospect Rate</td><td>"read_prospect_rate_investors:prospect_rate"</td></tr>
<tr><td>Pay Prospect Rate Investors Prospect Rate</td><td>"pay_prospect_rate_investors:prospect_rate"</td></tr>
<tr><td>Read Prospect Rate</td><td>"read:prospect_rate"</td></tr>
<tr><td>Update Prospect Rate</td><td>"update:prospect_rate"</td></tr>
<tr><td>Create Payment Prospect Rate</td><td>"create_payment:prospect_rate"</td></tr>
<tr><td>Read Payment Prospect Rate</td><td>"read_payment:prospect_rate"</td></tr>
<tr><td>Update Amounts Prospect Rate</td><td>"update_amounts:prospect_rate"</td></tr>
<tr><td>Create Partial Payment Prospect Rate</td><td>"create_partial_payment:prospect_rate"</td></tr>
<tr><td>Read Partial Payment Prospect Rate</td><td>"read_partial_payment:prospect_rate"</td></tr>
<tr><td>Create Proponent (proponent)</td><td>"create:proponent"</td></tr>
<tr><td>Read Proponent</td><td>"read:proponent"</td></tr>
<tr><td>Update Proponent</td><td>"update:proponent"</td></tr>
<tr><td>Delete Proponent</td><td>"delete:proponent"</td></tr>
<tr><td>Transaction Main Proponent</td><td>"transaction_main:proponent"</td></tr>
<tr><td>Transaction Recrowd Proponent</td><td>"transaction_recrowd:proponent"</td></tr>
<tr><td>Read Bank Account (bank account)</td><td>"read:bank_account"</td></tr>
<tr><td>Read Recrowd Bank Account</td><td>"read_recrowd:bank_account"</td></tr>
<tr><td>Tech Sync Bank Account</td><td>"tech_sync:bank_account"</td></tr>
<tr><td>Update Withdrawal Limit Bank Account</td><td>"update_withdrawal_limit:bank_account"</td></tr>
<tr><td>Read Contract (contract)</td><td>"read:contract"</td></tr>
<tr><td>Read Tas Transaction (tas transaction)</td><td>"read:tas_transaction"</td></tr>
<tr><td>Read Statistics Transaction (transaction)</td><td>"read_statistics:transaction"</td></tr>
<tr><td>Read Transaction</td><td>"read:transaction"</td></tr>
<tr><td>Create Tag (tag)</td><td>"create:tag"</td></tr>
<tr><td>Read Tag</td><td>"read:tag"</td></tr>
<tr><td>Update Tag</td><td>"update:tag"</td></tr>
<tr><td>Delete Tag</td><td>"delete:tag"</td></tr>
<tr><td>Read Project Project (project)</td><td>"read_project:project"</td></tr>
<tr><td>Update Project Project</td><td>"update_project:project"</td></tr>
<tr><td>Create Project Project</td><td>"create_project:project"</td></tr>
<tr><td>Delete Project Project</td><td>"delete_project:project"</td></tr>
<tr><td>Read Investment Project</td><td>"read_investment:project"</td></tr>
<tr><td>Read Preview Project</td><td>"read_preview:project"</td></tr>
<tr><td>Read Kiis Project</td><td>"read_kiis:project"</td></tr>
<tr><td>Update Kiis Project</td><td>"update_kiis:project"</td></tr>
<tr><td>Update Financial Project</td><td>"update_financial:project"</td></tr>
<tr><td>Update Commission Project</td><td>"update_commission:project"</td></tr>
<tr><td>Update Description Project</td><td>"update_description:project"</td></tr>
<tr><td>Update Document Project</td><td>"update_document:project"</td></tr>
<tr><td>Update Image Project</td><td>"update_image:project"</td></tr>
<tr><td>Update Tag Project</td><td>"update_tag:project"</td></tr>
<tr><td>Update Negotiation Range Project</td><td>"update_negotiation_range:project"</td></tr>
<tr><td>Read Rate Project</td><td>"read_rate:project"</td></tr>
<tr><td>Update Rate Project</td><td>"update_rate:project"</td></tr>
<tr><td>Update Proroga Project</td><td>"update_proroga:project"</td></tr>
<tr><td>Read Communication Project</td><td>"read_communication:project"</td></tr>
<tr><td>Update Communication Project</td><td>"update_communication:project"</td></tr>
<tr><td>Delete Communication Project</td><td>"delete_communication:project"</td></tr>
<tr><td>Update Payout Strategy Project</td><td>"update_payout_strategy:project"</td></tr>
<tr><td>Update Payout Range Project</td><td>"update_payout_range:project"</td></tr>
<tr><td>Read Project File Project</td><td>"read_project_file:project"</td></tr>
<tr><td>Read All COI Declaration (coi declaration)</td><td>"read_all:coi_declaration"</td></tr>
<tr><td>Create Employee COI Declaration</td><td>"create_employee:coi_declaration"</td></tr>
<tr><td>Read Event (event)</td><td>"read:event"</td></tr>
<tr><td>Create Event</td><td>"create:event"</td></tr>
<tr><td>Update Event</td><td>"update:event"</td></tr>
<tr><td>Delete Event</td><td>"delete:event"</td></tr>
<tr><td>Read Event Update (event update)</td><td>"read:event_update"</td></tr>
<tr><td>Create Event Update</td><td>"create:event_update"</td></tr>
<tr><td>Update Event Update</td><td>"update:event_update"</td></tr>
<tr><td>Delete Event Update</td><td>"delete:event_update"</td></tr>
<tr><td>Read Event Tag (event tag)</td><td>"read:event_tag"</td></tr>
<tr><td>Create Event Tag</td><td>"create:event_tag"</td></tr>
<tr><td>Update Event Tag</td><td>"update:event_tag"</td></tr>
<tr><td>Delete Event Tag</td><td>"delete:event_tag"</td></tr>
<tr><td>Assign Event Tag</td><td>"assign:event_tag"</td></tr>
<tr><td>Read Event File (event file)</td><td>"read:event_file"</td></tr>
<tr><td>Upload Event File</td><td>"create:event_file"</td></tr>
<tr><td>Delete Event File</td><td>"delete:event_file"</td></tr>
<tr><td>Read User Prospect Rate Investor (investor)</td><td>"read_user_prospect_rate:investor"</td></tr>

</table>

## Auth Type <sub><sup>[AuthType](./src/enum/index.ts#L363)</sup></sub>

<table>
<tr><td>Email</td><td>0</td></tr>
<tr><td>Authenticator</td><td>1</td></tr>
<tr><td>Sms</td><td>2</td></tr>
<tr><td>Reset Password</td><td>3</td></tr>

</table>

## TAS Onboarding Status <sub><sup>[TAS_OnboardingStatus](./src/enum/index.ts#L370)</sup></sub>

<table>
<tr><td>Created</td><td>0</td></tr>
<tr><td>Completed</td><td>1</td></tr>
<tr><td>Aborted</td><td>2</td></tr>

</table>

## TAS Onboarding Attempt Status <sub><sup>[TAS_OnboardingAttemptStatus](./src/enum/index.ts#L376)</sup></sub>

<table>
<tr><td>Created</td><td>0</td></tr>
<tr><td>Completed</td><td>1</td></tr>
<tr><td>Aborted</td><td>2</td></tr>
<tr><td>Expired</td><td>3</td></tr>
<tr><td>Reset</td><td>4</td></tr>

</table>

## TAS AML Question Type <sub><sup>[TAS_AMLQuestionType](./src/enum/index.ts#L384)</sup></sub>

<table>
<tr><td>B2B</td><td>"AML-B2B"</td></tr>
<tr><td>B2C</td><td>"AML-B2C"</td></tr>

</table>

## TAS AML Answer Type <sub><sup>[TAS_AMLAnswerType](./src/enum/index.ts#L389)</sup></sub>

<table>
<tr><td>B2B</td><td>"AML-B2B-ANSWER"</td></tr>
<tr><td>B2C</td><td>"AML-B2C-ANSWER"</td></tr>

</table>

## TAS User Type <sub><sup>[TAS_UserType](./src/enum/index.ts#L394)</sup></sub>

<table>
<tr><td>Private</td><td>"RETAIL"</td></tr>
<tr><td>Company</td><td>"BUSINESS"</td></tr>

</table>

## TAS Gender <sub><sup>[TAS_Gender](./src/enum/index.ts#L399)</sup></sub>

<table>
<tr><td>Male</td><td>"M"</td></tr>
<tr><td>Female</td><td>"F"</td></tr>

</table>

## TAS Address Type <sub><sup>[TAS_AddressType](./src/enum/index.ts#L404)</sup></sub>

<table>
<tr><td>Residence</td><td>"RESIDENCE"</td></tr>
<tr><td>Domicile</td><td>"DOMICILE"</td></tr>
<tr><td>Legal</td><td>"LEGAL"</td></tr>
<tr><td>Office</td><td>"OFFICE"</td></tr>

</table>

## TAS Document Type <sub><sup>[TAS_DocumentType](./src/enum/index.ts#L411)</sup></sub>

<table>
<tr><td>Identity Card</td><td>"IDENTITY_CARD"</td></tr>
<tr><td>Passport</td><td>"PASSPORT"</td></tr>
<tr><td>Driving License</td><td>"DRIVING_LICENSE"</td></tr>
<tr><td>Residency Permit (does NOT exist in the database, only used when calling the TAS API)</td><td>"PS"</td></tr>
<tr><td>Permanent Residency Permit (needs to be converted to *ResidencyPermit* when calling the TAS API)</td><td>"PSP"</td></tr>
<tr><td>Temporary Residency Permit (needs to be converted to *ResidencyPermit* when calling the TAS API)</td><td>"PST"</td></tr>

</table>

## TAS Additional Document Type <sub><sup>[TAS_AdditionalDocumentType](./src/enum/index.ts#L423)</sup></sub>

<table>
<tr><td>W9</td><td>"W9"</td></tr>
<tr><td>Company Delegation</td><td>"POWER_OF_BOFD"</td></tr>
<tr><td>Company Report</td><td>"COMPANY_REPORT"</td></tr>

</table>

## TAS Document Issuer <sub><sup>[TAS_DocumentIssuer](./src/enum/index.ts#L429)</sup></sub>

<table>
<tr><td>DMV (Motorizzazione)</td><td>"MCTC"</td></tr>
<tr><td>Municipality (Comune)</td><td>"MUNICIPALITY"</td></tr>
<tr><td>Consulate (Consolato)</td><td>"ITALIAN_REPRESENTATION_ABROAD"</td></tr>
<tr><td>Ministry (Ministero)</td><td>"MINISTRY"</td></tr>
<tr><td>Preccint (Questura)</td><td>"POLICE_HEADQUARTER"</td></tr>

</table>

## TAS Shufti Status <sub><sup>[TAS_ShuftiStatus](./src/enum/index.ts#L442)</sup></sub>

<table>
<tr><td>Pending</td><td>0</td></tr>
<tr><td>Pending Review</td><td>1</td></tr>
<tr><td>Valid</td><td>2</td></tr>
<tr><td>Request Error</td><td>3</td></tr>
<tr><td>Cancelled</td><td>4</td></tr>
<tr><td>Declined</td><td>5</td></tr>

</table>

## TAS Pep <sub><sup>[TAS_Pep](./src/enum/index.ts#L451)</sup></sub>

<table>
<tr><td>No (No)</td><td>"PEP_REL_N"</td></tr>
<tr><td>Yes (Persona politicamente esposta)</td><td>"PEP_REL_D"</td></tr>
<tr><td>Family (Familiare di una persona politicamente esposta)</td><td>"PEP_REL_F"</td></tr>
<tr><td>Business (Legami in affari con una persona politicamente esposta)</td><td>"PEP_REL_A"</td></tr>

</table>

## TAS Pep Type <sub><sup>[TAS_PepType](./src/enum/index.ts#L462)</sup></sub>

<table>
<tr><td>Presidente Repubblica</td><td>"PEP_TYPE_A"</td></tr>
<tr><td>Presidente Consiglio</td><td>"PEP_TYPE_B"</td></tr>
<tr><td>Ministro</td><td>"PEP_TYPE_C"</td></tr>
<tr><td>Vice Ministro</td><td>"PEP_TYPE_D"</td></tr>
<tr><td>Sottosegretario</td><td>"PEP_TYPE_E"</td></tr>
<tr><td>Presidente Regione</td><td>"PEP_TYPE_F"</td></tr>
<tr><td>Assessore Regionale</td><td>"PEP_TYPE_G"</td></tr>
<tr><td>Sindaco Capoluogo (Sindaco di capoluogo di provincia o città metropolitana)</td><td>"PEP_TYPE_H"</td></tr>
<tr><td>Sindaco Comune (Sindaco di comune con popolazione non inferiore a 15.000 abitanti nonché cariche analoghe in Stati esteri)</td><td>"PEP_TYPE_I"</td></tr>
<tr><td>Deputato</td><td>"PEP_TYPE_J"</td></tr>
<tr><td>Senatore</td><td>"PEP_TYPE_K"</td></tr>
<tr><td>Parlamentare Europeo</td><td>"PEP_TYPE_L"</td></tr>
<tr><td>Consigliere Regionale (Consigliere regionale nonché cariche analoghe in Stati esteri)</td><td>"PEP_TYPE_M"</td></tr>
<tr><td>Membro Partiti Politici (Membro degli organi direttivi centrali di partiti politici)</td><td>"PEP_TYPE_N"</td></tr>
<tr><td>Giudice Corte Costituzionale (Giudice della Corte Costituzionale)</td><td>"PEP_TYPE_O"</td></tr>
<tr><td>Magistrato Corte (Magistrato della Corte di Cassazione o della Corte dei Conti)</td><td>"PEP_TYPE_Q"</td></tr>
<tr><td>Consiglio Giustizia Amministrativa (Altri componenti del Consiglio di Giustizia Amministrativa per la Regione siciliana nonché cariche analoghe in Stati esteri)</td><td>"PEP_TYPE_R"</td></tr>
<tr><td>Membro Banche Centrali (Membro degli organi direttivi delle banche centrali e delle autorità indipendenti)</td><td>"PEP_TYPE_S"</td></tr>
<tr><td>Ambasciatore (Ambasciatore, incaricato d’affari ovvero cariche equivalenti in Stati esteri, ufficiale di grado apicale delle forze armate ovvero cariche analoghe in Stati esteri)</td><td>"PEP_TYPE_T"</td></tr>
<tr><td>Componente Imprese Stato (Componente degli organi di amministrazione, direzione o controllo delle imprese controllate, anche indirettamente, dallo Stato italiano o da uno Stato estero ovvero partecipate, in misura prevalente o totalitaria, dalle Regioni, da comuni capoluoghi di provincia e città metropolitane e da comuni con popolazione complessivamente non inferiore a 15.000 abitanti)</td><td>"PEP_TYPE_U"</td></tr>
<tr><td>Direttore ASL (Direttore generale di ASL e di azienda ospedaliera, di azienda ospedaliera universitaria e degli altri enti del servizio sanitario nazionale)</td><td>"PEP_TYPE_V"</td></tr>
<tr><td>Membro Organizzazioni Internazionali (Direttore, vicedirettore e membro dell’organo di gestione o soggetto svolgenti funzioni equivalenti in organizzazioni internazionali)</td><td>"PEP_TYPE_W"</td></tr>
<tr><td>Consigliere Stato</td><td>"PEP_TYPE_P"</td></tr>

</table>

## TAS Shufti Error Target <sub><sup>[TAS_ShuftiErrorTarget](./src/enum/index.ts#L528)</sup></sub>

<table>
<tr><td>Shufti</td><td>0</td></tr>
<tr><td>First Name</td><td>1</td></tr>
<tr><td>Last Name</td><td>2</td></tr>
<tr><td>Birth Date</td><td>3</td></tr>
<tr><td>Document</td><td>4</td></tr>
<tr><td>Document Release Date</td><td>5</td></tr>
<tr><td>Document Expiry Date</td><td>6</td></tr>
<tr><td>Document Number</td><td>7</td></tr>
<tr><td>Company Name</td><td>8</td></tr>
<tr><td>Exit</td><td>9</td></tr>

</table>

## TAS Legal Form <sub><sup>[TAS_LegalForm](./src/enum/index.ts#L541)</sup></sub>

<table>
<tr><td>Societa Accomandita Azioni</td><td>"AA"</td></tr>
<tr><td>Associazione</td><td>"AC"</td></tr>
<tr><td>Societa Consortile Accomandita Semplice</td><td>"AE"</td></tr>
<tr><td>Altre Forme</td><td>"AF"</td></tr>
<tr><td>Associazione Impresa</td><td>"AI"</td></tr>
<tr><td>Azienda Speciale Ente Locale</td><td>"AL"</td></tr>
<tr><td>Azienda Municipale</td><td>"AM"</td></tr>
<tr><td>Societa Consortile Nome Collettivo</td><td>"AN"</td></tr>
<tr><td>Azienda Provinciale</td><td>"AP"</td></tr>
<tr><td>Azienda Regionale</td><td>"AR"</td></tr>
<tr><td>Societa Accomandita Semplice</td><td>"AS"</td></tr>
<tr><td>Azienda Autonoma Statale</td><td>"AT"</td></tr>
<tr><td>Societa Azioni Socio Unico</td><td>"AU"</td></tr>
<tr><td>Azienda Speciale</td><td>"AZ"</td></tr>
<tr><td>Consorzio Attivita Esterna</td><td>"CC"</td></tr>
<tr><td>Comunione Ereditaria</td><td>"CE"</td></tr>
<tr><td>Consorzio Fidi</td><td>"CF"</td></tr>
<tr><td>Societa Cooperativa Responsabilita Illimitata</td><td>"CI"</td></tr>
<tr><td>Societa Cooperativa Responsabilita Limitata</td><td>"CL"</td></tr>
<tr><td>Consorzio Munincipale</td><td>"CM"</td></tr>
<tr><td>Societa Consortile</td><td>"CN"</td></tr>
<tr><td>Consorzio</td><td>"CO"</td></tr>
<tr><td>Consorzio Intercomunale</td><td>"CR"</td></tr>
<tr><td>Consorzio Senza Attivita Esterna</td><td>"CS"</td></tr>
<tr><td>Consorzio DLGS2672000</td><td>"CZ"</td></tr>
<tr><td>Impresa Individuale</td><td>"DI"</td></tr>
<tr><td>Ente Pubblico Commerciale</td><td>"EC"</td></tr>
<tr><td>Ente Diritto Pubblico</td><td>"ED"</td></tr>
<tr><td>Ente Ecclesiastico</td><td>"EE"</td></tr>
<tr><td>Ente Impresa</td><td>"EI"</td></tr>
<tr><td>Ente Sociale</td><td>"EL"</td></tr>
<tr><td>Ente Morale</td><td>"EM"</td></tr>
<tr><td>Ente</td><td>"EN"</td></tr>
<tr><td>Ente Pubblico Economico</td><td>"EP"</td></tr>
<tr><td>Ente Ecclesiastico Civilmente Riconosciuto</td><td>"ER"</td></tr>
<tr><td>Ente LR93N88</td><td>"ES"</td></tr>
<tr><td>Fondazione Impresa</td><td>"FI"</td></tr>
<tr><td>Fondazione</td><td>"FO"</td></tr>
<tr><td>Gruppo Europeo Interesse Economico</td><td>"GE"</td></tr>
<tr><td>Istituto Credito</td><td>"IC"</td></tr>
<tr><td>Istituto Credito Diritto Pubblico</td><td>"ID"</td></tr>
<tr><td>Impresa Famigliare</td><td>"IF"</td></tr>
<tr><td>Istituto Religioso</td><td>"IR"</td></tr>
<tr><td>Azienda Speciale DLGS2672000</td><td>"LL"</td></tr>
<tr><td>Mutua Assicurazione</td><td>"MA"</td></tr>
<tr><td>Societa Cooperativa Consortile</td><td>"OC"</td></tr>
<tr><td>Cooperativa Sociale</td><td>"OO"</td></tr>
<tr><td>Societa Consortile Coop Resp Limitata</td><td>"OS"</td></tr>
<tr><td>Associazione Partecipazione</td><td>"PA"</td></tr>
<tr><td>Piccola Societa Cooperativia</td><td>"PC"</td></tr>
<tr><td>Persona Fisica</td><td>"PF"</td></tr>
<tr><td>Piccola Societa Coop Resp Limitata</td><td>"PS"</td></tr>
<tr><td>Societa Resp Limitata Capitale Ridotto</td><td>"RR"</td></tr>
<tr><td>Societa Resp Limitat Semplificata</td><td>"RS"</td></tr>
<tr><td>Societa Anonima</td><td>"SA"</td></tr>
<tr><td>Societa Cooperativa</td><td>"SC"</td></tr>
<tr><td>Societa Europea</td><td>"SD"</td></tr>
<tr><td>Societa Semplice</td><td>"SE"</td></tr>
<tr><td>Societa Di Fatto</td><td>"SF"</td></tr>
<tr><td>Societa Coop Europea</td><td>"SG"</td></tr>
<tr><td>Societa Irregolare</td><td>"SI"</td></tr>
<tr><td>Societa Consortile Resp Limitata</td><td>"SL"</td></tr>
<tr><td>Societa Mutuo Soccorso</td><td>"SM"</td></tr>
<tr><td>Societa Nome Collettivo</td><td>"SN"</td></tr>
<tr><td>Societa Consortile Azioni</td><td>"SO"</td></tr>
<tr><td>Societa Azioni</td><td>"SP"</td></tr>
<tr><td>Societa Resp Limitata</td><td>"SR"</td></tr>
<tr><td>Societa Leggi Altro Stato</td><td>"SS"</td></tr>
<tr><td>Soggetto Estero</td><td>"ST"</td></tr>
<tr><td>Societa Resp Limitata Unico Socio</td><td>"SU"</td></tr>
<tr><td>Societa Professionisti</td><td>"SV"</td></tr>
<tr><td>Societa No Legislazione Ita</td><td>"SZ"</td></tr>
<tr><td>Non Precisata</td><td>"XX"</td></tr>

</table>

## TAS Transaction Type <sub><sup>[TAS_TransactionType](./src/enum/index.ts#L617)</sup></sub>

<table>
<tr><td>SEPA</td><td>"TrxSEPA"</td></tr>
<tr><td>Instant Payment</td><td>"TrxINST"</td></tr>
<tr><td>Revoked</td><td>"TrxREVK"</td></tr>

</table>

## TAS Transaction Status <sub><sup>[TAS_TransactionStatus](./src/enum/index.ts#L623)</sup></sub>

<table>
<tr><td>Pending</td><td>0</td></tr>
<tr><td>Confirmed</td><td>1</td></tr>
<tr><td>Rejected</td><td>2</td></tr>
<tr><td>Pre Approved</td><td>3</td></tr>

</table>

## TAS Operation Over All Status <sub><sup>[TAS_OperationOverAllStatus](./src/enum/index.ts#L629)</sup></sub>

<table>
<tr><td>Valid (transazione valida, da autorizzare)</td><td>"VALD"</td></tr>
<tr><td>Error (transazione in errore)</td><td>"ERRR"</td></tr>
<tr><td>Pending (transazione in lavorazione)</td><td>"PNDG"</td></tr>
<tr><td>Sent (transazione presa in carico)</td><td>"SENT"</td></tr>
<tr><td>Executed (Eseguita)</td><td>"ACSC"</td></tr>
<tr><td>Rejected (Non Eseguita)</td><td>"RJT"</td></tr>
<tr><td>Revoked (Revocata dall’utente)</td><td>"CNCL"</td></tr>
<tr><td>Suspended (Sospesa (operatività corporate))</td><td>"SUSP"</td></tr>

</table>

## TAS Operation Current Status <sub><sup>[TAS_OperationCurrentStatus](./src/enum/index.ts#L648)</sup></sub>

<table>
<tr><td>Valid (transazione valida, da autorizzare)</td><td>"VALD"</td></tr>
<tr><td>Error (transazione in errore)</td><td>"ERRR"</td></tr>
<tr><td>Pending (transazione in lavorazione)</td><td>"PNDG"</td></tr>
<tr><td>Sent (transazione presa in carico)</td><td>"SENT"</td></tr>
<tr><td>Executed (Eseguita)</td><td>"EXEC"</td></tr>
<tr><td>Rejected (Non Eseguita)</td><td>"RJCT"</td></tr>
<tr><td>Revoked (Revocata dall’utente)</td><td>"CNCL"</td></tr>
<tr><td>Suspended (Sospesa (operatività corporate))</td><td>"SUSP"</td></tr>
<tr><td>Partial (Operazione firmata da un solo firmatario in un contesto in cui è richiesta firma congiunta. (caso tipicamente relativo ad utenze corporate).)</td><td>"AUT1"</td></tr>

</table>

## TAS Transaction Direction <sub><sup>[TAS_TransactionDirection](./src/enum/index.ts#L673)</sup></sub>

<table>
<tr><td>In</td><td>"IN"</td></tr>
<tr><td>Out</td><td>"OUT"</td></tr>

</table>

## Tas Contracts Document Type <sub><sup>[TasContracts_DocumentType](./src/enum/index.ts#L678)</sup></sub>

<table>
<tr><td>Contract</td><td>"Contratto"</td></tr>
<tr><td>Bank Statement</td><td>"EstrattoConto"</td></tr>
<tr><td>Ownership</td><td>"ownership"</td></tr>

</table>

## Bank Account Type <sub><sup>[BankAccountType](./src/enum/index.ts#L684)</sup></sub>

<table>
<tr><td>Main</td><td>"MAIN"</td></tr>
<tr><td>Tech</td><td>"TECH"</td></tr>

</table>

## Onboarding Types <sub><sup>[OnboardingTypes](./src/enum/index.ts#L689)</sup></sub>

<table>
<tr><td>Investor</td><td>"INVESTOR"</td></tr>
<tr><td>Proponent</td><td>"PROPONENT"</td></tr>

</table>

## Gateway Type <sub><sup>[GatewayType](./src/enum/index.ts#L694)</sup></sub>

<table>
<tr><td>Lemonway</td><td>"LEMONWAY"</td></tr>
<tr><td>TP Pay</td><td>"TPPAY"</td></tr>

</table>

## Amortization Method <sub><sup>[AmortizationMethod](./src/enum/index.ts#L699)</sup></sub>

<table>
<tr><td>Principal</td><td>0</td></tr>
<tr><td>Interest</td><td>1</td></tr>

</table>

## Project Files Type <sub><sup>[ProjectFilesType](./src/enum/index.ts#L704)</sup></sub>

<table>
<tr><td>Documents</td><td>"documents"</td></tr>
<tr><td>Contract</td><td>"contract"</td></tr>
<tr><td>Assessment</td><td>"assessment"</td></tr>
<tr><td>Business Plan</td><td>"business_plan"</td></tr>
<tr><td>Registration Report</td><td>"registration_report"</td></tr>

</table>

## Feature Flag <sub><sup>[FeatureFlag](./src/enum/index.ts#L712)</sup></sub>

<table>
<tr><td>Investment</td><td>"investment"</td></tr>
<tr><td>Pay By Bank</td><td>"payByBank"</td></tr>
<tr><td>Cash Out</td><td>"cashOut"</td></tr>
<tr><td>Registration</td><td>"registration"</td></tr>
<tr><td>Login</td><td>"login"</td></tr>
<tr><td>Proponent</td><td>"proponent"</td></tr>
<tr><td>Tas Onboarding</td><td>"tas_onboarding"</td></tr>
<tr><td>Tas Otp</td><td>"tas_otp"</td></tr>
<tr><td>Tas Login</td><td>"tas_login"</td></tr>
<tr><td>Tas Dashboard</td><td>"tas_dashboard"</td></tr>
<tr><td>Tas Transactions</td><td>"tas_transactions"</td></tr>
<tr><td>Tas Investment</td><td>"tas_investment"</td></tr>

</table>

## User Onboarding Status <sub><sup>[UserOnboardingStatus](./src/enum/index.ts#L727)</sup></sub>

<table>
<tr><td>Shufti Errored</td><td>"shuftiErrored"</td></tr>

</table>

## COI Relationship Type <sub><sup>[COI_RelationshipType](./src/enum/index.ts#L731)</sup></sub>

<table>
<tr><td>Father (Degree 1 - Direct line)</td><td>"FATHER"</td></tr>
<tr><td>Mother</td><td>"MOTHER"</td></tr>
<tr><td>Children</td><td>"CHILDREN"</td></tr>
<tr><td>Parents In Law (Degree 1 - In-laws)</td><td>"PARENTS_IN_LAW"</td></tr>
<tr><td>Sons In Law</td><td>"SONS_IN_LAW"</td></tr>
<tr><td>Daughters In Law</td><td>"DAUGHTERS_IN_LAW"</td></tr>
<tr><td>Grandparents (Degree 2 - Direct line)</td><td>"GRANDPARENTS"</td></tr>
<tr><td>Grandchildren</td><td>"GRANDCHILDREN"</td></tr>
<tr><td>Brothers (Degree 2 - Collateral)</td><td>"BROTHERS"</td></tr>
<tr><td>Sisters</td><td>"SISTERS"</td></tr>
<tr><td>Brothers In Law (Degree 2 - In-laws)</td><td>"BROTHERS_IN_LAW"</td></tr>
<tr><td>Great Grandparents (Degree 3 - Direct line)</td><td>"GREAT_GRANDPARENTS"</td></tr>
<tr><td>Great Grandchildren</td><td>"GREAT_GRANDCHILDREN"</td></tr>
<tr><td>Uncles (Degree 3 - Collateral)</td><td>"UNCLES"</td></tr>
<tr><td>Nephews Nieces Siblings</td><td>"NEPHEWS_NIECES_SIBLINGS"</td></tr>
<tr><td>Spouses Of Uncles Aunts Nephews Nieces (Degree 3 - In-laws)</td><td>"SPOUSES_OF_UNCLES_AUNTS_NEPHEWS_NIECES"</td></tr>
<tr><td>Great Great Grandparents (Degree 4 - Direct line)</td><td>"GREAT_GREAT_GRANDPARENTS"</td></tr>
<tr><td>Great Great Grandchildren</td><td>"GREAT_GREAT_GRANDCHILDREN"</td></tr>
<tr><td>Great Uncles (Degree 4 - Collateral)</td><td>"GREAT_UNCLES"</td></tr>
<tr><td>Great Aunts</td><td>"GREAT_AUNTS"</td></tr>
<tr><td>Great Nephews Nieces Siblings</td><td>"GREAT_NEPHEWS_NIECES_SIBLINGS"</td></tr>
<tr><td>Cousins</td><td>"COUSINS"</td></tr>
<tr><td>Spouses Of Great Uncles Aunts Nephews Cousins (Degree 4 - In-laws)</td><td>"SPOUSES_OF_GREAT_UNCLES_AUNTS_NEPHEWS_COUSINS"</td></tr>

</table>

## COI Alert Type <sub><sup>[COI_AlertType](./src/enum/index.ts#L768)</sup></sub>

<table>
<tr><td>Relative Conflict</td><td>"RELATIVE_CONFLICT"</td></tr>
<tr><td>Company Control Conflict</td><td>"COMPANY_CONTROL_CONFLICT"</td></tr>
<tr><td>Proponent Control Conflict</td><td>"PROPONENT_CONTROL_CONFLICT"</td></tr>
<tr><td>Self Conflict</td><td>"SELF_CONFLICT"</td></tr>
<tr><td>Investment Conflict</td><td>"INVESTMENT_CONFLICT"</td></tr>
<tr><td>Company Member Conflict</td><td>"COMPANY_MEMBER_CONFLICT"</td></tr>

</table>

## Restitution Type <sub><sup>[RestitutionType](./src/enum/index.ts#L777)</sup></sub>

<table>
<tr><td>Mixed</td><td>"MIXED"</td></tr>
<tr><td>Lemonway Only</td><td>"LEMONWAY_ONLY"</td></tr>

</table>

## Project File Type <sub><sup>[ProjectFileType](./src/enum/index.ts#L782)</sup></sub>

<table>
<tr><td>Document</td><td>"DOCUMENT"</td></tr>
<tr><td>Image</td><td>"IMAGE"</td></tr>
<tr><td>Video</td><td>"VIDEO"</td></tr>

</table>

## Project File Subtype <sub><sup>[ProjectFileSubtype](./src/enum/index.ts#L788)</sup></sub>

<table>
<tr><td>Pre Fundraising</td><td>"PRE_FUNDRAISING"</td></tr>
<tr><td>Post Fundraising</td><td>"POST_FUNDRAISING"</td></tr>

</table>

## Event Type <sub><sup>[EventType](./src/enum/index.ts#L793)</sup></sub>

<table>
<tr><td>Comunication</td><td>"COMUNICATION"</td></tr>
<tr><td>Expiring Event</td><td>"EXPIRING_EVENT"</td></tr>

</table>

## Partial Rate Types <sub><sup>[PartialRateTypes](./src/enum/index.ts#L798)</sup></sub>

<table>
<tr><td>Standard</td><td>"STANDARD"</td></tr>
<tr><td>Partial</td><td>"PARTIAL"</td></tr>
<tr><td>Partial Final</td><td>"PARTIAL_FINAL"</td></tr>

</table>

