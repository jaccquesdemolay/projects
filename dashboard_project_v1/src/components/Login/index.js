import { React, Component } from "react"

import imgLogin from "../../images/img.svg"
import "./styles.css"
import { Link } from "react-router-dom"

import "../GlobalStyles/GlobalStyles.css"

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e) {
    e.preventDefault()
    const { email, password } = this.state
    console.log(email, password)

    fetch("http://localhost:5000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister")
        if(data.status=="ok"){
          // alert("login successful")
          window.localStorage.setItem("token", data.data)
          window.localStorage.setItem("loggedIn", true)
          window.location.href="/main"
        }else{
          window.location.href="/?error=failLogin"
        }
      })
  }
  render() {
    return (
      <main className="loginpg" id={this.props.theme}>
        <section className="side">
          <img src={imgLogin} alt="" />
        </section>

        <section className="main">
          <div className="login-container">
            <p className="title">Welcome back</p>
            <div className="separator"></div>
            <p className="welcome-message">
              Please, provide login credential to proceed and get access to all
              of our services
            </p>

            <form onSubmit={this.handleSubmit} className="login-form">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Username"
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
                <i className="fas fa-user"></i>
              </div>
              <div className="form-control">
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
                <i className="fas fa-lock"></i>
              </div>
              <div className="btLoginDiv grid">
                <button type="submit" className="submit">
                  Login
                </button>

                <div
                  id="toggle"
                  className={this.props.theme === "light" ? "active" : ""}
                  onClick={this.props.toggleTheme}
                >
                  <i className="indicator"></i>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    )
  }
}
