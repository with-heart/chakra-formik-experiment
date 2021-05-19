import * as React from "react"
import { Form, Formik } from "formik"
import { render, screen, userEvent } from "./test-utils"
import { EditableFormik } from "./Editable"
import { fireEvent, waitFor } from "@testing-library/react"
import { FieldControl } from "./FieldControl"
import { EditableInput, EditablePreview } from "@chakra-ui/react"

const onSubmit = jest.fn()

test("uses value from Formik", async () => {
  render(
    <Formik initialValues={{ name: "name" }} onSubmit={onSubmit}>
      <Form aria-label="form">
        <EditableFormik name="name">
          <EditablePreview data-testid="preview" />
          <EditableInput data-testid="input" />
        </EditableFormik>
      </Form>
    </Formik>,
  )

  userEvent.click(screen.getByTestId("preview"))

  const input = screen.getByRole("textbox") as HTMLInputElement

  expect(input).toHaveValue("name")
  input.setSelectionRange(3, 0)
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
          <EditableFormik>
            <EditablePreview />
            <EditableInput />
          </EditableFormik>
        </FieldControl>
      </Form>
    </Formik>,
  )

  expect(screen.getByRole("textbox", { hidden: true })).toHaveValue("name")
})
