import * as React from "react"
import { renderHook } from "@testing-library/react-hooks"
import { useChakraFieldProps } from "./useChakraFieldProps"
import { FieldControl } from "./FieldControl"
import { Formik } from "formik"

const FormikWrapper = ({ children }: { children: React.ReactNode }) => (
  <Formik initialValues={{ prop: "", control: "" }} onSubmit={jest.fn()}>
    {children}
  </Formik>
)

const FieldControlWrapper = ({ children }: { children: React.ReactNode }) => (
  <FormikWrapper>
    <FieldControl name="control">{children}</FieldControl>
  </FormikWrapper>
)

test("uses the component's name prop if it exists", () => {
  const { result } = renderHook(() => useChakraFieldProps({ name: "prop" }), {
    wrapper: FormikWrapper,
  })
  expect(result.current.name).toEqual("prop")
})

test("uses the name value from FieldControl context if component prop doesn't exist", () => {
  const { result } = renderHook(() => useChakraFieldProps({}), {
    wrapper: FieldControlWrapper,
  })
  expect(result.current.name).toEqual("control")
})

test("prefers the component's name prop if both prop and context exist", () => {
  const { result } = renderHook(() => useChakraFieldProps({ name: "prop" }), {
    wrapper: FieldControlWrapper,
  })
  expect(result.current.name).toEqual("prop")
})

test("throws an error if `name` prop is missing from component and FieldControl context", () => {
  const { result } = renderHook(() => useChakraFieldProps({}), {
    wrapper: function Wrapper({ children }: { children: React.ReactNode }) {
      return (
        <FormikWrapper>
          {/* @ts-expect-error We're testing that the `name` prop is missing. */}
          <FieldControl>{children}</FieldControl>
        </FormikWrapper>
      )
    },
  })
  expect(result.error).not.toBeUndefined()
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  expect(result.error!.message).toMatch(/components require a `name`/)
})
