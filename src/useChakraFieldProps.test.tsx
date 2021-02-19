import * as React from "react"
import { renderHook } from "@testing-library/react-hooks"
import { useChakraFieldProps } from "./useChakraFieldProps"
import { FieldControl } from "./FieldControl"

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <FieldControl name="control">{children}</FieldControl>
)

test("uses the component's name prop if it exists", () => {
  const { result } = renderHook(() => useChakraFieldProps({ name: "prop" }))
  expect(result.current.name).toEqual("prop")
})

test("uses the name value from FieldControl context if component prop doesn't exist", () => {
  const { result } = renderHook(() => useChakraFieldProps({}), {
    wrapper: Wrapper,
  })
  expect(result.current.name).toEqual("control")
})

test("prefers the component's name prop if both prop and context exist", () => {
  const { result } = renderHook(() => useChakraFieldProps({ name: "prop" }), {
    wrapper: Wrapper,
  })
  expect(result.current.name).toEqual("prop")
})
