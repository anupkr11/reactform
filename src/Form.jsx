import { useState } from "react";

const Form = ({ userData }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  // const [value, setvalue] = useState({
  //   name: "",
  //   age: "",
  //   email: "",
  // });
  const [error, setError] = useState({
    nameError: "",
    ageError: "",
    emailError: "",
  });

  const validateEmail = (email) => {
    let emailError = error.emailError;
    let formValid = false;
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (re.test(String(email).toLowerCase()) === false) {
      emailError = "Invalid email format.";
      formValid = false;
    } else {
      formValid = true;
      emailError = "";
    }
    setEmail(email);
    setError({ ...error, emailError });
    return formValid;
  };

  const validateAge = (age) => {
    let ageError = error.ageError;
    let formValid = false;
    if (age.trim().length == 0 || age.trim().length > 3 || age.trim() >= 120) {
      ageError = "Enter valid age!";
      formValid = false;
    } else {
      ageError = "";
      formValid = true;
    }

    setAge(age);
    setError({ ...error, ageError });
    return formValid;
  };

  const validateName = (name) => {
    let nameError = error.nameError;
    let formValid = false;

    if (name.trim().length < 6) {
      nameError = "Please enter atleast 6 characters!";
      formValid = false;
    } else if (name.includes("2")) {
      nameError = "2 is not allowed!";
      formValid = false;
    } else {
      nameError = "";
      formValid = true;
    }

    setName(name);
    setError({ ...error, nameError });
    return formValid;
  };

  const handleChange = (e) => {
    if (e.target.id === "name") {
      validateName(e.target.value);
    } else if (e.target.id === "age") {
      validateAge(e.target.value);
    } else if (e.target.id === "email") {
      validateEmail(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log();
    if (validateName(name) && validateAge(age) && validateEmail(email)) {
      alert("Form submitted");
      userData({ name, age, email });
      setName("");
      setAge("");
      setEmail("");
    }
    else {
      alert("Please fill the form correctly.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          id="name"
          type="text"
          value={name}
          placeholder="Enter Name"
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{error.nameError}</p>
        <label>Age</label>
        <input id="age" value={age} onChange={handleChange} />
        <p style={{ color: "red" }}>{error.ageError}</p>
        <label>Email</label>
        <input id="email" type="text" value={email} onChange={handleChange} />
        <p style={{ color: "red" }}>{error.emailError}</p>
        <button>Submit</button>
      </form>
    </>
  );
};

export default Form;
