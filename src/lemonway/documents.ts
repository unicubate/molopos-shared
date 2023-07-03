export type DocumentType = {
  lemonwayId: number
  type: "PENDING" | "ID" | "IBAN-CERT" | "COMPANY-CERT" | "UNUSED"
  description: string
}

export const documentTypes: DocumentType[] = [
  {
    lemonwayId: -1,
    type: "PENDING",
    description: "pending document"
  },
  {
    lemonwayId: 0,
    type: "ID",
    description: "identity card"
  },
  {
    lemonwayId: 3,
    type: "ID",
    description: "EU passport"
  },
  {
    lemonwayId: 4,
    type: "ID",
    description: "extra EU passport"
  },
  {
    lemonwayId: 11,
    type: "ID",
    description: "driving license"
  },
  {
    lemonwayId: 14,
    type: "ID",
    description: "company shareholder ID"
  },
  {
    lemonwayId: 15,
    type: "ID",
    description: "company shareholder ID"
  },
  {
    lemonwayId: 16,
    type: "ID",
    description: "company shareholder ID"
  },
  {
    lemonwayId: 17,
    type: "ID",
    description: "company shareholder ID"
  },
  {
    lemonwayId: 2,
    type: "IBAN-CERT",
    description: "iban certification"
  },
  {
    lemonwayId: 7,
    type: "COMPANY-CERT",
    description: "company registration certificate"
  },
  {
    lemonwayId: 6,
    type: "UNUSED",
    description: ""
  },
  {
    lemonwayId: 18,
    type: "UNUSED",
    description: ""
  },
  {
    lemonwayId: 19,
    type: "UNUSED",
    description: ""
  },
  {
    lemonwayId: 20,
    type: "UNUSED",
    description: ""
  },
  {
    lemonwayId: 5,
    type: "UNUSED",
    description: "residency permit"
  },
  {
    lemonwayId: 12,
    type: "UNUSED",
    description: "status"
  },
  {
    lemonwayId: 13,
    type: "UNUSED",
    description: "selfie"
  },
  {
    lemonwayId: 21,
    type: "UNUSED",
    description: "ssd mandate"
  },
]
