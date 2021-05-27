import * as React from "react"
import { Input, InputProps } from "@chakra-ui/react"
import { useField } from "formik"
import { ChakraFieldProps } from "./types"
import { useChakraFieldProps } from "./useChakraFieldProps"

export type InputFormikProps = ChakraFieldProps<InputProps>

/** `InputFormik` connects Chakra's `Input` component as a Formik field. */
export const InputFormik = (props: InputFormikProps) => {
  const { name } = useChakraFieldProps(props)
  const [field] = useField(name)

  return <Input {...props} {...field} />
}
