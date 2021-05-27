import * as React from "react"
import { Textarea, TextareaProps } from "@chakra-ui/react"
import { useField } from "formik"
import { ChakraFieldProps } from "./types"
import { useChakraFieldProps } from "./useChakraFieldProps"

export type TextareaFormikProps = ChakraFieldProps<TextareaProps>

/**
 * `TextareaFormik` connects Chakra's `Textarea` component as a Formik field.
 */
export const TextareaFormik = (props: TextareaFormikProps) => {
  const { name } = useChakraFieldProps(props)
  const [field] = useField(name)

  return <Textarea {...props} {...field} />
}
