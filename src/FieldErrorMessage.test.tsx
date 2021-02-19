import { fireEvent, render, screen } from "@testing-library/react"
import { Formik } from "formik"
import * as React from "react"
import { FieldControl } from "./FieldControl"
import { FieldErrorMessage } from "./FieldErrorMessage"
import { InputFormik } from "./Input"

test("displays the field's error message when touched", () => {
  render(
    <Formik
      initialValues={{ name: "" }}
      onSubmit={jest.fn()}
      initialErrors={{ name: "Name is required" }}
    >
      <FieldControl name="name">
        <InputFormik />
        <FieldErrorMessage />
      </FieldControl>
    </Formik>,
  )

  expect(screen.queryByText("Name is required")).not.toBeInTheDocument()
  fireEvent.blur(screen.getByRole("textbox"))
  expect(screen.getByText("Name is required")).toBeInTheDocument()
})
