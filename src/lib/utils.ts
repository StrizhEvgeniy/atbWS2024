import { z, ZodTypeAny } from "zod";

export type NullableRecordKeys<
  T extends Record<string | number, unknown>,
  K extends keyof T
> = Omit<T, K> & Record<K, T[K] | null>;

export const zParseWith =
  <T extends object>() =>
  <
    S extends {
      [P in keyof S]: P extends keyof T ? ZodTypeAny : never;
    } & Record<keyof T, ZodTypeAny>
  >(
    shape: S
  ) =>
    z.object(shape);
