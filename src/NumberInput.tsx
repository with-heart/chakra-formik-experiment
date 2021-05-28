import * as React from "react"
import { NumberInput, NumberInputProps } from "@chakra-ui/react"
import { useField } from "formik"
import { ChakraFieldProps } from "./types"
import { useChakraFieldProps } from "./useChakraFieldProps"

export interface NumberInputFormikProps
  extends ChakraFieldProps<NumberInputProps> {}

/**
 * `NumberInputFormik` connects Chakra's `Input` component as a Formik field.
 */
export const NumberInputFormik = (props: NumberInputFormikProps) => {
  const { name } = useChakraFieldProps(props)
  const [field, , { setValue }] = useField(name)

  const onChange = (_valueAsString: string, valueAsNumber: number) => {
    setValue(valueAsNumber)
  }

  return <NumberInput {...field} onChange={onChange} {...props} />
}
