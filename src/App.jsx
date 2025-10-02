import "./App.css";
import "./index.css";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import UserProfile from "./components/user-profie.jsx";
import Techlist from "./components/Techlists.jsx";
import image_ from "./assets/images/pic2.png";
import {
  User,
  Age,
  Weight,
  Status,
  Skills,
  Button,
  Buttons,
  MyButton,
  UserCard,
} from "./components/Proplesson.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const welcome = "Welcome to 30 Days of React";
  const title = "Getting started React";
  const subtitle = "Javascript library";
  const firstName = "Alex";
  const lastName = "Favour";
  const date = "sept 25, 2025";
  let currentYear = new Date().getFullYear();
  let birthYear = 2013;
  let age = currentYear - birthYear;
  // console.log(age);
  const gravity = 9.81;
  const mass = 75;
  let weight = mass * gravity;
  // console.log(weight);
  let status = age >= 18;
  const data = {
    welcome: "Welcome to 30 Days of React",
    title: "Getting started React",
    subtitle: "Javascript library",
  };
  const sayHi = () => {
    alert("HI");
  };
  const greetingsToYou = () => {
    alert("Greeting to you");
  };
  const buttonStyle = {
    backgroundColor: "#13add3",
    padding: 10,
    border: "none",
    margin: 3,
    cursor: " Pointer",
    fontSize: 18,
    color: "black",
  };
  const myUser = {
    firstName: "Alex",
    lastName: "Favour",
    image_: image_,
    
  };

  return (
    <>
      <h1 className="text-7xl text-center text-blue-400">Hello world!</h1>
      <Header
        welcome={welcome}
        title={title}
        subtitle={subtitle}
        firstName={firstName}
        lastName={lastName}
        date={date}
        age={age}
        weight={weight}
        status={status}
        data={data}
      />
      <Age age={age} />
      <Weight weight={weight} />
      <Status status={status} />
      <Skills skills={["HTML", "CSS", "JAVASCRIPT"]} />
      {/* <Button test='Say Hi' onClick={sayHi}/> */}
      <Buttons word="Greetings to you" onClick={greetingsToYou} />
      <MyButton
        text={"destructured button"}
        onClick={sayHi}
        style={buttonStyle}
      />
      <UserCard myUser={myUser} />
      <Main />
      <UserProfile />
      <Techlist />
      <User firstName="Alex" lastName="Favour" country="Nigeria" />
      <Footer />
    </>
  );
}

export default App;
