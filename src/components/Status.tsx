import Heading from "./Heading"
import Oscar from "./Oscar"

type StatusProps = {
    status: "loading" | "success" | "error"
}
const Status = (props: StatusProps) => {
    let message
    if (props.status === 'loading') {
        message = 'Loading...'
    } else if (props.status === 'success') {
        message = 'Data fetched successfully!'
    } else if (props.status === 'error') {
        message = 'Error fetching data'
    }
  return (
    <div>
        <h2>Status- {message}</h2>
        <Heading>Placeholder text</Heading>
        <Oscar>
            <Heading>Oscar goes to Church on Sunday</Heading>
        </Oscar>
    </div>
  )
}

export default Status