/**
 * Greet should render the text hello and if a name is passed into the component
 * it should render hello followed by the name
 */

import { render, screen } from "@testing-library/react"
import Greet from "./greet"

// 1. It is possible to use .only and .skip with a describe block as well.
// 2. It is possible to nest describe block
// 3. We can also add multiple describe blocks in the same file
// 4. Test Suites = A file and not an individual describe block

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />)
    const textElement = screen.getByText("Hello")
    expect(textElement).toBeInTheDocument
  })
})

describe('Nested', () => {  
  test("renders with a name", () => {
    render(<Greet name="Saurav" />)
    const textElement = screen.getByText("Hello Saurav")
    expect(textElement).toBeInTheDocument()
  })
})
