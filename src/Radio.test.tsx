import * as React from "react"
import { Form, Formik } from "formik"
import { RadioFormik } from "./Radio"
import { render, screen, userEvent } from "./test-utils"
import { fireEvent, waitFor } from "@testing-library/react"
import { FieldControl } from "./FieldControl"

const onSubmit = jest.fn()

test("uses value from Formik", async () => {
  render(
    <Formik initialValues={{ radio: "A" }} onSubmit={onSubmit}>
      <Form aria-label="form">
        <RadioFormik name="radio" value="A">
          A
        </RadioFormik>
        <RadioFormik name="radio" value="B">
          B
        </RadioFormik>
      </Form>
    </Formik>,
  )

  const a = screen.getByRole("radio", { name: "A" })
  const b = screen.getByRole("radio", { name: "B" })

  expect(a).toBeChecked()
  userEvent.click(b)
  expect(b).toBeChecked()
  expect(a).not.toBeChecked()

  fireEvent.submit(screen.getByRole("form"))

  await waitFor(() =>
    expect(onSubmit).toHaveBeenCalledWith({ radio: "B" }, expect.any(Object)),
  )
})

test("works with FieldControl", () => {
  render(
    <Formik initialValues={{ radio: "B" }} onSubmit={onSubmit}>
      <Form aria-label="form">
        <FieldControl name="radio">
          <RadioFormik value="A">A</RadioFormik>
          <RadioFormik value="B">B</RadioFormik>
        </FieldControl>
      </Form>
    </Formik>,
  )

  expect(screen.getByRole("radio", { name: "B" })).toBeChecked()
})
