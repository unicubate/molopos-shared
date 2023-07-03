import { GenericItem } from "./types"

export type DocumentType = "PENDING" | "ID" | "IBAN-CERT" | "COMPANY-CERT" | "UNUSED";
export type DocumentTypeData = GenericItem<number, DocumentType>;

export const documentTypes: DocumentTypeData[] = [
  {
    id: -1,
    type: "PENDING",
    description: "pending document"
  },
  {
    id: 0,
    type: "ID",
    description: "identity card"
  },
  {
    id: 3,
    type: "ID",
    description: "EU passport"
  },
  {
    id: 4,
    type: "ID",
    description: "extra EU passport"
  },
  {
    id: 11,
    type: "ID",
    description: "driving license"
  },
  {
    id: 14,
    type: "ID",
    description: "company shareholder ID"
  },
  {
    id: 15,
    type: "ID",
    description: "company shareholder ID"
  },
  {
    id: 16,
    type: "ID",
    description: "company shareholder ID"
  },
  {
    id: 17,
    type: "ID",
    description: "company shareholder ID"
  },
  {
    id: 2,
    type: "IBAN-CERT",
    description: "iban certification"
  },
  {
    id: 7,
    type: "COMPANY-CERT",
    description: "company registration certificate"
  },
  {
    id: 6,
    type: "UNUSED",
    description: ""
  },
  {
    id: 18,
    type: "UNUSED",
    description: ""
  },
  {
    id: 19,
    type: "UNUSED",
    description: ""
  },
  {
    id: 20,
    type: "UNUSED",
    description: ""
  },
  {
    id: 5,
    type: "UNUSED",
    description: "residency permit"
  },
  {
    id: 12,
    type: "UNUSED",
    description: "status"
  },
  {
    id: 13,
    type: "UNUSED",
    description: "selfie"
  },
  {
    id: 21,
    type: "UNUSED",
    description: "ssd mandate"
  },
]

export type walletStatusData = GenericItem<number>;

export const walletStatuses: walletStatusData[] = [
  {
    id: -1,
    description: "wallet SC"
  },
  {
    id: 2,
    description: "Registered, not verified: missing document(s)"
  },
  {
    id: 3,
    description: "Registered, not verified: document(s) rejected"
  },
  {
    id: 5,
    description: "Registered, not verified: KYC 1 (status given at registration)"
  },
  {
    id: 6,
    description: "Registered and verified: KYC 2"
  },
  {
    id: 7,
    description: "KYC 3, pending verification"
  },
  {
    id: 8,
    description: "Registered, not verified: expired document(s)"
  },
  {
    id: 10,
    description: "Blocked"
  },
  {
    id: 12,
    description: "Closed"
  },
  {
    id: 13,
    description: " KYC 3, missing documents"
  },
  {
    id: 14,
    description: " One - time customer"
  },
  {
    id: 15,
    description: "* Special wallet for crowdlending"
  },
  {
    id: 16,
    description: " Technical wallet"
  },
]

export type transactionStatusData = GenericItem<number>;

export const transactionStatuses: transactionStatusData[] = [
  {
    id: 0,
    description: "COMPLETED"
  },
  {
    id: 3,
    description: "COMPLETED_P2P"
  },
  {
    id: 4,
    description: "PENDING"
  },
  {
    id: 6,
    description: "ERROR"
  },
]

export type ibanStatusData = GenericItem<number>;

export const ibanStatuses: ibanStatusData[] = [
  {
    id: 4,
    description: "TO_BE_VERIFIED"
  },
  {
    id: 5,
    description: "ENABLED"
  },
  {
    id: 8,
    description: "DISABLED"
  },
  {
    id: 9,
    description: "REJECTED_BY_LEMONWAY"
  },
]

export type moneyInTypeData = GenericItem<number>;

export const moneyInTypes: moneyInTypeData[] = [
  {
    id: 10,
    description: "Wire received"
  },
  {
    id: 11,
    description: "SDD received"
  },
  {
    id: 12,
    description: "Cheque received"
  },
  {
    id: 22,
    description: "Card received (Subscription)"
  },
  {
    id: 48,
    description: "Sofort received"
  },
]

export const genderTypes = [
  {
    id: 'M',
    description: "Male"
  },
  {
    id: 'F',
    description: "Female"
  },
  {
    id: 'J',
    description: "j?"
  },
  {
    id: 'U',
    description: "Unknown"
  },
]
