import { render, screen } from "@testing-library/react"
import Skills from "./skills"

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JavaScript", "React"]
  test("renders correctly", () => {
    render(<Skills skills={skills} />)
    const listElement = screen.getByRole("list")
    expect(listElement).toBeInTheDocument()
  })

  test("renders a list of skills", () => {
    render(<Skills skills={skills} />)
    const listItemelements = screen.getAllByRole("listitem")
    expect(listItemelements).toHaveLength(skills.length)
  })
})
