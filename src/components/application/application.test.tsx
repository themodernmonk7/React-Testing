import { render, screen } from "@testing-library/react"
import Application from "./application"

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />)

    const pageHeading = screen.getByRole("heading", {
      // h1
      level: 1,
    })
    expect(pageHeading).toBeInTheDocument()

    const sectionHeading = screen.getByRole("heading", {
      // h2
      level: 2,
    })
    expect(sectionHeading).toBeInTheDocument()

    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    })
    expect(nameElement).toBeInTheDocument()

    const nameElement2 = screen.getByLabelText("Name", {
      selector: "input",
    })
    expect(nameElement2).toBeInTheDocument()

    const nameElement3 = screen.getByPlaceholderText("Fullname")
    expect(nameElement3).toBeInTheDocument()

    // 5. getByDisplayValue method
    const nameElement4 = screen.getByDisplayValue("Saurav")
    expect(nameElement4).toBeInTheDocument()

    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    })
    expect(bioElement).toBeInTheDocument()

    const jobLocationElement = screen.getByRole("combobox")
    expect(jobLocationElement).toBeInTheDocument()

    const termsElement = screen.getByRole("checkbox")
    expect(termsElement).toBeInTheDocument()

    const termsElement2 = screen.getByLabelText(
      "I agree to the terms and conditions."
    )
    expect(termsElement2).toBeInTheDocument()

    const submitButtonElement = screen.getByRole("button")
    expect(submitButtonElement).toBeInTheDocument()

    // 4. getByText method
    const paragraphElement = screen.getByText("All fields are mandatory.")
    expect(paragraphElement).toBeInTheDocument()

    // 6. getByAltText method
    const imageElement = screen.getByAltText("A person with a laptop")
    expect(imageElement).toBeInTheDocument()

    // 7. getByTitle method
    const closeElement = screen.getByTitle("close")
    expect(closeElement).toBeInTheDocument()
  })
})
