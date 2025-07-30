import { itBanks } from "../../data/it.banks";

export function getBankNameFromIban(iban: string) {
  if (!iban.startsWith("IT") || iban.length !== 27) return null;
  const bankCode = Number(iban.slice(5, 10)).toString();
  const bank = itBanks.find((b) => b.code === bankCode);
  return bank ? bank.name : null;
}
