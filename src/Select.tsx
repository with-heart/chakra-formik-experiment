import * as React from "react"
import { Select, SelectProps } from "@chakra-ui/react"
import { useField } from "formik"
import { ChakraFieldProps } from "./types"
import { useChakraFieldProps } from "./useChakraFieldProps"

export interface SelectFormikProps extends ChakraFieldProps<SelectProps> {}

/** `InputFormik` connects Chakra's `Input` component as a Formik field. */
export const SelectFormik = (props: SelectFormikProps) => {
  const { name } = useChakraFieldProps(props)
  const [field] = useField(name)

  return <Select {...props} {...field} />
}
