# Chakra+Formik Integration Experiment

## What is this?

This project is a prototype for a Chakra UI+Formik integration library.

The goals of this project:

- provide an API that is familiar to both Chakra UI and Formik users
- experiment with and establish patterns that can eventually be turned into an
  official Chakra UI extension library

**As this is a pre-`1.0` experiment, the API is subject to change.**

## Demo

Check out this CodeSandbox for a demonstration of the components in action:
https://codesandbox.io/s/interesting-blackburn-oldox?file=/src/App.tsx

## Installation

Install [Chakra UI](https://chakra-ui.com/docs/getting-started) and
[Formik](https://formik.org/docs/overview#npm), then:

```sh
# with yarn
yarn add chakra-formik-experiment

# with npm
npm install chakra-formik-experiment
```

## Usage

`chakra-formik-experiment` works by connecting Chakra form components to a
Formik form's context using the `name` prop.

The `name` prop can be passed directly to the library's form components or
provided to them by the `FieldControl` component.

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

## Components

### `CheckboxFormik`

The `CheckboxFormik` component is Chakra's `Checkbox` component except it's
automatically connected to Formik via the `name` prop.

```tsx
import * as React from "react"
import { Formik } from "formik"
import { CheckboxFormik } from "chakra-formik-experiment"

const CheckboxFormikExample = () => (
  <Formik initialValues={{ checkbox: true }} onSubmit={console.log}>
    <CheckboxFormik name="checkbox" />
  </Formik>
)
```

### `CheckboxGroupFormik`

The `CheckboxGroupFormik` component is Chakra's `CheckboxGroup` component except
it's automatically connected to Formik via the `name` prop.

**Note**: Use the regular Chakra `Checkbox` component within
`CheckboxGroupFormik`. We could eventually make `CheckboxFormik` work with it.

```tsx
import * as React from "react"
import { Formik } from "formik"
import { Checkbox } from "@chakra-ui/react"
import { CheckboxGroupFormik } from "chakra-formik-experiment"

const CheckboxGroupFormikExample = () => (
  <Formik initialValues={{ radio: "A" }} onSubmit={console.log}>
    <CheckboxGroupFormik name="radio">
      <Checkbox value="A">A</Checkbox>
      <Checkbox value="B">B</Checkbox>
    </CheckboxGroupFormik>
  </Formik>
)
```

### `InputFormik`

The `InputFormik` component is Chakra's `Input` component except it's
automatically connected to Formik via the `name` prop.

```tsx
import * as React from "react"
import { Formik } from "formik"
import { InputFormik } from "chakra-formik-experiment"

const InputFormikExample = () => (
  <Formik initialValues={{ name: "name" }} onSubmit={console.log}>
    <InputFormik name="name" />
  </Formik>
)
```

### `RadioFormik`

The `RadioFormik` component is Chakra's `Radio` component except it's
automatically connected to Formik via the `name` prop.

```tsx
import * as React from "react"
import { Formik } from "formik"
import { RadioFormik } from "chakra-formik-experiment"

const RadioFormikExample = () => (
  <Formik initialValues={{ radio: "A" }} onSubmit={console.log}>
    <RadioFormik name="radio" value="A">
      A
    </RadioFormik>
    <RadioFormik name="radio" value="B">
      B
    </RadioFormik>
  </Formik>
)
```

### `RadioGroupFormik`

The `RadioGroupFormik` component is Chakra's `RadioGroup` component except it's
automatically connected to Formik via the `name` prop.

**Note**: Use the regular Chakra `Radio` component within `RadioGroupFormik`. We
could eventually make `RadioFormik` work with it.

```tsx
import * as React from "react"
import { Formik } from "formik"
import { Radio } from "@chakra-ui/react"
import { RadioGroupFormik } from "chakra-formik-experiment"

const RadioGroupFormikExample = () => (
  <Formik initialValues={{ radio: "A" }} onSubmit={console.log}>
    <RadioGroupFormik name="radio">
      <Radio value="A">A</Radio>
      <Radio value="B">B</Radio>
    </RadioGroupFormik>
  </Formik>
)
```

### `SelectFormik`

The `SelectFormik` component is Chakra's `Select` component except it's
automatically connected to Formik via the `name` prop.

```tsx
import * as React from "react"
import { Formik } from "formik"
import { SelectFormik } from "chakra-formik-experiment"

const SelectFormikExample = () => (
  <Formik initialValues={{ item: "A" }} onSubmit={console.log}>
    <SelectFormik name="item">
      <option value="A">A</option>
      <option value="B">B</option>
    </SelectFormik>
  </Formik>
)
```

### `EditableFormik`

The `EditableFormik` component is Chakra's `Editable` component except it's
automatically connected to Formik via the `name` prop.

```tsx
import * as React from "react"
import { Formik } from "formik"
import { EditableFormik } from "chakra-formik-experiment"
import { EditablePreview, EditableInput } from "@chakra-ui/react"

const EditableFormikExample = () => (
  <Formik initialValues={{ name: "Kenichi" }} onSubmit={console.log}>
    <EditableFormik name="name">
      <EditablePreview />
      <EditableInput />
    </EditableFormik>
  </Formik>
)
```

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

### `FieldErrorMessage`

The `FieldErrorMessage` component works similarly to the Chakra
`FormErrorMessage` component, except it is automatically connected to the
`touched` and `error` state of the field, meaning that if the field has been
touched and has a validation error, that error message will be displayed.

```tsx
const FieldErrorMessageExample = () => (
  <FieldControl name="name">
    <InputFormik />
    <FieldErrorMessage />
  </FieldControl>
)
```

**Note**: This behavior will not occur if an `isInvalid` prop is passed to
`FieldControl`.

```tsx
// in this example, the error message is never displayed because
// `isInvalid={false}` is passed to `FieldControl`
const Example = () => (
  <FieldControl name="name" isInvalid={false}>
    <InputFormik />
    <FieldErrorMessage />
  </FieldControl>
)
```

### `NumberInputFormik`

The `NumberInputFormik` component is Chakra's `NumberInput` component except
it's automatically connected to Formik via the `name` prop. The value is
formatted as a number when the form is submitted.

```tsx
import * as React from "react"
import { Formik } from "formik"
import { NumberInputFormik } from "chakra-formik-experiment"

const NumberInputFormikExample = () => (
  <Formik initialValues={{ number: 123 }} onSubmit={console.log}>
    <NumberInputFormik name="number">
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInputForm>
  </Formik>
)
```

### `SwitchFormik`

The `SwitchFormik` component is Chakra's `Switch` component except it's
automatically connected to Formik via the `name` prop. The value is formatted as
a number when the form is submitted.

```tsx
import * as React from "react"
import { Formik } from "formik"
import { SwitchFormik } from "chakra-formik-experiment"

const SwitchFormikExample = () => (
  <Formik initialValues={{ switch: true }} onSubmit={console.log}>
    <SwitchFormik name="switch" />
  </Formik>
)
```

### `TextareaFormik`

The `TextareaFormik` component is Chakra's `Textarea` component except it's
automatically connected to Formik via the `name` prop.

```tsx
import * as React from "react"
import { Formik } from "formik"
import { TextareaFormik } from "chakra-formik-experiment"

const TextareaFormikExample = () => (
  <Formik initialValues={{ name: "name" }} onSubmit={console.log}>
    <TextareaFormik name="name" />
  </Formik>
)
```

## Integration Checklist

- [x] `Checkbox` (`CheckboxFormik`)
- [x] `CheckboxGroup` (`CheckboxGroupFormik`)
- [x] `Editable` (`EditableFormik`)
- [x] `FormControl` (`FieldControl`)
- [x] `FormErrorMessage` (`FieldErrorMessage`)
- [x] `Input` (`InputFormik`)
- [x] `NumberInput` (`NumberInputFormik`)
- [x] `Radio` (`RadioFormik`)
- [x] `RadioGroup`
- [x] `Select` (`SelectFormik`)
- [ ] `Slider`
- [x] `Switch` (`SwitchFormik`)
- [x] `Textarea` (`TextAreaFormik`)
