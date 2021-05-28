import * as React from "react"
import { Editable, EditableProps } from "@chakra-ui/react"
import { useField } from "formik"
import { ChakraFieldProps } from "./types"
import { useChakraFieldProps } from "./useChakraFieldProps"

export interface EditableFormikProps extends ChakraFieldProps<EditableProps> {}

/**
 * `EditableFormik` connects Chakra's `Editable` component as a Formik field.
 */
export const EditableFormik = (props: EditableFormikProps) => {
  const { name } = useChakraFieldProps(props)
  const [field, , { setValue }] = useField(name)

  const onChange = React.useCallback(
    (value: string) => {
      setValue(value)
    },
    [setValue],
  )

  const onBlur = React.useCallback(() => {
    field.onBlur(name)
  }, [field, name])

  return <Editable {...props} {...field} onBlur={onBlur} onChange={onChange} />
}
