
type PersonListProps = {
    names: {
        firstName: string;
        lastName: string;
    }[]
}
const PersonList = (props: PersonListProps) => {
  return (
    <div>
        {
            props.names.map((name) => {
                return(
                    <h2 key={name.firstName}>{name.firstName} {name.lastName}</h2>
                )
            } )
        }
    </div>
  )
}

export default PersonList