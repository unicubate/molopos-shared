import { itBanks } from "../data/it.banks";

export function getBankNameFromIban(iban: string) {
  const bankCode = iban.slice(5, 10);
  const codeWithoutLeadingZeroes = Number(bankCode).toString();
  const bank = itBanks.find((b) => b.code === codeWithoutLeadingZeroes);
  return bank ? bank.name : null;
}
