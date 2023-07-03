export type WalletStatusData = {
  id: number
  description: string
}

export const walletStatuses: WalletStatusData[] = [
  {
    id: -1,
    description: "wallet SC"
  },
  { id: 2, description: "	Registered, not verified: missing document(s)" },
  { id: 3, description: "Registered, not verified: document(s) rejected" },
  { id: 5, description: "Registered, not verified: KYC 1 (status given at registration)" },
  { id: 6, description: "	Registered and verified: KYC 2" },
  { id: 7, description: "	KYC 3, pending verification" },
  { id: 8, description: "	Registered, not verified: expired document(s)" },
  { id: 10, description: "	Blocked" },
  { id: 12, description: "	Closed" },
  { id: 13, description: " KYC 3, missing documents" },
  { id: 14, description: " One - time customer" },
  { id: 15, description: "* Special wallet for crowdlending" },
  { id: 16, description: " Technical wallet" },
]
