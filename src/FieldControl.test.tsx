import { FormLabel, Input } from "@chakra-ui/react"
import { Field, Formik } from "formik"
import * as React from "react"
import { FieldControl, useFieldControlContext } from "./FieldControl"
import { render, screen } from "./test-utils"

const Component = () => {
  const { name } = useFieldControlContext()
  return <Field name={name} as={Input} />
}

test("connects the form element's value to Formik", () => {
  render(
    <Formik initialValues={{ name: "name" }} onSubmit={jest.fn()}>
      <FieldControl name="name">
        <Component />
      </FieldControl>
    </Formik>,
  )

  expect(screen.getByRole("textbox")).toHaveValue("name")
})

test("wraps the form element with FormControl", () => {
  render(
    <Formik initialValues={{ name: "name" }} onSubmit={jest.fn()}>
      <FieldControl id="name" isInvalid name="name">
        <FormLabel>Name</FormLabel>
        <Component />
      </FieldControl>
    </Formik>,
  )

  const input = screen.getByLabelText("Name")

  expect(input).toHaveProperty("id", "name")
  expect(input).toBeInvalid()
})
