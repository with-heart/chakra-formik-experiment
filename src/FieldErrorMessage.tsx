import { FormErrorMessage, FormErrorMessageProps } from "@chakra-ui/react"
import { ErrorMessage } from "formik"
import * as React from "react"
import { useFieldControlContext } from "./FieldControlContext"

export interface FieldErrorMessageProps extends FormErrorMessageProps {}

export const FieldErrorMessage = (props: FieldErrorMessageProps) => {
  const context = useFieldControlContext()
  return (
    <FormErrorMessage {...props}>
      <ErrorMessage name={context?.name ?? ""} />
    </FormErrorMessage>
  )
}
