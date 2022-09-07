import { SkillsProps } from "./skills.types"

const Skills = (props: SkillsProps) => {
  const { skills } = props
  return (
    <>
      {skills.map((skill) => {
        return <li key={skill}> {skill}</li>
      })}
    </>
  )
}

export default Skills
