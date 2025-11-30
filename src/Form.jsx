import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState({
    nameError: "",
    ageError: "",
    emailError: "",
  });

  const validateEmail = (email) => {
    let emailError = error.emailError;
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (re.test(String(email).toLowerCase())===false){
        emailError = "Invalid email format.";
    }
    setEmail(email);
    setError({ ...error, emailError });
  };

  const validateAge = (age) => {
   let ageError = error.ageError;

    if (age.trim().length == 0 || age.trim().length > 3 || age.trim() >= 120) {
      ageError = "Enter valid age!";
    } else {
      ageError = "";
    }

    setAge(age);
    setError({ ...error, ageError });
  };

  const validateName = (name) => {
    let nameError = error.nameError;

    if (name.trim().length < 6) {
      nameError = "Please enter atleast 6 characters!";

    } else if (name.includes("2")) {
      nameError = "2 is not allowed!";
    } else {
      nameError = "";
    }

    setName(name);
    setError({ ...error, nameError });
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

  return (
    <>
      <form>
        <label >
          Name
        </label>
        <input id="name" type="text" value={name} placeholder="Enter Name" onChange={handleChange}/>
        <label  >
          Age
        </label>
        <input id="age" value={age} onChange={handleChange}/>
        <label  >
          Email
        </label>
        <input id="email" type="text" value={email} onChange={handleChange}/>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
