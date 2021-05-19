import * as React from "react"
import { Form, Formik } from "formik"
import { render, screen, userEvent } from "./test-utils"
import { NumberInputFormik } from "./NumberInput"
import { fireEvent, waitFor } from "@testing-library/react"
import { FieldControl } from "./FieldControl"
import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react"

const onSubmit = jest.fn()

test("uses value from Formik", async () => {
  render(
    <Formik initialValues={{ value: 123 }} onSubmit={onSubmit}>
      <Form aria-label="form">
        <NumberInputFormik name="value">
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInputFormik>
      </Form>
    </Formik>,
  )

  const input = screen.getByRole("spinbutton")

  expect(input).toHaveValue("123")
  userEvent.type(input, "456")
  expect(input).toHaveValue("123456")

  fireEvent.submit(screen.getByRole("form"))

  await waitFor(() =>
    expect(onSubmit).toHaveBeenCalledWith(
      { value: 123456 },
      expect.any(Object),
    ),
  )
})

test("works with FieldControl", () => {
  render(
    <Formik initialValues={{ value: 123 }} onSubmit={onSubmit}>
      <Form aria-label="form">
        <FieldControl name="value">
          <NumberInputFormik>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInputFormik>
        </FieldControl>
      </Form>
    </Formik>,
  )

  expect(screen.getByRole("spinbutton")).toHaveValue("123")
})
