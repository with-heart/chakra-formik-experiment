import { FormErrorMessage, FormErrorMessageProps } from "@chakra-ui/react"
import { ErrorMessage } from "formik"
import * as React from "react"
import { useFieldControlContext } from "./FieldControl"

export type FieldErrorMessageProps = FormErrorMessageProps

export const FieldErrorMessage = (props: FieldErrorMessageProps) => {
  const { name } = useFieldControlContext()
  return (
    <FormErrorMessage {...props}>
      <ErrorMessage name={name} />
    </FormErrorMessage>
  )
}
