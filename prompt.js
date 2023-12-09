console.log("prompt connected");
// alert("what is happening");

const showAlert = () => {
  const num = Math.random() * 10;
  console.log(num);
  if (num < 5) {
    alert("You number is less than 5");
  }
};

const askSomething = () => {
  const decition = confirm("Are you coming to the school");
  console.log(decition);
  if (decition === true) {
    alert("Please bring an umbrella");
  } else {
    console.log("Stay at home");
  }
};

const getUserInfo = () => {
  const name = prompt("Tell us your name");
  console.log(name);
  if (!!name) {
    console.log("Welcome here", name);
  }
};
