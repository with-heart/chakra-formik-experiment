import * as React from "react"
import { CheckboxGroup, CheckboxGroupProps } from "@chakra-ui/react"
import { useField } from "formik"
import { ChakraFieldProps } from "./types"
import { useChakraFieldProps } from "./useChakraFieldProps"

export interface CheckboxGroupFormikProps
  extends ChakraFieldProps<Omit<CheckboxGroupProps, "value">> {
  value?: string | string[]
}

/** `CheckboxGroupFormik` connects Chakra's `CheckboxGroup` component as a Formik field. */
export const CheckboxGroupFormik = (props: CheckboxGroupFormikProps) => {
  const { name } = useChakraFieldProps(props)
  const [field, , { setValue }] = useField({
    name,
    value: props.value,
  })

  return <CheckboxGroup {...props} {...field} onChange={setValue} />
}
