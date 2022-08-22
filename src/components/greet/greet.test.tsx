/**
 * Greet should render the text hello and if a name is passed into the component
 * it should render hello followed by the name
 */

import { render, screen } from "@testing-library/react"
import Greet from "./greet"

test("Greet renders correctly", () => {
  render(<Greet />)
  const textElement = screen.getByText("Hello")
  expect(textElement).toBeInTheDocument
})

// Run all test
// Run test only in changed files
// Run test by file name
// Run test by test name
// test.only and test.skip for filter test (specific test)
test.only("Greet renders with a name", () => {
  render(<Greet name="Saurav" />)
  const textElement = screen.getByText("Hello Saurav")
  expect(textElement).toBeInTheDocument()
})
