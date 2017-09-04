import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ChatForm from '../components/chatForm';
import { addMessage } from '../actions/chat';

const mapStateToProps = (state) => ({
  user: state.user,
  messageList: state.messages
})

const mapDispatchToProps = {
  addMessage: addMessage
}

class ChatWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    }

    this.handleSendClick = this.handleSendClick.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
  }

  handleMessageChange(event) {
    this.setState({
      message: event.target.value
    });
  }

  handleSendClick(event) {
    if (event.type === 'keyup' && event.key !== 'Enter') {
      return;
    }

    if (!this.state.message) {
      return;
    }

    event.preventDefault();
    this.props.addMessage(this.state.message, this.props.user.nickname);
    this.setState({
      message: ''
    });
  }

  componentDidUpdate() {
    this.chatWindow.scrollTop = this.chatWindow.scrollHeight;
  }

  render() {
    if (!this.props.user.isLogged) {
      return <Redirect to='/login' />
    }

    return (
      <div className="container chat-wrapper">
        <ChatForm chatRef={el => this.chatWindow = el} handleMessageChange={this.handleMessageChange} messageList={this.props.messageList} message={this.state.message} handleSendClick={this.handleSendClick} />
      </div>
    );
  }
}

const ChatPage = connect(mapStateToProps, mapDispatchToProps)(ChatWrapper);

export default ChatPage;