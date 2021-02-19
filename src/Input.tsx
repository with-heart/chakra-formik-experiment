import * as React from "react"
import { Input, InputProps } from "@chakra-ui/react"
import { useField } from "formik"
import { useFieldControlContext } from "./FieldControl"
import { ChakraFieldProps } from "./types"

export type InputFormikProps = ChakraFieldProps<InputProps>

/** `InputFormik` connects Chakra's `Input` component as a Formik field. */
export const InputFormik = (props: InputFormikProps) => {
  const controlContext = useFieldControlContext()
  const [field] = useField(props.name ?? controlContext?.name)

  return <Input {...field} {...props} />
}
