import * as React from "react"
import { RadioGroup, RadioGroupProps } from "@chakra-ui/react"
import { useField } from "formik"
import { ChakraFieldProps } from "./types"
import { useChakraFieldProps } from "./useChakraFieldProps"

export type RadioGroupFormikProps = ChakraFieldProps<RadioGroupProps>

/** `RadioGroupFormik` connects Chakra's `RadioGroup` component as a Formik field. */
export const RadioGroupFormik = (props: RadioGroupFormikProps) => {
  const { name } = useChakraFieldProps(props)
  const [field, , { setValue }] = useField({
    name,
    value: props.value,
  })

  return <RadioGroup {...field} {...props} onChange={setValue} />
}
