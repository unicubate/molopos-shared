export enum DocumentType {
    Pending = '-1',
    IdentityCard = '0',
    ProofOfAddress = '1',
    IbanCert = '2',
    PassportEU = '3',
    PassportExtraEU = '4',
    Residence = '5',
    CompanyCert = '7',
    DrivingLicense = '11',
    Shareholder1ID = '14',
    Shareholder2ID = '15',
    Shareholder3ID = '16',
    Shareholder4ID = '17',
    ResidencyPermit = '5',
    Status = '12',
    Selfie = '13',
    SsdMandate = '21',
};

export enum WalletStatus {
    WalletSC = '-1',
    MissingDocuments = '2',
    DocumentsRejected = '3',
    Registered = '5',
    Valid = '6',
    PendingKYC3 = '7',
    ExpiredDocuments = '8',
    Blocked = '10',
    Closed = '12',
    MissingDocumentsKYC3 = '13',
    OneTimeCustomer = '14',
    SpecialWalletForCrowdlending = '15',
    TechnicalWallet = '16',
};

export enum TransactionStatus {
    Completed = '0',
    CompletedP2P = '3',
    Pending = '4',
    Error = '6',
};

export enum IbanStatus {
    ToBeVerified = '4',
    Enabled = '5',
    Disabled = '8',
    RejectedByLemonway = '9',
};

export enum MoneyInType {
    WireReceived = '10',
    SddReceived = '11',
    ChequeReceived = '12',
    CardReceivedSubscription = '22',
    SofortReceived = '48',
};

export enum GenderType {
    Male = 'M',
    Female = 'F',
    J = 'J',
    Unknown = 'U',
};
