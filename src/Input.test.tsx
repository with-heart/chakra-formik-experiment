import * as React from "react"
import { Form, Formik } from "formik"
import { render, screen, userEvent } from "./test-utils"
import { InputFormik } from "./Input"
import { fireEvent, waitFor } from "@testing-library/react"
import { FieldControl } from "./FieldControl"

const onSubmit = jest.fn()

test("uses value from Formik", async () => {
  render(
    <Formik initialValues={{ name: "name" }} onSubmit={onSubmit}>
      <Form aria-label="form">
        <InputFormik name="name" />
      </Form>
    </Formik>,
  )

  const input = screen.getByRole("textbox")

  expect(input).toHaveValue("name")
  userEvent.type(input, "123")
  expect(input).toHaveValue("name123")

  fireEvent.submit(screen.getByRole("form"))

  await waitFor(() =>
    expect(onSubmit).toHaveBeenCalledWith(
      { name: "name123" },
      expect.any(Object),
    ),
  )
})

test("works with FieldControl", () => {
  render(
    <Formik initialValues={{ name: "name" }} onSubmit={onSubmit}>
      <Form aria-label="form">
        <FieldControl name="name">
          <InputFormik />
        </FieldControl>
      </Form>
    </Formik>,
  )

  expect(screen.getByRole("textbox")).toHaveValue("name")
})
