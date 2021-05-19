import * as React from "react"
import { Form, Formik } from "formik"
import { SwitchFormik } from "./Switch"
import { render, screen, userEvent } from "./test-utils"
import { fireEvent, waitFor } from "@testing-library/react"
import { FieldControl } from "./FieldControl"

const onSubmit = jest.fn()

test("uses value from Formik", async () => {
  render(
    <Formik initialValues={{ switch: true }} onSubmit={onSubmit}>
      <Form aria-label="form">
        <SwitchFormik name="switch" />
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
      { switch: false },
      expect.any(Object),
    ),
  )
})

test("works with FieldControl", () => {
  render(
    <Formik initialValues={{ switch: true }} onSubmit={onSubmit}>
      <Form aria-label="form">
        <FieldControl name="switch">
          <SwitchFormik />
        </FieldControl>
      </Form>
    </Formik>,
  )

  expect(screen.getByRole("checkbox")).toBeChecked()
})
