export type PepItem = {
    id: number;
    type: string;
    code: string;
    label: string;
    createdDate: string;
};

export const pepType: PepItem[] = [
    {
        id: 50003,
        type: "PEP-TYPE",
        code: "PEP_TYPE_A",
        label: "Presidente della Repubblica",
        createdDate: "2023-08-02T18:21:49"
    },
    {
        id: 50004,
        type: "PEP-TYPE",
        code: "PEP_TYPE_B",
        label: "Presidente del Consiglio",
        createdDate: "2023-08-02T18:21:49"
    },
    {
        id: 50005,
        type: "PEP-TYPE",
        code: "PEP_TYPE_C",
        label: "Ministro",
        createdDate: "2023-08-02T18:21:49"
    },
    {
        id: 50006,
        type: "PEP-TYPE",
        code: "PEP_TYPE_D",
        label: "Vice Ministro",
        createdDate: "2023-08-02T18:21:49"
    },
    {
        id: 50007,
        type: "PEP-TYPE",
        code: "PEP_TYPE_E",
        label: "Sottosegretario",
        createdDate: "2023-08-02T18:21:49"
    },
    {
        id: 50008,
        type: "PEP-TYPE",
        code: "PEP_TYPE_F",
        label: "Presidente di Regione",
        createdDate: "2023-08-02T18:21:49"
    },
    {
        id: 50009,
        type: "PEP-TYPE",
        code: "PEP_TYPE_G",
        label: "Assessore Regionale",
        createdDate: "2023-08-02T18:21:49"
    },
    {
        id: 50011,
        type: "PEP-TYPE",
        code: "PEP_TYPE_H",
        label: "Sindaco di capoluogo di provincia o città metropolitana",
        createdDate: "2023-08-02T18:21:49"
    },
    {
        id: 50012,
        type: "PEP-TYPE",
        code: "PEP_TYPE_I",
        label: "Sindaco di comune con popolazione non inferiore a 15.000 abitanti nonché cariche analoghe in Stati esteri",
        createdDate: "2023-08-02T18:21:49"
    },
    {
        id: 50013,
        type: "PEP-TYPE",
        code: "PEP_TYPE_J",
        label: "Deputato",
        createdDate: "2023-08-02T18:21:49"
    },
    {
        id: 50014,
        type: "PEP-TYPE",
        code: "PEP_TYPE_K",
        label: "Senatore",
        createdDate: "2023-08-02T18:21:49"
    },
    {
        id: 50015,
        type: "PEP-TYPE",
        code: "PEP_TYPE_L",
        label: "Parlamentare Europeo",
        createdDate: "2023-08-02T18:21:49"
    },
    {
        id: 50017,
        type: "PEP-TYPE",
        code: "PEP_TYPE_M",
        label: "Consigliere regionale nonché cariche analoghe in Stati esteri;",
        createdDate: "2023-08-02T18:21:49"
    },
    {
        id: 50018,
        type: "PEP-TYPE",
        code: "PEP_TYPE_N",
        label: "Membro degli organi direttivi centrali di partiti politici",
        createdDate: "2023-08-02T18:21:49"
    },
    {
        id: 50019,
        type: "PEP-TYPE",
        code: "PEP_TYPE_O",
        label: "Giudice della Corte Costituzionale",
        createdDate: "2023-08-02T18:21:49"
    },
    {
        id: 50020,
        type: "PEP-TYPE",
        code: "PEP_TYPE_Q",
        label: "Magistrato della Corte di Cassazione o della Corte dei Conti",
        createdDate: "2023-08-02T18:21:49"
    },
    {
        id: 50021,
        type: "PEP-TYPE",
        code: "PEP_TYPE_R",
        label: "Altri componenti del Consiglio di Giustizia Amministrativa per la Regione siciliana nonché cariche analoghe in Stati esteri",
        createdDate: "2023-08-02T18:21:49"
    },
    {
        id: 50022,
        type: "PEP-TYPE",
        code: "PEP_TYPE_S",
        label: "Membro degli organi direttivi delle banche centrali e delle autorità indipendenti",
        createdDate: "2023-08-02T18:21:49"
    },
    {
        id: 50023,
        type: "PEP-TYPE",
        code: "PEP_TYPE_T",
        label: "Ambasciatore, incaricato d’affari ovvero cariche equivalenti in Stati esteri, ufficiale di grado apicale delle forze armate ovvero cariche analoghe in Stati esteri",
        createdDate: "2023-08-02T18:21:49"
    },
    {
        id: 50024,
        type: "PEP-TYPE",
        code: "PEP_TYPE_U",
        label: "Componente degli organi di amministrazione, direzione o controllo delle imprese controllate, anche indirettamente, dallo Stato italiano o da uno Stato estero ovvero partecipate, in misura prevalente o totalitaria, dalle Regioni, da comuni capoluoghi di provincia e città metropolitane e da comuni con popolazione complessivamente non inferiore a 15.000 abitanti",
        createdDate: "2023-08-02T18:21:49"
    },
    {
        id: 50025,
        type: "PEP-TYPE",
        code: "PEP_TYPE_V",
        label: "Direttore generale di ASL e di azienda ospedaliera, di azienda ospedaliera universitaria e degli altri enti del servizio sanitario nazionale",
        createdDate: "2023-08-02T18:21:49"
    },
    {
        id: 50026,
        type: "PEP-TYPE",
        code: "PEP_TYPE_W",
        label: "Direttore, vicedirettore e membro dell’organo di gestione o soggetto svolgenti funzioni equivalenti in organizzazioni internazionali",
        createdDate: "2023-08-02T18:21:49"
    },
    {
        id: 50027,
        type: "PEP-TYPE",
        code: "PEP_TYPE_P",
        label: "Consigliere di Stato",
        createdDate: "2023-08-02T18:21:49"
    }
];


export const pepRel: PepItem[] = [
    {
        id: 49999,
        type: "PEP-REL",
        code: "PEP_REL_N",
        label: "No",
        createdDate: "2023-08-02T18:21:49"
    },
    {
        id: 50000,
        type: "PEP-REL",
        code: "PEP_REL_D",
        label: "Persona politica esposta",
        createdDate: "2023-08-02T18:21:49"
    },
    {
        id: 50001,
        type: "PEP-REL",
        code: "PEP_REL_F",
        label: "Familiare di una persona politica esposta",
        createdDate: "2023-08-02T18:21:49"
    },
    {
        id: 50002,
        type: "PEP-REL",
        code: "PEP_REL_A",
        label: "Legami in affari con una persona politicamente esposta",
        createdDate: "2023-08-02T18:21:49"
    }
];