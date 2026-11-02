/**
 * Recurrence enum
 */
export enum RecurrenceEnum {
  Daily = "DAILY",
  Weekly = "WEEKLY",
  Monthly = "MONTHLY",
  Yearly = "YEARLY",
  Bimonthly = "BIMONTHLY", // 6 fois par an
  Trimestral = "TRIMESTRAL", // 4 fois par an
  Semestral = "SEMESTRAL", // 2 fois par an
}

type Recurrence = {
  value: RecurrenceEnum;
  label: RecurrenceEnum;
};

export const recurrences: Recurrence[] = [
  {
    value: RecurrenceEnum.Daily,
    label: RecurrenceEnum.Daily,
  },
  {
    value: RecurrenceEnum.Weekly,
    label: RecurrenceEnum.Weekly,
  },
  {
    value: RecurrenceEnum.Monthly,
    label: RecurrenceEnum.Monthly,
  },
  {
    value: RecurrenceEnum.Bimonthly,
    label: RecurrenceEnum.Bimonthly,
  },
  {
    value: RecurrenceEnum.Trimestral,
    label: RecurrenceEnum.Trimestral,
  },
  {
    value: RecurrenceEnum.Semestral,
    label: RecurrenceEnum.Semestral,
  },
  {
    value: RecurrenceEnum.Yearly,
    label: RecurrenceEnum.Yearly,
  },
];
