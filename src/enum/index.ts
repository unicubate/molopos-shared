export enum DocumentType {
    Pending = "-1",
    IdentityCard = "0",     // identity document
    ProofOfAddress = "1",
    IbanCert = "2",
    PassportEU = "3",       // identity document
    PassportExtraEU = "4",  // identity document
    Residence = "5",
    CompanyCert = "7",
    DrivingLicense = "11",  // identity document
    Shareholder1ID = "14",  // identity document
    Shareholder2ID = "15",  // identity document
    Shareholder3ID = "16",  // identity document
    Shareholder4ID = "17",  // identity document
    ResidencyPermit = "5",
    Status = "12",
    Selfie = "13",
    SsdMandate = "21",
};

export enum DocumentStatus {
    Initialized = "-1",
    OnHold = "0",
    Received = "1",
    Accepted = "2",
    Rejected = "3",
    RejectedUnreadable = "4",
    RejectedExpired = "5",
    RejectedWrongType = "6",
    RejectedWrongName = "7",
    RejectedDuplicated = "8",
};

export enum OnfidoDocumentStatus {
    // status of an identity document sent to onfido
    Initialized = 0,
    Processing = 1,
    Complete = 2,
    Error = 3,
};

export enum WalletStatus {
    WalletSC = "-1", // recrowd wallet
    MissingDocuments = "2",
    DocumentsRejected = "3",
    Registered = "5",
    Valid = "6",
    PendingKYC3 = "7",
    ExpiredDocuments = "8",
    Blocked = "10",
    Closed = "12",
    MissingDocumentsKYC3 = "13",
    OneTimeCustomer = "14",
    SpecialWalletForCrowdlending = "15",
    TechnicalWallet = "16",
};

export enum TransactionStatus {
    Created = "-1",
    Completed = "0",
    CompletedP2P = "3",
    Pending = "4",
    Error = "6",
};

export enum IbanStatus {
    None = "1",
    Internal = "2",
    NotUsed = "3",
    ToBeVerified = "4",
    Enabled = "5",
    RejectedByBank = "6",
    RejectedNoOwner = "7",
    Disabled = "8",
    RejectedByLemonway = "9",
};

export enum MoneyInType {
    WireReceived = "10",
    SddReceived = "11",
    ChequeReceived = "12",
    CardReceivedSubscription = "22",
    SofortReceived = "48",
};

export enum GenderType {
    // lemonway only
    Male = "M",
    Female = "F",
    Juridical = "J",
    Unknown = "U",
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
    Created = -1,       // default status
    Modified = 0,       // modified by user
    RefundPeriod = 1,   // awaiting 5-day refund period
    Active = 2,         // paying rates
    Done = 3,           // all rates paid
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
    Success = 2,
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

export enum ProjectStatus {
    Default = "DEFAULT",
    Draft = "DRAFT",
    ComingSoon = "COMING_SOON",
    Crowdfunding = "CROWDFUNDING",
    Financed = "READY",
    Closed = "CLOSED",
    Test = "TEST",
    Overdue = "OVERDUE",     // in gestione
    Postponed = "POSTPONED", // in proproga
};

export enum UserRegistrationStatus {
    // a.k.a. StatusRegisterType
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

export enum VoucherCategory {
    TrackingCode = "TRACKING_CODE",
    Investment = "INVESTMENT",
    FirstInvestment = "FIRST_INVESTMENT",
    InviteFriend = "INVITE_FRIEND",
    Wallet = "WALLET",
};

export enum VoucherActivityType {
    FriendRegistration = "FRIEND_REGISTRATION",
    Promotion = "PROMOTION",
};

export enum SurveyLevel {
    // user classification survey score
    Low = "LOW",    // score < 50
    Mid = "MIDDLE", // 50 <= score < 90
    High = "HIGH",  // score >= 90
};

export enum LegalForm {
    Spa = "SPA",
    Srl = "SRL"
}

export enum TopInvestorType {
    // a.k.a. StatusInvestmentTop
    Top = "TOP",
    SuperTop = "SUPER_TOP"
}

export enum Permission {
    // backoffice permissions
    AssignRole = "assign:role",
    CreateRole = "create:role",
    ReadRole = "read:role",
    UpdateRole = "update:role",
    DeleteRole = "delete:role",
    CreateAdmin = "create:admin",
    ReadAdmin = "read:admin",
    UpdateAdmin = "update:admin",
    DeleteAdmin = "delete:admin",
}

export enum TAS_OnboardingStatus {
    Created = 0,
    Completed = 1,
    Aborted = 2,
}

export enum TAS_AMLQuestionType {
    B2B = "AML-B2B",
    B2C = "AML-B2C",
}

export enum TAS_AMLAnswerType {
    B2B = "AML-B2B-ANSWER",
    B2C = "AML-B2C-ANSWER",
}

export enum TAS_UserType {
    Private = "RETAIL",
    Company = "BUSINESS",
}

export enum TAS_Gender {
    Male = "M",
    Female = "F",
}

export enum TAS_AddressType {
    Residence = "RESIDENCE",
    Domicile = "DOMICILE",
    Legal = "LEGAL",
    Office = "OFFICE",
}

export enum TAS_DocumentType {
    IdentityCard = "IDENTITY_CARD",
    Passport = "PASSPORT",
    DrivingLicense = "DRIVING_LICENSE",
}

export enum TAS_AdditionalDocumentType {
    ResidencyPermit = "PS",
    W9 = "W9",
}

export enum TAS_DocumentIssuer {
    Municipality = "MUNICIPALITY",
    Motorisation = "MCTC",
    Embassy = "ITALIAN_REPRESENTATION_ABROAD",
    Ministry = "MINISTRY",
}

export enum TAS_ShuftiStatus {
    Pending = 0,
    PendingReview = 1,
    Valid = 2,
    RequestError = 3,
    Cancelled = 4,
    Declined = 5,
}

export enum TAS_Pep {
    No = "PEP_REL_N", // No
    Yes = "PEP_REL_D", // Persona politica esposta
    Family = "PEP_REL_F", // Familiare di una persona politica esposta
    Business = "PEP_REL_A", // Legami in affari con una persona politicamente esposta
}

export enum TAS_PepType {
    PresidenteRepubblica = "PEP_TYPE_A", // Presidente della Repubblica
    PresidenteConsiglio = "PEP_TYPE_B", // Presidente del Consiglio
    Ministro = "PEP_TYPE_C", // Ministro
    ViceMinistro = "PEP_TYPE_D", // Vice Ministro
    Sottosegretario = "PEP_TYPE_E", // Sottosegretario
    PresidenteRegione = "PEP_TYPE_F", // Presidente di Regione
    AssessoreRegionale = "PEP_TYPE_G", // Assessore Regionale
    SindacoCapoluogo = "PEP_TYPE_H", // Sindaco di capoluogo di provincia o città metropolitana
    SindacoComune = "PEP_TYPE_I", // Sindaco di comune con popolazione non inferiore a 15.000 abitanti nonché cariche analoghe in Stati esteri
    Deputato = "PEP_TYPE_J", // Deputato
    Senatore = "PEP_TYPE_K", // Senatore
    ParlamentareEuropeo = "PEP_TYPE_L", // Parlamentare Europeo
    ConsigliereRegionale = "PEP_TYPE_M", // Consigliere regionale nonché cariche analoghe in Stati esteri
    MembroPartitiPolitici = "PEP_TYPE_N", // Membro degli organi direttivi centrali di partiti politici
    GiudiceCorteCostituzionale = "PEP_TYPE_O", // Giudice della Corte Costituzionale
    MagistratoCorte = "PEP_TYPE_Q", // Magistrato della Corte di Cassazione o della Corte dei Conti
    ConsiglioGiustiziaAmministrativa = "PEP_TYPE_R", // Altri componenti del Consiglio di Giustizia Amministrativa per la Regione siciliana nonché cariche analoghe in Stati esteri
    MembroBancheCentrali = "PEP_TYPE_S", // Membro degli organi direttivi delle banche centrali e delle autorità indipendenti
    Ambasciatore = "PEP_TYPE_T", // Ambasciatore, incaricato d’affari ovvero cariche equivalenti in Stati esteri, ufficiale di grado apicale delle forze armate ovvero cariche analoghe in Stati esteri
    ComponenteImpreseStato = "PEP_TYPE_U", // Componente degli organi di amministrazione, direzione o controllo delle imprese controllate, anche indirettamente, dallo Stato italiano o da uno Stato estero ovvero partecipate, in misura prevalente o totalitaria, dalle Regioni, da comuni capoluoghi di provincia e città metropolitane e da comuni con popolazione complessivamente non inferiore a 15.000 abitanti
    DirettoreASL = "PEP_TYPE_V", // Direttore generale di ASL e di azienda ospedaliera, di azienda ospedaliera universitaria e degli altri enti del servizio sanitario nazionale
    MembroOrganizzazioniInternazionali = "PEP_TYPE_W", // Direttore, vicedirettore e membro dell’organo di gestione o soggetto svolgenti funzioni equivalenti in organizzazioni internazionali
    ConsigliereStato = "PEP_TYPE_P", // Consigliere di Stato
}