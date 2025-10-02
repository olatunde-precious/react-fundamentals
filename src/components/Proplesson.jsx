export const User = (props) => {
  console.log(props);

  return (
    <>
      <h1>
        {props.firstName}
        {props.lasttName}
      </h1>
      <small>{props.country}</small>
    </>
  );
};

export const Age = (props) => <div>The person is {props.age} years old</div>;
export const Weight = (props) => (
  <p>The weight of the object on earth is {props.weight} N.</p>
);
export const Status = (props) => {
  let status = props.status ? "Old enough to drive" : "To young for driving";
  return <>{status}</>;
};

export const Skills = (props) => <ul>{props.skills}</ul>;
export const Button = (props) => (
  <button onClick={props.onClick}>{props.text}</button>
);
export const Buttons = (props) => (
  <button onClick={props.onClick}>{props.word}</button>
);

export const MyButton = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
);
export const UserCard = ({
  myUser: { firstName, lastName, image_, styles },
}) => (
  <div className="user-card" style={styles}>
    <img src={image_} alt={firstName} />
    <h2>
      {firstName} {lastName}
    </h2>
  </div>
);
// string prop
fu;
