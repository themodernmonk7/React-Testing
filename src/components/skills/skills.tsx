import { useEffect, useState } from "react"
import { SkillsProps } from "./skills.types"

const Skills = (props: SkillsProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const { skills } = props

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true)
    }, 1000)
  }, [])

  return (
    <>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}> {skill}</li>
        })}
      </ul>
      {isLoggedIn ? (
        <button>Start Learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Login</button>
      )}
    </>
  )
}

export default Skills
