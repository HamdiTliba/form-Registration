import React, { useEffect, useRef, useState } from "react";
import Title from "./Title";
import InputLabel from "./inputLabel";
import Alert from "./Alert";

const RegistrationForm = () => {
  const [submit, setSubmit] = useState(false);
  const [valid, setValid] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  let inputName = useRef(null);
  useEffect(() => {
    inputName.current.focus();
  }, []);
  let inputEmail = useRef(null);
  useEffect(() => {
    inputEmail.current.focus();
  }, []);
  let inputPassword = useRef(null);
  useEffect(() => {
    inputPassword.current.focus();
  }, []);
  const handleInputNameChange = (e) => {
    setValues({ ...values, name: e.target.value });
  };
  const handleInputEmailChange = (e) => {
    setValues({ ...values, email: e.target.value });
  };
  const handleInputPasswordChange = (e) => {
    setValues({ ...values, password: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.name) {
      inputName.current.focus();
    } else if (!values.email) {
      inputEmail.current.focus();
    } else if (!values.password) {
      inputPassword.current.focus();
    }
    if (values.name && values.email && values.password) {
      setValid(true);
    }
    setSubmit(true);
  };
  return (
    <>
      {submit && valid ? (
        <div>
          <Alert />
          <Title title={`welcome ${values.name}`} classes={"title"} />
        </div>
      ) : (
        <div className="registration">
          <div>
            <Title classes={"title"} title={"Registration Form"} />
            <form onSubmit={handleSubmit}>
              <InputLabel
                labelText={"Please input your name"}
                inputType={"text"}
                placeholder={"enter your name here"}
                refInput={inputName}
                value={values.name}
                onChange={handleInputNameChange}
                submit={submit}
                values={values.name}
              />
              <InputLabel
                labelText={"Please input your email address"}
                inputType={"email"}
                placeholder={"enter your email here"}
                refInput={inputEmail}
                value={values.email}
                onChange={handleInputEmailChange}
                submit={submit}
                values={values.email}
              />
              <InputLabel
                labelText={"Please input your password"}
                inputType={"password"}
                placeholder={"enter your password here"}
                refInput={inputPassword}
                value={values.password}
                onChange={handleInputPasswordChange}
                submit={submit}
                values={values.password}
              />
              <button>Register</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default RegistrationForm;
