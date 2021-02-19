import * as React from "react"
import { Form, Formik } from "formik"
import { CheckboxFormik } from "./Checkbox"
import { render, screen, userEvent } from "./test-utils"
import { fireEvent, waitFor } from "@testing-library/react"
import { FieldControl } from "./FieldControl"

const onSubmit = jest.fn()

test("uses value from Formik", async () => {
  render(
    <Formik initialValues={{ checkbox: true }} onSubmit={onSubmit}>
      <Form aria-label="form">
        <CheckboxFormik name="checkbox" />
      </Form>
    </Formik>,
  )

  const checkbox = screen.getByRole("checkbox")

  expect(checkbox).toBeChecked()
  userEvent.click(checkbox)
  expect(checkbox).not.toBeChecked()

  fireEvent.submit(screen.getByRole("form"))

  await waitFor(() =>
    expect(onSubmit).toHaveBeenCalledWith(
      { checkbox: false },
      expect.any(Object),
    ),
  )
})

test("works with FieldControl", () => {
  render(
    <Formik initialValues={{ checkbox: true }} onSubmit={onSubmit}>
      <Form aria-label="form">
        <FieldControl name="checkbox">
          <CheckboxFormik />
        </FieldControl>
      </Form>
    </Formik>,
  )

  expect(screen.getByRole("checkbox")).toBeChecked()
})
