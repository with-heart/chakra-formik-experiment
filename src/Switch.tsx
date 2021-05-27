import * as React from "react"
import { Switch, SwitchProps } from "@chakra-ui/react"
import { useField } from "formik"
import { ChakraFieldProps } from "./types"
import { useChakraFieldProps } from "./useChakraFieldProps"

export type SwitchFormikProps = ChakraFieldProps<SwitchProps>

/** `SwitchFormik` connects Chakra's `Switch` component as a Formik field. */
export const SwitchFormik = (props: SwitchFormikProps) => {
  const { name } = useChakraFieldProps(props)
  const [{ checked, ...field }] = useField({ name, type: "checkbox" })

  return <Switch isChecked={checked} {...props} {...field} />
}
