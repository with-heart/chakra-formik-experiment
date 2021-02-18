import * as React from "react"
import { render, RenderOptions } from "@testing-library/react"
import { ChakraProvider } from "@chakra-ui/react"

const ChakraWrapper = ({ children }: { children?: React.ReactNode }) => (
  <ChakraProvider>{children}</ChakraProvider>
)

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "queries">,
) => render(ui, { wrapper: ChakraWrapper, ...options })

export * from "@testing-library/react"

export { customRender as render }
