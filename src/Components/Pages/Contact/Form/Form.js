import React, { Component } from 'react';
import { Form, TextArea, Button } from 'semantic-ui-react';
import classes from './Form.css';

const encode = data => {
	return Object.keys(data)
		.map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
		.join('&');
};

class ContactForm extends Component {
	state = {
		name: '',
		email: '',
		message: ''
	};

	handleSubmit = e => {
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({ 'form-name': 'contact', ...this.state })
		})
			.then(() => alert('Success!'))
			.catch(error => alert(error));

    e.preventDefault();
    this.setState({name: '', email: '', message: ''})
	};

	handleChange = e => this.setState({ [e.target.name]: e.target.value });

	render() {
		const { name, email, message } = this.state;
		return (
			<div className={classes.Form}>
				<h2>Send A Quick Message Directly</h2>
				<Form onSubmit={this.handleSubmit} inverted>
					<Form.Group>
						<Form.Field stackable width={8}>
							<label>Name</label>
							<input
								name="name"
								type="text"
								placeholder="Enter Name"
								onChange={this.handleChange}
								value={name}
							/>
						</Form.Field>
						<Form.Field stackable width={8}>
							<label>Email</label>
							<input
								name="email"
								type="email"
								placeholder="Enter Email Address"
								onChange={this.handleChange}
								value={email}
							/>
						</Form.Field>
					</Form.Group>
					<Form.Group>
						<Form.Field
							name="message"
							control={TextArea}
							placeholder="Send a quick message to get in touch about development inquiries."
							label="Message"
							width={16}
							onChange={this.handleChange}
							value={message}
						/>
					</Form.Group>
					<Button inverted type="submit">
						Submit!
					</Button>
				</Form>
			</div>
		);
	}
}

export default ContactForm;
