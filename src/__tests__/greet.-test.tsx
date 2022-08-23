/**
 * Greet should render the text hello and if a name is passed into the component
 * it should render hello followed by the name
 */

import { render, screen } from "@testing-library/react"
import Greet from "../components/greet/greet"

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />)
    const textElement = screen.getByText("Hello")
    expect(textElement).toBeInTheDocument
  })
})

describe("Nested", () => {
  test("renders with a name", () => {
    render(<Greet name="Saurav" />)
    const textElement = screen.getByText("Hello Saurav")
    expect(textElement).toBeInTheDocument()
  })
})
