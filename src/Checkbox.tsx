import * as React from "react"
import { Checkbox, CheckboxProps } from "@chakra-ui/react"
import { useField } from "formik"
import { ChakraFieldProps } from "./types"
import { useChakraFieldProps } from "./useChakraFieldProps"

export interface CheckboxFormikProps extends ChakraFieldProps<CheckboxProps> {}

/** `CheckboxFormik` connects Chakra's `Checkbox` component as a Formik field. */
export const CheckboxFormik = (props: CheckboxFormikProps) => {
  const { name } = useChakraFieldProps(props)
  const [{ checked, ...field }] = useField({ name, type: "checkbox" })

  return <Checkbox isChecked={checked} {...props} {...field} />
}
