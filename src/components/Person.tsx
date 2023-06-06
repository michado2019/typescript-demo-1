type NamePros = {
  name: {
    firstName: string;
    lastName: string;
  };
};
const Person = ( props: NamePros ) => {
  return <div>
    <h3>{props.name.firstName} {props.name.lastName}</h3>
  </div>;
};
export default Person;
