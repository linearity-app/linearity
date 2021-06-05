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

class ChatViewer extends React.Component<{"messages": any, uselessrefreshval: any}> {
	constructor(props) {
		super(props);
	}
	render() {
		console.log("Rendering chat!");
		if (this.props.messages == null) {
			return (
				<div className="no_messages">
					<strong><i>There are no messages :(</i></strong>
					<br></br>
				</div>
			);
		}
		return this.props.messages.map((key) => {
				return (
					<div className="message">
						<FadeIn>
							<Card>
								<Card.Body>
									<Card.Title>
										<img src={key.profile_picture} width="32" height="32" className="rounded mr-2" alt="" />
										<strong className="mr-auto">{key.username}&nbsp;&nbsp;
										<VerificationBadge is_verified={key.verified} />
										</strong>
									</Card.Title>
									<Card.Text>
										{key.message}
									</Card.Text>
								</Card.Body>
							</Card>
						</FadeIn>
						<br></br>
					</div>
				);
			});
	}
}

export default ChatViewer