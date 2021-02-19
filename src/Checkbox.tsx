import * as React from "react"
import { Checkbox, CheckboxProps } from "@chakra-ui/react"
import { useField } from "formik"
import { useFieldControlContext } from "./FieldControl"

export type CheckboxFormikProps = Omit<CheckboxProps, "name"> & {
  /** The name of the `Field`. Used to connect the form element to Formik. */
  name?: string
}

/** `CheckboxFormik` connects Chakra's `Checkbox` component as a Formik field. */
export const CheckboxFormik = (props: CheckboxFormikProps) => {
  const controlContext = useFieldControlContext()

  // if the `name` prop was passed directly to `CheckboxFormik`, we'll use that
  // as the name of the `Field`. Otherwise, we'll use the `name` value from the
  // surrounding `FieldControl` (if it exists).
  const name = props.name ?? controlContext?.name

  // we'll use the return value of `useField` to connect `Checkbox` to Formik
  const [{ checked, ...field }] = useField({ name, type: "checkbox" })

  return <Checkbox isChecked={checked} {...field} {...props} />
}
