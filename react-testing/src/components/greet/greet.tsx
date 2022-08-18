type GreetProps = {
  name?: string
}

const Greet = (props: GreetProps) => {
  return <div>Hello {props.name}</div>
}

export default Greet
