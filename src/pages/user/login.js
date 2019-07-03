import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import { withRouter } from "react-router-dom";
import md5 from 'md5'
import styles from './index.scss'

import * as server from '../../api/login'


class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: "admin",
			password: "hefeng6500",
			code: "", // 服务器返回的验证码
			validCode: ""
		}
		this.usernameChange = this.usernameChange.bind(this)
		this.passwordChange = this.passwordChange.bind(this)
		this.login = this.login.bind(this)
		this.getCode = this.getCode.bind(this)
	}

	componentDidMount() {
		this.getCode()
	}

	usernameChange(e) {
		this.setState({ username: e.target.value })
	}

	passwordChange(e) {
		this.setState({ password: e.target.value })
	}

	getCode() {
		server.getCode().then(res => {
			this.setState({
				code: res.data.data
			})
		})
	}

	validCodeChange = (e) => {
		this.setState({ validCode: e.target.value })
	}

	login() {
		let data = {
			username: this.state.username,
			password: md5(this.state.password),
			type: 1,
			code: this.state.validCode
		}
		server.login(data).then(res => {
			localStorage.setItem('token', res.data.token);
			localStorage.setItem('token_exp', new Date().getTime());
			// ReactDOM.render(<Alert message="Success Tips" type="success" showIcon />,mountNode)
			message.success('登录成功！')
			this.props.history.push("/")
		}).catch(err => {
			this.getCode()
		})
	}

	handleKeyDown = (e) => {
		if (e.keyCode === 13) {
			this.login()
		}
	}

	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
	};

	render() {
		const { getFieldDecorator } = this.props.form;

		return (
			<div className="login-page">
				<div className='login-bg'></div>
				<div className="login-card">
					<h1>快捷登录</h1>
					<Form onSubmit={this.handleSubmit} className="login-form">
						<Form.Item>
							{getFieldDecorator('username', {
								rules: [{ required: true, message: '请输入用户名' }],
							})(
								<Input
									onChange={this.usernameChange}
									prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
									placeholder="用户名"
								/>,
							)}
						</Form.Item>
						<Form.Item>
							{getFieldDecorator('password', {
								rules: [{ required: true, message: '请输入密码' }],
							})(
								<Input
									onChange={this.passwordChange}
									prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
									type="password"
									placeholder="密码"
								/>,
							)}
						</Form.Item>
						<Form.Item>
							<div className="valid-box">
								{getFieldDecorator('validCode', {
									rules: [{ required: true, message: '请输入验证码' }],
								})(
									<Input
										onChange={this.validCodeChange}
										className="valid-code-input"
										prefix={<Icon type="barcode" style={{ color: 'rgba(0,0,0,.25)' }} />}
										placeholder="验证码"
									/>,
								)}
								<div className="valid-code" onClick={this.getCode} dangerouslySetInnerHTML={{ __html: this.state.code }}></div>
							</div>
						</Form.Item>
						<Form.Item>
							<Button type="primary" onClick={this.login} onKeyDown={this.handleKeyDown} htmlType="submit" className="login-form-button" block >
								登 录
          			</Button>
						</Form.Item>
					</Form>
				</div>
			</div>
		)
	}
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);

export default withRouter(WrappedNormalLoginForm)