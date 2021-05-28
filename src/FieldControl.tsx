import * as React from "react"
import { FormControl, FormControlProps } from "@chakra-ui/react"
import { useField } from "formik"
import {
  FieldControlContext,
  FieldControlProvider,
} from "./FieldControlContext"

export type FieldControlProps = Omit<FormControlProps, "name"> &
  FieldControlContext

/**
 * `FieldControl` provides context for the `name` value for field form
 * elements while also rendering `FormControl`, allowing form elements to be
 * connected to Formik while being managed similar to `FormControl`.
 *
 * @example
 * // The `input` and error message are connected to Formik using `name`,
 * // while also handling standard `FormControl` behavior like associating
 * // elements using `id` and setting `isRequired`
 * <FieldControl name="name" id="name" isRequired>
 *   <FormLabel>Name</FormLabel>
 *   <InputFormik />
 *   <FieldErrorMessage />
 * </FieldControl>
 */
export const FieldControl = ({
  name,
  ...formControlProps
}: FieldControlProps) => {
  const [, meta] = useField(name)
  const isInvalid = formControlProps.isInvalid ?? !!(meta.touched && meta.error)

  return (
    <FieldControlProvider value={{ name }}>
      <FormControl {...formControlProps} isInvalid={isInvalid} />
    </FieldControlProvider>
  )
}
