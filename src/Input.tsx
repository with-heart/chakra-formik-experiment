import * as React from "react"
import { Input, InputProps } from "@chakra-ui/react"
import { useField } from "formik"
import { useFieldControlContext } from "./FieldControl"

export type InputFormikProps = Omit<InputProps, "name"> & {
  /** The name of the `Field`. Used to connect the form element to Formik. */
  name?: string
}

/** `InputFormik` connects Chakra's `Input` component as a Formik field. */
export const InputFormik = (props: InputFormikProps) => {
  const controlContext = useFieldControlContext()
  const [field] = useField(props.name ?? controlContext?.name)

  return <Input {...field} {...props} />
}
