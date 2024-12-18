export function checkCodiceFiscale(cf: string) {
    cf = cf.toUpperCase();

    if (!/^[A-Z]{6}[0-9LMNPQRSTUV]{2}[ABCDEHLMPRST]{1}[0-9LMNPQRSTUV]{2}[A-Z]{1}[0-9LMNPQRSTUV]{3}[A-Z]{1}$/.test(cf)) {
        return false;
    }

    let v = 0;

    for (let i = 0; i < 15; i++) {
        const d = cf.charAt(i);
        const c = /\d/.test(d) ? String.fromCharCode(65 + Number(d)) : d;
        v += i % 2 === 0
            ? "BAKPLCQDREVOSFTGUHMINJWZYX".indexOf(c)
            : "ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(c);
    }

    return 65 + (v % 26) === cf.charCodeAt(15);
}

export type CodiceFiscaleData = {
    firstName: string;
    lastName: string;
    gender: "M" | "F";
    birth: Date;
    /** the birth city identification code */
    belfiore: string;
    isOmocodia: boolean;
    isForeign: boolean;
};

/**
 * @throws if the *codice fiscale* is invalid
 */
export function parseCodiceFiscale(cf: string): CodiceFiscaleData {
    cf = cf.toUpperCase();

    if (!checkCodiceFiscale(cf)) {
        throw new Error("Invalid Codice Fiscale");
    }

    let isOmocodia = false;
    for (const i of [6, 7, 9, 10, 12, 13, 14]) {
        const d = cf.charAt(i);

        if (!/\d/.test(d)) {
            isOmocodia = true;
            cf = cf.substring(0, i)
                + "LMNPQRSTUV".indexOf(d)
                + cf.substring(i + 1);
        }
    }

    const lastName = cf.substring(0, 3);
    const firstName = cf.substring(3, 6);

    let year = Number(cf.substring(6, 8));
    year += (year > new Date().getFullYear() - 2000 ? 1900 : 2000);

    const month = "ABCDEHLMPRST".indexOf(cf.substring(8, 9));

    let day = Number(cf.substring(9, 11));
    const gender = day > 31 ? "F" : "M";
    day = day > 31 ? day - 40 : day;

    const birth = new Date(Date.UTC(year, month, day, 0, 0, 0, 0));

    const belfiore = cf.substring(11, 15);
    const isForeign = belfiore.startsWith("Z");

    return {
        firstName,
        lastName,
        gender,
        birth,
        belfiore,
        isOmocodia,
        isForeign,
    };
}
