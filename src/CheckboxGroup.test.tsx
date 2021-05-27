import * as React from "react"
import { Form, Formik } from "formik"
import { Checkbox } from "@chakra-ui/react"
import { render, screen, userEvent } from "./test-utils"
import { fireEvent, waitFor } from "@testing-library/react"
import { FieldControl } from "./FieldControl"
import { CheckboxGroupFormik } from "./CheckboxGroup"

const onSubmit = jest.fn()

test("uses value from Formik", async () => {
  render(
    <Formik initialValues={{ checkbox: "A" }} onSubmit={onSubmit}>
      <Form aria-label="form">
        <CheckboxGroupFormik name="checkbox">
          <Checkbox value="A">A</Checkbox>
          <Checkbox value="B">B</Checkbox>
        </CheckboxGroupFormik>
      </Form>
    </Formik>,
  )

  const a = screen.getByRole("checkbox", { name: "A" })
  const b = screen.getByRole("checkbox", { name: "B" })

  expect(a).toBeChecked()
  expect(b).not.toBeChecked()
  userEvent.click(b)
  expect(a).toBeChecked()
  expect(b).toBeChecked()

  fireEvent.submit(screen.getByRole("form"))

  await waitFor(() =>
    expect(onSubmit).toHaveBeenCalledWith(
      { checkbox: ["A", "B"] },
      expect.any(Object),
    ),
  )
})

test("works with FieldControl", () => {
  render(
    <Formik initialValues={{ checkbox: "A" }} onSubmit={onSubmit}>
      <Form aria-label="form">
        <FieldControl name="checkbox">
          <CheckboxGroupFormik>
            <Checkbox value="A">A</Checkbox>
            <Checkbox value="B">B</Checkbox>
          </CheckboxGroupFormik>
        </FieldControl>
      </Form>
    </Formik>,
  )

  expect(screen.getByRole("checkbox", { name: "A" })).toBeChecked()
})
