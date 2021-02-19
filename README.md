# Chakra+Formik Integration Experiment

## What is this?

This project is a prototype for a Chakra UI+Formik integration library. The goal
of this project is to experiment with and establish patterns that can eventually
be turned into an official Chakra UI extension library.

The goal of this library is to provide an API that is familiar to both Chakra UI
and Formik users.

## Usage

### As individual fields

```tsx
import * as React from "react"
import { Formik } from "formik"
import { InputFormik } from "chakra-formik-experiment"

const Example = () => (
  <Formik>
    <InputFormik id="name" name="name" placeholder="Enter your name" />
  </Formik>
)
```

### With `FieldControl`

`FieldControl` provides the same behavior as Chakra's `FormControl`, but
automatically connects wrapped form elements and `FieldErrorMessage` components
with Formik via the `name` prop.

```tsx
import * as React from "react"
import { Formik } from "formik"
import { FormLabel } from "@chakra-ui/react"
import { FieldControl, FieldErrorMessage, InputFormik } from "chakra-formik-experiment"

const Example = () => (
  <FieldErrorMessage id="name" name="name">
    <FormLabel>Name</FormLabel>
    <InputFormik />
    <FieldErrorMessage />
  </FormControl>
)
```

## Components

### `FieldControl`

The `FieldControl` component has the same API and behavior as `FormControl`,
except that the `name` prop is used to connect the form element(s) to Formik.
This allows you to provide the same accessible form element experience you get
from `FormControl`, with the added benefit that form elements and
`FieldErrorMessage` are automatically associated with a Formik field.

```tsx
import * as React from "react"
import { Formik } from "formik"
import { FormLabel } from "@chakra-ui/react"
import {
  FieldControl,
  FieldErrorMessage,
  InputFormik,
} from "chakra-formik-experiment"

const Example = () => (
  <FieldControl id="name" name="name">
    <FormLabel>Name</FormLabel>
    <InputFormik />
    <FieldErrorMessage />
  </FieldControl>
)
```

**Note**: If a prop exists on both the `FieldControl` and the form element
component, the prop of the component will be used.

```tsx
// in this example, the input is connected to Formik as `"component"`
const Example = () => (
  <FieldControl name="control">
    <InputFormik name="component">
  </FieldControl>
)
```

## Integration Checklist

- [ ] `Checkbox`
- [ ] `CheckboxGroup`
- [ ] `Editable`
- [x] `FormControl` (`FieldControl`)
- [ ] `FormErrorMessage`
- [ ] `Input`
- [ ] `NumberInput`
- [ ] `Radio`
- [ ] `RadioGroup`
- [ ] `Select`
- [ ] `Slider`
- [ ] `Switch`
- [ ] `Textarea`
