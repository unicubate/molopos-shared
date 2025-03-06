export enum DocumentType {
  Pending = "-1",
  /** identity document */
  IdentityCard = "0",
  ProofOfAddress = "1",
  IbanCert = "2",
  /** identity document */
  PassportEU = "3",
  /** identity document */
  PassportExtraEU = "4",
  Residence = "5",
  CompanyCert = "7",
  /** identity document */
  DrivingLicense = "11",
  /** identity document */
  Shareholder1ID = "14",
  /** identity document */
  Shareholder2ID = "15",
  /** identity document */
  Shareholder3ID = "16",
  /** identity document */
  Shareholder4ID = "17",
  ResidencyPermit = "5",
  Status = "12",
  Selfie = "13",
  SsdMandate = "21",
}

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
}

/** status of an identity document sent to onfido */
export enum OnfidoDocumentStatus {
  Initialized = 0,
  Processing = 1,
  Complete = 2,
  Error = 3,
}

export enum WalletStatus {
  /** recrowd wallet */
  WalletSC = "-1",
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
}

export enum TransactionStatus {
  Created = "-1",
  Completed = "0",
  CompletedP2P = "3",
  Pending = "4",
  Error = "6",
}

export enum TransactionDirection {
  In = "IN",
  Out = "OUT",
}

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
}

export enum MoneyInType {
  WireReceived = "10",
  SddReceived = "11",
  ChequeReceived = "12",
  CardReceivedSubscription = "22",
  SofortReceived = "48",
}

/** lemonway only */
export enum GenderType {
  Male = "M",
  Female = "F",
  Juridical = "J",
  Unknown = "U",
}

export enum AlertType {
  Info = 0,
  Warning = 1,
  Error = 2,
}

export enum NotificationType {
  Info = 0,
  Basic = 1,
  Warning = 2,
  Error = 3,
}

export enum ProjectPayoutStrategyType {
  Immediate = 0,
  Partial = 1,
}

export enum EventStatus {
  Overdue = 0,
  Active = 1,
  Done = 2,
}

export enum ProspectStatus {
  /** default status */
  Created = -1,
  /** modified by user */
  Modified = 0,
  /** awaiting 5-day refund period */
  RefundPeriod = 1,
  /** paying rates */
  Active = 2,
  /** all rates paid */
  Done = 3,
}

export enum ProspectRateStatus {
  Created = 0,
  ToBePaid = 1,
  InPayment = 2,
  Paid = 3,
  Error = 4,
}

export enum ProspectRateInvestorStatus {
  Created = 0,
  ToBePaid = 1,
  InPayment = 2,
  Paid = 3,
  Error = 4,
}

export enum InvestmentStatus {
  Created = -1,
  Success = 2,
  Refunded = 3,
  Expired = 4,
}

export enum ClassificationStatus {
  Pending = 0,
  Approved = 1,
  Declined = 2,
}

export enum CategoryProject {
  Relax = "RELAX",
  Exclusive = "EXCLUSIVE",
  Elite = "ELITE",
}

export enum ProjectStatus {
  Default = "DEFAULT",
  Draft = "DRAFT",
  ComingSoon = "COMING_SOON",
  Crowdfunding = "CROWDFUNDING",
  Financed = "READY",
  Closed = "CLOSED",
  Test = "TEST",
  /** in gestione */
  Overdue = "OVERDUE",
  /** in proproga */
  Postponed = "POSTPONED",
}

/** a.k.a. *StatusRegisterType* */
export enum UserRegistrationStatus {
  Registered = "REGISTERED",
  EmailConfirmed = "REGISTERED_CONFIRMED",
  KYCCompleted = "REGISTERED_PROFILE",
  DocumentUploaded = "REGISTERED_DOCUMENT",
  AmlCompleted = "REGISTERED_AML",
  RegistrationCompleted = "REGISTERED_COMPLETED",
  Investor = "INVESTOR",
}

export enum AccountType {
  Company = "AZIENDA",
  Private = "PRIVATO",
  Proponent = "PROPONENT",
}

export enum TransactionType {
  MoneyIn = "MONEYIN",
  MoneyOut = "MONEYOUT",
  P2P = "P2P",
  PayByBank = "PAYBYBANK",
  Voucher = "VOUCHER",
}

export enum VoucherCategory {
  TrackingCode = "TRACKING_CODE",
  Investment = "INVESTMENT",
  FirstInvestment = "FIRST_INVESTMENT",
  InviteFriend = "INVITE_FRIEND",
  Wallet = "WALLET",
}

export enum VoucherActivityType {
  FriendRegistration = "FRIEND_REGISTRATION",
  Promotion = "PROMOTION",
}

/** user classification survey score */
export enum SurveyLevel {
  /** score < 50 */
  Low = "LOW",
  /** 50 <= score < 90 */
  Mid = "MIDDLE",
  /** score >= 90 */
  High = "HIGH",
}

export enum LegalForm {
  Spa = "SPA",
  Srl = "SRL",
}

/** a.k.a. *StatusInvestmentTop* */
export enum TopInvestorType {
  Top = "TOP",
  SuperTop = "SUPER_TOP",
}

export enum IntegrationType {
  Lemonway = "LEMONWAY",
  Activecampaign = "ACTIVECAMPAIGN",
  Tas = "TAS",
  Tas_Tech = "TAS_TECH",
}

/** backoffice permissions */
export enum Permission {
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

export enum AuthType {
  Email = 0,
  Authenticator = 1,
  Sms = 2,
  ResetPassword = 3,
}

export enum TAS_OnboardingStatus {
  Created = 0,
  Completed = 1,
  Aborted = 2,
}

export enum TAS_OnboardingAttemptStatus {
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
  /** does NOT exist in the database, only used when calling the TAS API */
  ResidencyPermit = "PS",
  /** needs to be converted to *ResidencyPermit* when calling the TAS API */
  PermanentResidencyPermit = "PSP",
  /** needs to be converted to *ResidencyPermit* when calling the TAS API */
  TemporaryResidencyPermit = "PST",
}

export enum TAS_AdditionalDocumentType {
  W9 = "W9",
  CompanyDelegation = "POWER_OF_BOFD",
  CompanyReport = "COMPANY_REPORT",
}

export enum TAS_DocumentIssuer {
  /** Motorizzazione */
  DMV = "MCTC",
  /** Comune */
  Municipality = "MUNICIPALITY",
  /** Consolato */
  Consulate = "ITALIAN_REPRESENTATION_ABROAD",
  /** Ministero */
  Ministry = "MINISTRY",
  /** Questura */
  Preccint = "POLICE_HEADQUARTER",
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
  /** No */
  No = "PEP_REL_N",
  /** Persona politicamente esposta */
  Yes = "PEP_REL_D",
  /** Familiare di una persona politicamente esposta */
  Family = "PEP_REL_F",
  /** Legami in affari con una persona politicamente esposta */
  Business = "PEP_REL_A",
}

export enum TAS_PepType {
  PresidenteRepubblica = "PEP_TYPE_A",
  PresidenteConsiglio = "PEP_TYPE_B",
  Ministro = "PEP_TYPE_C",
  ViceMinistro = "PEP_TYPE_D",
  Sottosegretario = "PEP_TYPE_E",
  PresidenteRegione = "PEP_TYPE_F",
  AssessoreRegionale = "PEP_TYPE_G",
  /** Sindaco di capoluogo di provincia o città metropolitana */
  SindacoCapoluogo = "PEP_TYPE_H",
  /**
   * Sindaco di comune con popolazione non inferiore a 15.000
   * abitanti nonché cariche analoghe in Stati esteri
   */
  SindacoComune = "PEP_TYPE_I",
  Deputato = "PEP_TYPE_J",
  Senatore = "PEP_TYPE_K",
  ParlamentareEuropeo = "PEP_TYPE_L",
  /** Consigliere regionale nonché cariche analoghe in Stati esteri */
  ConsigliereRegionale = "PEP_TYPE_M",
  /** Membro degli organi direttivi centrali di partiti politici */
  MembroPartitiPolitici = "PEP_TYPE_N",
  /** Giudice della Corte Costituzionale */
  GiudiceCorteCostituzionale = "PEP_TYPE_O",
  /** Magistrato della Corte di Cassazione o della Corte dei Conti */
  MagistratoCorte = "PEP_TYPE_Q",
  /**
   * Altri componenti del Consiglio di Giustizia Amministrativa per
   * la Regione siciliana nonché cariche analoghe in Stati esteri
   */
  ConsiglioGiustiziaAmministrativa = "PEP_TYPE_R",
  /**
   * Membro degli organi direttivi delle banche centrali e delle
   * autorità indipendenti
   */
  MembroBancheCentrali = "PEP_TYPE_S",
  /**
   * Ambasciatore, incaricato d’affari ovvero cariche equivalenti
   * in Stati esteri, ufficiale di grado apicale delle forze armate
   * ovvero cariche analoghe in Stati esteri
   */
  Ambasciatore = "PEP_TYPE_T",
  /**
   * Componente degli organi di amministrazione, direzione o controllo
   * delle imprese controllate, anche indirettamente, dallo Stato
   * italiano o da uno Stato estero ovvero partecipate, in misura
   * prevalente o totalitaria, dalle Regioni, da comuni capoluoghi
   * di provincia e città metropolitane e da comuni con popolazione
   * complessivamente non inferiore a 15.000 abitanti
   */
  ComponenteImpreseStato = "PEP_TYPE_U",
  /**
   * Direttore generale di ASL e di azienda ospedaliera, di azienda
   * ospedaliera universitaria e degli altri enti del servizio
   * sanitario nazionale
   */
  DirettoreASL = "PEP_TYPE_V",
  /**
   * Direttore, vicedirettore e membro dell’organo di gestione o
   * soggetto svolgenti funzioni equivalenti in organizzazioni
   * internazionali
   */
  MembroOrganizzazioniInternazionali = "PEP_TYPE_W",
  ConsigliereStato = "PEP_TYPE_P",
}

export enum TAS_ShuftiErrorTarget {
  Shufti = 0,
  FirstName = 1,
  LastName = 2,
  BirthDate = 3,
  Document = 4,
  DocumentReleaseDate = 5,
  DocumentExpiryDate = 6,
  DocumentNumber = 7,
  CompanyName = 8,
  Exit = 9,
}

export enum TAS_LegalForm {
  SocietaAccomanditaAzioni = "AA",
  Associazione = "AC",
  SocietaConsortileAccomanditaSemplice = "AE",
  AltreForme = "AF",
  AssociazioneImpresa = "AI",
  AziendaSpecialeEnteLocale = "AL",
  AziendaMunicipale = "AM",
  SocietaConsortileNomeCollettivo = "AN",
  AziendaProvinciale = "AP",
  AziendaRegionale = "AR",
  SocietaAccomanditaSemplice = "AS",
  AziendaAutonomaStatale = "AT",
  SocietaAzioniSocioUnico = "AU",
  AziendaSpeciale = "AZ",
  ConsorzioAttivitaEsterna = "CC",
  ComunioneEreditaria = "CE",
  ConsorzioFidi = "CF",
  SocietaCooperativaResponsabilitaIllimitata = "CI",
  SocietaCooperativaResponsabilitaLimitata = "CL",
  ConsorzioMunincipale = "CM",
  SocietaConsortile = "CN",
  Consorzio = "CO",
  ConsorzioIntercomunale = "CR",
  ConsorzioSenzaAttivitaEsterna = "CS",
  ConsorzioDLGS2672000 = "CZ",
  ImpresaIndividuale = "DI",
  EntePubblicoCommerciale = "EC",
  EnteDirittoPubblico = "ED",
  EnteEcclesiastico = "EE",
  EnteImpresa = "EI",
  EnteSociale = "EL",
  EnteMorale = "EM",
  Ente = "EN",
  EntePubblicoEconomico = "EP",
  EnteEcclesiasticoCivilmenteRiconosciuto = "ER",
  EnteLR93N88 = "ES",
  FondazioneImpresa = "FI",
  Fondazione = "FO",
  GruppoEuropeoInteresseEconomico = "GE",
  IstitutoCredito = "IC",
  IstitutoCreditoDirittoPubblico = "ID",
  ImpresaFamigliare = "IF",
  IstitutoReligioso = "IR",
  AziendaSpecialeDLGS2672000 = "LL",
  MutuaAssicurazione = "MA",
  SocietaCooperativaConsortile = "OC",
  CooperativaSociale = "OO",
  SocietaConsortileCoopRespLimitata = "OS",
  AssociazionePartecipazione = "PA",
  PiccolaSocietaCooperativia = "PC",
  PersonaFisica = "PF",
  PiccolaSocietaCoopRespLimitata = "PS",
  SocietaRespLimitataCapitaleRidotto = "RR",
  SocietaRespLimitatSemplificata = "RS",
  SocietaAnonima = "SA",
  SocietaCooperativa = "SC",
  SocietaEuropea = "SD",
  SocietaSemplice = "SE",
  SocietaDiFatto = "SF",
  SocietaCoopEuropea = "SG",
  SocietaIrregolare = "SI",
  SocietaConsortileRespLimitata = "SL",
  SocietaMutuoSoccorso = "SM",
  SocietaNomeCollettivo = "SN",
  SocietaConsortileAzioni = "SO",
  SocietaAzioni = "SP",
  SocietaRespLimitata = "SR",
  SocietaLeggiAltroStato = "SS",
  SoggettoEstero = "ST",
  SocietaRespLimitataUnicoSocio = "SU",
  SocietaProfessionisti = "SV",
  SocietaNoLegislazioneIta = "SZ",
  NonPrecisata = "XX",
}

export enum TAS_TransactionType {
  SEPA = "TrxSEPA",
  InstantPayment = "TrxINST",
}

export enum TAS_TransactionStatus {
  Pending = 0,
  Confirmed = 1,
  Rejected = 2,
}
export enum TAS_OperationOverAllStatus {
  /** transazione valida, da autorizzare */
  Valid = "VALD",
  /** transazione in errore */
  Error = "ERRR",
  /** transazione in lavorazione */
  Pending = "PNDG",
  /** transazione presa in carico */
  Sent = "SENT",
  /** Eseguita */
  Executed = "ACSC",
  /** Non Eseguita */
  Rejected = "RJT",
  /** Revocata dall’utente */
  Revoked = "CNCL",
  /** Sospesa (operatività corporate) */
  Suspended = "SUSP",
}

export enum TAS_OperationCurrentStatus {
  /** transazione valida, da autorizzare */
  Valid = "VALD",
  /** transazione in errore */
  Error = "ERRR",
  /** transazione in lavorazione */
  Pending = "PNDG",
  /** transazione presa in carico */
  Sent = "SENT",
  /** Eseguita */
  Executed = "XEC",
  /** Non Eseguita */
  Rejected = "RJCT",
  /** Revocata dall’utente */
  Revoked = "CNCL",
  /** Sospesa (operatività corporate) */
  Suspended = "SUSP",
  /**
   * Operazione firmata da un solo firmatario in un contesto in cui
   * è richiesta firma congiunta. (caso tipicamente relativo ad utenze
   * corporate).
   */
  Partial = "AUT1",
}

export enum TAS_TransactionDirection {
  In = "IN",
  Out = "OUT",
}

export enum BankAccountType {
  Main = "MAIN",
  Tech = "TECH",
}

export enum OnboardingTypes {
  Investor = "INVESTOR",
  Proponent = "PROPONENT",
}
