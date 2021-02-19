export interface FieldProps {
  /** The name of the `Field`. Used to connect the form element to Formik. */
  name?: string
}

export type ChakraFieldProps<ChakraComponentProps> = Omit<
  ChakraComponentProps,
  "name"
> &
  FieldProps
