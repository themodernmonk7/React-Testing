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

  test("renders Login button", () => {
    render(<Skills skills={skills} />)
    const loginButton = screen.getByRole("button", { name: "Login" })
    expect(loginButton).toBeInTheDocument()
  })

  test("Start learning button is not rendered", () => {
    render(<Skills skills={skills} />)
    const startLearningButton = screen.queryByRole("button", {
      name: "Start Learning",
    })
    expect(startLearningButton).not.toBeInTheDocument()
  })

  test("Start learning button is eventually displayed", async () => {
    render(<Skills skills={skills} />)
    const strartLearningButton = await screen.findByRole(
      "button",
      {
        name: "Start Learning",
      },
      { timeout: 2000 }
    )
    expect(strartLearningButton).toBeInTheDocument()
  })
  
})
