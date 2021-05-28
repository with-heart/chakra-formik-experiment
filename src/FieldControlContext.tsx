import { createContext, useContext } from "react"

export interface FieldControlContext {
  /** The name of the `Field`. Used to connect the form element to Formik. */
  name: string
}

const FieldControlContext = createContext<FieldControlContext | undefined>(
  undefined,
)

export const FieldControlProvider = FieldControlContext.Provider

export function useFieldControlContext() {
  const context = useContext(FieldControlContext)

  if (!context) {
    const error = new Error(
      "useFieldControlContext: `context` is undefined. It seems you forgot to wrap components within the `FieldControlProvider`.",
    )
    error.name = "ContextError"
    Error.captureStackTrace?.(error, useFieldControlContext)
    throw error
  }

  return context
}
