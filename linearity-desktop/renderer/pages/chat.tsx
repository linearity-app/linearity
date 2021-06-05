import React, {useState} from 'react';
import Head from 'next/head';
import Image from 'next/image';
//import 'bootstrap/dist/css/bootstrap.min.css';
import "bootswatch/dist/darkly/bootstrap.min.css";
import { Row, Col, Card, Badge, Form, FormControl, Container, Alert } from 'react-bootstrap';
import * as Icon from 'react-feather';
import FadeIn from 'react-fade-in';
// @ts-ignore
import VerificationBadge from './../components/verification_badge.tsx';
// @ts-ignore
import WorkInProgressWarning from './../components/work_in_progress_warning.tsx';
// @ts-ignore
import GroupIcon from './../components/group_icon.tsx';
// @ts-ignore
import ChatViewer from './../components/chat_viewer';

var ranstuff = false;

export default function Chat() {
	const [refreshval, setrefreshval] = useState(1);
	const [current_message, set_current_message] = useState("");
	var fetch_messages_from_cache = false;
	if (typeof window != "undefined") {
		if (window.localStorage["chat_cache"] != "undefined" && window.localStorage["chat_cache"] != null) {
			fetch_messages_from_cache = true;
		}
	}
	
	var [chat_messages, set_chat_messages] = useState([
		{
			"username": "Test123",
			"verified": true,
			"profile_picture": "/test_profile.png",
			"message": "Hello, World!"
		},
		{
			"username": "Test1337",
			"verified": false,
			"profile_picture": "/test_profile.png",
			"message": "What is your password, @Test123? I'm not trying to hack you, trust me."
		},
	]);
	var chatviewerbox = React.createElement(ChatViewer, {messages: chat_messages, uselessrefreshval: refreshval});
	if (fetch_messages_from_cache && !ranstuff) {
		set_chat_messages(JSON.parse(window.localStorage.getItem("chat_cache")));
		ranstuff = true;
	}

	var ChatBoxChangeHandler = text => {
		set_current_message(text.target.value);
	}

	var ChatBoxSubmitHandler = e => {
		e.preventDefault();
		if (current_message != "") {
			console.log(chat_messages);
			debugger;
			if (chat_messages != null) {
				var tmp_chat_messages = chat_messages;
				tmp_chat_messages.push({"username": "Test123", "verified": true, "profile_picture": "/test_profile.png", "message": current_message});
				set_chat_messages(tmp_chat_messages);
			}
			else {
				set_chat_messages([{"username": "Test123", "verified": true, "profile_picture": "/test_profile.png", "message": current_message}]);
			}
			//Simulate.keyPress(ReactDOM.findDOMNode(component.refs.input), {key:"Enter"});
			if (typeof window != "undefined") {
				window.localStorage.setItem("chat_cache", JSON.stringify(chat_messages));
			}
			//set_current_message("");
			console.log("Pushed message!");
			setrefreshval(refreshval + 1);
		}
	}

	return (
		<Container>
			<title>Linearity</title>
			<br></br>
			<WorkInProgressWarning />
			<br></br>
			<Card>
				<Card.Body>
					<Card.Title>
						Groups&nbsp;&nbsp;<Icon.Users />
					</Card.Title>
					<Card.Text>
						<Row>
							<Col>
								<GroupIcon is_selected="true" href="#" img="/test_profile.png" />
								<GroupIcon is_selected="false" href="#" img="/test_profile.png" />
								<GroupIcon is_selected="false" href="#" img="/test_profile.png" />
								<GroupIcon is_selected="false" href="#" img="/test_profile.png" />
								<GroupIcon is_selected="false" href="#" img="/test_profile.png" />
							</Col>
						</Row>
					</Card.Text>
				</Card.Body>
			</Card>
			<br></br>
			<hr className="bg-secondary"></hr>
			<br></br><br></br>
			<FadeIn>
				{chatviewerbox}
			</FadeIn>
			<br></br>
			<hr className="bg-secondary"></hr>
			<br></br>
			<Card>
				<Card.Body>
					<Card.Title>
						<img src="/test_profile.png" width="32" height="32" className="rounded mr-2" alt="" />
						<strong className="mr-auto">Test123&nbsp;&nbsp;
						<VerificationBadge is_verified="true" />
						</strong>
					</Card.Title>
					<Card.Text>
					<form onSubmit={ChatBoxSubmitHandler}>
						<input id="chatbox" onChange={ChatBoxChangeHandler} style={{width: "100%"}} type="text" placeholder="type@something:/$" className="mr-sm-2 form-control"></input>
					</form>
					</Card.Text>
				</Card.Body>
			</Card>
			<br></br>
		</Container>
	);
}
