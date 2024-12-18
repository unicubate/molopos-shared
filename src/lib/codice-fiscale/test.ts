import { parseCodiceFiscale } from ".";

const data = parseCodiceFiscale("BGLMRC99R30F205T");

if (JSON.stringify(data, null, 4) !== `{
    "firstName": "MRC",
    "lastName": "BGL",
    "gender": "M",
    "birth": "1999-10-30T00:00:00.000Z",
    "belfiore": "F205",
    "isOmocodia": false,
    "isForeign": false
}`) throw 1;

const dataOmocodia = parseCodiceFiscale("BGLMRCVVRPLFNLRE");

if (JSON.stringify(dataOmocodia, null, 4) !== `{
    "firstName": "MRC",
    "lastName": "BGL",
    "gender": "M",
    "birth": "1999-10-30T00:00:00.000Z",
    "belfiore": "F205",
    "isOmocodia": true,
    "isForeign": false
}`) throw 1;
