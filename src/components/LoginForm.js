import React from "react";
import "../styles/LoginForm.scss";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorMsg: {
        email: "",
        password: "",
      },
    };
  }
  changeValueInput(event) {
    this.setState({
      [event.target.name]: event.target.value,
      errorMsg: {
        ...this.state.errorMsg,
        [event.target.name]: "",
      },
    });
  }

  validationForm() {
    const { email, password } = this.state;
    const regex = /^\S+@\S+\.\S+$/;
    const errors = {
      email: "",
      password: "",
    };
    if (!email) {
      errors.email = "mail không được để trống";
    } else if (!regex.test(email)) {
      errors.email = "mail không hợp lệ";
    }

    if (!password) {
      errors.password = "mật khẩu không để trống";
    } else if (password.length < 8) {
      errors.password = "mật khẩu phải ít nhất 8 ký tự";
    }

    return errors;
  }

  submitForm(e) {
    e.preventDefault();

    const validation = this.validationForm();
    this.setState({ errorMsg: validation });

    let errorCount = 0;

    // Kiểm tra từng trường lỗi
    for (const key in validation) {
      if (validation[key] !== "") {
        errorCount++;
      }
    }

    if (errorCount === 0) {
      const { email, password } = this.state;
      const emailFake = "thienpham35@gmail.com";
      const passwordFake = "thienpham35";

      if (email === emailFake && password === passwordFake) {
        alert("Đăng nhập thành công");
        this.props.onLogin();
      } else {
        alert("Email hoặc mật khẩu không đúng");
      }
    }
  }

  render() {
    const { errorMsg } = this.state;
    return (
      <div className="container">
        <div className="screen">
          <div className="screen__content">
            <form
              className="login"
              method="POST"
              onSubmit={(e) => this.submitForm(e)}
            >
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  type="email"
                  className="login__input"
                  name="email"
                  placeholder="Email"
                  onChange={(e) => this.changeValueInput(e)}
                />
                {errorMsg.email && <div className="Msg">{errorMsg.email}</div>}
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input
                  type="password"
                  className="login__input"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => this.changeValueInput(e)}
                />
                {errorMsg.password && (
                  <div className="Msg">{errorMsg.password}</div>
                )}
              </div>
              <button type="submit" className="button login__submit">
                <span className="button__text">Log In Now</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
            </form>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    );
  }
}
export default LoginForm;
