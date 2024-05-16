import { useId } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FormSchema } from "./schema";
import { z } from "zod";
import { useConfiguredForm } from "../../lib/form";

import { FormProvider } from "react-hook-form";
import { ReactHookFormDevTool } from "../common/ReactHookFormDevTool/ReactHookFormDevTool";
import { NestedForm } from "./NestedForm";

export type FormValues = z.infer<typeof formSchema>;

const defaultValues = {
  amount: null,
  currency: "rubles",
  duration: "2 месяца",
  withdrawable: false,
  replenishable: false,
  capitalizable: true,
  period: "Ежемесячно",
};

export const MyForm = () => {
  const id = useId();

  const form = useConfiguredForm<FormSchema, FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const { control } = form;

  return (
    <>
      <ReactHookFormDevTool control={control} placement="bottom-left" />
      <FormProvider {...form}>
        <NestedForm {...{ id }} />
      </FormProvider>
    </>
  );
};
