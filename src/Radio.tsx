import * as React from "react"
import { Radio, RadioProps } from "@chakra-ui/react"
import { useField } from "formik"
import { ChakraFieldProps } from "./types"
import { useChakraFieldProps } from "./useChakraFieldProps"

export type RadioFormikProps = ChakraFieldProps<RadioProps>

/** `RadioFormik` connects Chakra's `Radio` component as a Formik field. */
export const RadioFormik = (props: RadioFormikProps) => {
  const { name } = useChakraFieldProps(props)
  const [{ checked, ...field }] = useField({
    name,
    type: "radio",
    value: props.value,
  })

  return <Radio isChecked={checked} {...field} {...props} />
}
