export const Numbers = ({ numArray }) => {
  const list = numArray.map((number) => <li key={number}>{number}</li>);

  return (
    <div>
      <>{list}</>
      <h1> Number list</h1>
      <div>{[1, 2, 3, 4, 5]}</div>
    </div>
  );
};

const Skill = ({ skill: [tech, level] }) => (
  <li>
    {tech} {level}
  </li>
);

export const Skills = ({ skills }) => {
  const skillsList = skills.map((skill, id) => (
    <Skill key={id} skill={skill} />
  ));
  return <ul>{skillsList}</ul>;
};

const Country = ({ country: { name, city } }) => {
  return (
    <div>
      <h1>{name}</h1>
      <small>{city}</small>
    </div>
  );
};

export const Countries = ({ countries }) => {
  const countryList = countries.map((country) => <Country country={country} />);
  return <div>{countryList}</div>;
};

export const IsPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

export const NumberBox = ({ nuber }) => {
  let bgColor = "";

  if (IsPrime(nuber)) {
    bgColor = "red";
  } else if (nuber % 2 === 0) {
    bgColor = "green";
  } else {
    bgColor = "yellow";
  }
};
