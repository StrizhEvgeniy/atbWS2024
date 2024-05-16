import {
  FieldValues,
  UseFormProps,
  UseFormReturn,
} from "react-hook-form/dist/types";
import { ControllerFieldState, useForm, useFormContext } from "react-hook-form";
import { FormItemProps } from "antd";

export const getFormItemPropsFromControllerFieldState = ({
  error,
}: ControllerFieldState):
  | Pick<FormItemProps, "validateStatus" | "help">
  | undefined => {
  if (error === undefined) return;
  const { message } = error;
  return {
    help: message,
    validateStatus: "error" as const,
  };
};

export type UseConfiguredFormReturn<
  Shape extends FieldValues,
  Values extends FieldValues = Shape,
  Context = unknown
> = UseFormReturn<Shape, Context, Values>;

export const useConfiguredForm = <
  Shape extends FieldValues,
  Values extends FieldValues = Shape,
  Context = unknown
>(
  props?: UseFormProps<Shape>
): UseConfiguredFormReturn<Shape, Values, Context> =>
  useForm<Shape, Context, Values>(props);

export const useConfiguredFormContext = <
  Shape extends FieldValues,
  Values extends FieldValues = Shape,
  Context = unknown
>(): UseConfiguredFormReturn<Shape, Values, Context> =>
  useFormContext<Shape, Context, Values>();
