import { zParseWith } from "../../lib/utils";
import { z } from "zod";

export type Currency = "rubles" | "euro" | "dollars";

export type FormSchema = {
  amount: number | null;
  currency: string;
  duration: string;
  withdrawable: boolean;
  replenishable: boolean;
  capitalizable: boolean;
  period: string;
};

export const formSchema = zParseWith<FormSchema>()({
  amount: z.number().positive().nullable(),
  currency: z.string(),
  duration: z.string(),
  withdrawable: z.boolean(),
  replenishable: z.boolean(),
  capitalizable: z.boolean(),
  period: z.string(),
});
