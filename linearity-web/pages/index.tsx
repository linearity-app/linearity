import React, {useState} from 'react';
import Head from 'next/head';
import Image from 'next/image';
//import 'bootstrap/dist/css/bootstrap.min.css';
import "bootswatch/dist/darkly/bootstrap.min.css";
import { Badge, Toast, Card, Row, Col, Container, Alert } from 'react-bootstrap';
import * as Icon from 'react-feather';


export default function Home() {
	return (
		<Container>
			<title>Linearity</title>
			<br></br>
			<Alert variant="warning">
				<Icon.AlertTriangle size={20} /> WARNING: The web frontend for Linearity is currently a work-in-progress and should not be expected to be stable. Because of that, Please do not use this app without knowing what you are doing.
			</Alert>
			<h1>Introducing Linearity.</h1>
			<h1>Great for code Collaboration.</h1>
			<br></br>
			<Toast>
				<Toast.Header>
					<img src="/test_profile.png" className="rounded mr-2" alt="" />
					<strong className="mr-auto">Test&nbsp;&nbsp;<Badge variant="success"><Icon.Check size={12} /></Badge></strong>
					<small>11 mins ago</small>
				</Toast.Header>
				<Toast.Body>Hello, world!</Toast.Body>
			</Toast>
			<br></br>
			<h1>Features</h1>
			<br></br>
			<Row>
				<Col>
				<Card>
					<Card.Body>
						<Card.Title>Great for developers</Card.Title>
						<Card.Text>
							Linearity is built by developers for developers as a high quality Code Collaboration platform.
						</Card.Text>
					</Card.Body>
				</Card>
				</Col>
				<Col>
				<Card>
					<Card.Body>
						<Card.Title>Cross-platform</Card.Title>
						<Card.Text>
							Linearity was created with cross-platform in mind, meaning that you can use Linearity on many different devices.
						</Card.Text>
					</Card.Body>
				</Card>
				</Col>
			</Row>
		</Container>
	);
}
