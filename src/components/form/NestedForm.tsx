import { FormSchema } from "./schema";
import { useConfiguredFormContext } from "../../lib/form";
import { useController } from "react-hook-form";
import { Form } from "antd";
import { NumberField } from "../common/FormFieldNumber";
import { FormValues } from "./MyForm";

export const NestedForm = ({ id }: { id: string }) => {
  const { control, handleSubmit, watch } = useConfiguredFormContext<
    FormSchema,
    FormValues
  >();

  const amountController = useController({ control, name: "amount" });
  const currencyController = useController({ control, name: "currency" });
  const durationController = useController({ control, name: "duration" });
  const withdrawableController = useController({
    control,
    name: "withdrawable",
  });
  const replenishableController = useController({
    control,
    name: "replenishable",
  });
  const capitalizableController = useController({
    control,
    name: "capitalizable",
  });
  const periodController = useController({
    control,
    name: "period",
  });

  const { field } = control;

  return (
    <>
      <Form
        layout="vertical"
        id={id}
        onFinish={handleSubmit((value) => console.log(value))}
      >
        <input type="submit" hidden />
        <NumberField controller={amountController} label="Сумма вклада" />
      </Form>
    </>
  );
};
