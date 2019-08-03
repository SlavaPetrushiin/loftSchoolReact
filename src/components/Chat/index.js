import React, {Component} from 'react';
import Message from '../Message';

class Chat extends Component{
	state = {
		messages: [],
		messageInput: '',
	}

	changeInputMessage = (event) => {
		let letter = event.target.value;
		this.setState({messageInput: letter});
	}

	sendMessageOnEnter = (event) => {

		if (event.key === "Enter") {
			this.setState((state) => {
				state.messages.push({text: state.messageInput})
			})
			this.setState({messageInput: ''})
			console.log(this.state)
		}
	}
	
	render(){
		let {messages} = this.state;
		let mess = messages.map((item, index) => {
			return <Message text={item.text} key={index}/>
		})
		
		return (
			<div className="chat">
				<div className="message-list">
					<div className="messages">
						{(messages.length) ? mess : null}
					</div>
				</div>
				<input
					type="text"
					className="input-message"
					onChange={this.changeInputMessage}
					onKeyPress={this.sendMessageOnEnter}
					value={this.state.messageInput}
				/>
			</div>
		)
	}
}

export default Chat;
