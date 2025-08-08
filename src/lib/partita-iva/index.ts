export function checkPartitaIVA(piva: string): boolean {
  if (!/^\d{11}$/.test(piva)) return false;

  let sum = 0;

  for (let i = 0; i < 10; i++) {
    let digit = parseInt(piva.charAt(i), 10);

    if (i % 2 === 0) {
      sum += digit;
    } else {
      digit *= 2;
      if (digit > 9) digit -= 9;
      sum += digit;
    }
  }

  const expectedCheckDigit = (10 - (sum % 10)) % 10;
  const actualCheckDigit = parseInt(piva.charAt(10), 10);

  return expectedCheckDigit === actualCheckDigit;
}

export type PartitaIVAData = {
  numero: string;
  isForeign: boolean;
};

/**
 * @throws if the partita IVA is invalid
 */
export function parsePartitaIVA(piva: string): PartitaIVAData {
  piva = piva.trim();

  if (!checkPartitaIVA(piva)) {
    throw new Error("Invalid Partita IVA");
  }

  // In some conventions, the numbers from 0000001 to 1000000 are Italian.
  // Those from 1000001 onwards may be assigned to foreign entities.
  const isForeign = parseInt(piva.substring(0, 7), 10) >= 1000000;

  return {
    numero: piva,
    isForeign,
  };
}
