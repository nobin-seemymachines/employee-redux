import React, { ChangeEvent, FormEvent } from "react";
import Home from "../../pages/Home";
import "./Login.css";
import {Validation} from "./Validation";

interface FormData {
  userData: {
    email: string;
    password: string;
  };
  errors: {
    email: string;
    password: string;
  };
}

interface State {
  formData: FormData;
  authError: string;
}

class Login extends React.Component<{}, State> {
  state: State = {
    formData: {
      userData: {
        email: "",
        password: "",
      },
      errors: {
        email: "",
        password: "",
      },
    },
    authError: "",
  };

  buttonText = false;

  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      authError: "",
      formData: {
        ...prevState.formData,
        userData: {
          ...prevState.formData.userData,
          [name]: value,
        },
        errors: {
          ...prevState.formData.errors,
          [name]: "", // Clear errors when input changes
        },
      },
    }));
  };

  onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Validation(this.state.formData)
  };

  

  render() {
    const { formData, authError } = this.state;

    return (
      <div className="container">
        <Home buttonText={this.buttonText} />
        <div className="login-page">
          <form onSubmit={this.onFormSubmit}>
            <h2>Login</h2>
            <div className="input-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="text"
                name="email"
                value={formData.userData.email}
                onChange={this.handleInputChange}
              />
              <p className="error-message">{formData.errors.email}</p>
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={formData.userData.password}
                onChange={this.handleInputChange}
              />
              <p className="error-message">{formData.errors.password}</p>
            </div>
            <button type="submit">Login</button>
            <p className="error-message">{authError}</p>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
