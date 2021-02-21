import * as React from "react"
import { Form, Formik } from "formik"
import { render, screen, userEvent } from "./test-utils"
import { SelectFormik } from "./Select"
import { fireEvent, waitFor } from "@testing-library/react"
import { FieldControl } from "./FieldControl"

const onSubmit = jest.fn()

test("uses value from Formik", async () => {
  render(
    <Formik initialValues={{ item: "A" }} onSubmit={onSubmit}>
      <Form aria-label="form">
        <SelectFormik name="item">
          <option value="A">A</option>
          <option value="B">B</option>
        </SelectFormik>
      </Form>
    </Formik>,
  )

  const select = screen.getByRole("combobox")

  expect(select).toHaveValue("A")
  userEvent.selectOptions(select, "B")
  expect(select).toHaveValue("B")

  fireEvent.submit(screen.getByRole("form"))

  await waitFor(() =>
    expect(onSubmit).toHaveBeenCalledWith({ item: "B" }, expect.any(Object)),
  )
})

test("works with FieldControl", () => {
  render(
    <Formik initialValues={{ item: "B" }} onSubmit={onSubmit}>
      <Form aria-label="form">
        <FieldControl name="item">
          <SelectFormik>
            <option value="A">A</option>
            <option value="B">B</option>
          </SelectFormik>
        </FieldControl>
      </Form>
    </Formik>,
  )

  expect(screen.getByRole("combobox")).toHaveValue("B")
})
