import { useFieldControlContext } from "./FieldControlContext"
import { ChakraFieldProps } from "./types"

/**
 * `useChakraFieldProps` conditionally selects field-related props from a
 * component's props or (if present) a wrapping `FieldControl` context. This
 * hook allows us to manage how and when a component utilizes `FieldControl`
 * props.
 *
 * @example
 * const ExampleFieldComponent = (props: {name?: string}) => {
 *   // `name` is either the `name` prop from the component or, if the `name`
 *   // prop is `undefined` and a wrapping `FieldControl` context exists, the `name`
 *   // value from that context
 *   const {name} = useChakraFieldProps(props)
 *   const [field] = useField(name)
 *   return <SomeChakraComponent {...props} {...field} />
 * }
 */
export const useChakraFieldProps = <Props extends ChakraFieldProps<unknown>>(
  props: Props,
) => {
  const controlContext = useFieldControlContext()
  const name = props.name ?? controlContext?.name

  if (!name) {
    throw new Error(
      "`chakra-formik-experiment` components require a `name`. Provide the `name` prop directly to the component or wrap the component with `FieldControl` and provide a `name` prop to it.",
    )
  }

  return { name }
}
