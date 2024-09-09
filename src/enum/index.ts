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

export enum DocumentStatus {
    Initialized = '-1',
    OnHold = '0',
    Received = '1',
    Accepted = '2',
    Rejected = '3',
    RejectedUnreadable = '4',
    RejectedExpired = '5',
    RejectedWrongType = '6',
    RejectedWrongName = '7',
    RejectedDuplicated = '8',
};

export enum OnfidoDocumentStatus {
    Initialized = 0,
    Processing = 1,
    Complete = 2,
    Error = 3,
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
    Created = '-1',
    Completed = '0',
    CompletedP2P = '3',
    Pending = '4',
    Error = '6',
};

export enum IbanStatus {
    None = '1',
    Internal = '2',
    NotUsed = '3',
    ToBeVerified = '4',
    Enabled = '5',
    RejectedByBank = '6',
    RejectedNoOwner = '7',
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
    Juridical = 'J',
    Unknown = 'U',
};

export enum AlertType {
    Info = 0,
    Warning = 1,
    Error = 2,
};

export enum NotificationType {
    Info = 0,
    Basic = 1,
    Warning = 2,
    Error = 3,
};

export enum ProjectPayoutStrategyType {
    Immediate = 0,
    Partial = 1,
};

export enum EventStatus {
    Overdue = 0,
    Active = 1,
    Done = 2,
};

export enum ProspectStatus {
    Created = -1,
    Overdue = 0,
    Active = 1,
    Done = 2,
};

export enum ProspectRateStatus {
    Created = 0,
    ToBePaid = 1,
    InPayment = 2,
    Paid = 3,
    Error = 4,
};

export enum ProspectRateInvestorStatus {
    Created = 0,
    ToBePaid = 1,
    InPayment = 2,
    Paid = 3,
    Error = 4,
};

export enum InvestmentStatus {
    Created = -1,
    Confirmed = 2,
    Refunded = 3,
};

export enum ClassificationStatus {
    Pending = 0,
    Approved = 1,
    Declined = 2,
};

export enum CategoryProject {
    Relax = "RELAX",
    Exclusive = "EXCLUSIVE",
    Elite = "ELITE",
};

export enum StatusesProject {
    Default = "DEFAULT",
    Draft = "DRAFT",
    ComingSoon = "COMING_SOON",
    Crowdfunding = "CROWDFUNDING",
    Financed = "READY",
    Closed = "CLOSED",
    Test = "TEST",
    Overdue = "OVERDUE", // in gestione
    Postponed = "POSTPONED", // in proproga
};

export enum StatusRegisterType {
    Registered = "REGISTERED",
    EmailConfirmed = "REGISTERED_CONFIRMED",
    KYCCompleted = "REGISTERED_PROFILE",
    DocumentUploaded = "REGISTERED_DOCUMENT",
    AmlCompleted = "REGISTERED_AML",
    RegistrationCompleted = "REGISTERED_COMPLETED",
    Investor = "INVESTOR",
};

export enum AccountType {
    Company = "AZIENDA",
    Private = "PRIVATO",
    Proponent = "PROPONENT",
};

export enum TransactionType {
    MoneyIn = "MONEYIN",
    MoneyOut = "MONEYOUT",
    P2P = "P2P",
    PayByBank = "PAYBYBANK",
    Voucher = "VOUCHER",
};

export enum VoucherActivityType {
    Receive = "RECEIVE",
    Friend = "FRIEND",
    FriendInvested = "FRIEND_INVESTED",
    Promotion = "PROMOTION",
    Invited = "INVITED",
};

export enum VoucherCategory {
    Wallet = "WALLET",
    Investment = "INVESTMENT",
    InviteUser = "INVITE_USER",
    Invite = "INVITE",
    FirstInvestment = "FIRST_INVESTMENT",
    NotBenefit = "NOT_BENEFIT",
    TrackingCode = "TRACKING_CODE",
};

export enum SurveyLevel {
    // punteggio questionario classicazione
    Low = "LOW", // score < 50
    Mid = "MIDDLE", // 50 <= score < 90
    High = "HIGH", // score >= 90
};
