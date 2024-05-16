import { FC, ReactNode, useId } from "react";

import { Form, FormItemProps, InputNumber } from "antd";
import { InputNumberProps } from "antd/es/input-number";

import clsx from "clsx";
import {
  FieldPath,
  FieldValues,
  UseControllerReturn,
} from "react-hook-form/dist/types";

import { getFormItemPropsFromControllerFieldState } from "../../lib/form";

const { Item } = Form;

export const NumberField = <T extends FieldValues, N extends FieldPath<T>>({
  controller: { field, fieldState },
  label,
  inputProps: { className, controls = false, min, ...restInputProps } = {},
  itemProps,
}: {
  controller: UseControllerReturn<T, N>;
  label: ReactNode;
  inputProps?: InputNumberProps;
  itemProps?: FormItemProps;
}): ReturnType<FC> => {
  const id = useId();

  return (
    <Item
      htmlFor={id}
      {...{
        label,
        ...itemProps,
        ...getFormItemPropsFromControllerFieldState(fieldState),
      }}
    >
      <InputNumber
        className={clsx(className)}
        {...{
          id,
          ...field,
          controls,
          min: controls ? min ?? 1 : undefined,
          ...restInputProps,
        }}
      />
    </Item>
  );
};
