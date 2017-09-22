import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import RegisterForm from '../components/registerForm';
import { register } from '../actions/user';

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = {
  register: register
}

class RegisterWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nickname: props.user.nickname,
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNickChange = this.handleNickChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
  }

  handleNickChange(event) {
    this.setState({
      nickname: event.target.value
    })
  }

  handlePassChange(event) {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.register(this.state.nickname, this.state.password);
  }

  render() {
    if (this.props.user.isLogged) {
      return <Redirect to='/chat' />
    }

    return (
      <div className="container login-page">
        <div className="form">
          <RegisterForm handleSubmit={this.handleSubmit} nickname={this.state.nickname} handlePassChange={this.handlePassChange} handleNickChange={this.handleNickChange} errorReason={this.props.user.regFailReason} />
        </div>
      </div>
    );
  }
}

const RegisterPage = connect(mapStateToProps, mapDispatchToProps)(RegisterWrapper);

export default RegisterPage;