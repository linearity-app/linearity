import React, {useState} from 'react';
import Head from 'next/head';
import Image from 'next/image';
//import 'bootstrap/dist/css/bootstrap.min.css';
import "bootswatch/dist/darkly/bootstrap.min.css";
import { Row, Col, Card, Badge, Form, FormControl, Container, Alert } from 'react-bootstrap';
import * as Icon from 'react-feather';


export default function Home() {
	return (
		<Container>
			<title>Linearity</title>
			<br></br>
			<Alert variant="warning">
				<Icon.AlertTriangle size={20} /> WARNING: The web frontend for Linearity is currently a work-in-progress and should not be expected to be stable. Because of that, Please do not use this app without knowing what you are doing.
			</Alert>
			<br></br>
			<Card>
				<Card.Body>
					<Card.Title>
						Groups&nbsp;&nbsp;<Icon.Users />
					</Card.Title>
					<Card.Text>
						<Row>
							<Col>
							<a href="#"><img style={{border: "3px solid black"}} src="/test_profile.png" width="64" height="64" className="rounded mr-2" alt="" /></a>
							<a href="#"><img style={{border: "3px solid #555555"}} src="/test_profile.png" width="64" height="64" className="rounded mr-2" alt="" /></a>
							<a href="#"><img style={{border: "3px solid #555555"}} src="/test_profile.png" width="64" height="64" className="rounded mr-2" alt="" /></a>
							<a href="#"><img style={{border: "3px solid #555555"}} src="/test_profile.png" width="64" height="64" className="rounded mr-2" alt="" /></a>
							<a href="#"><img style={{border: "3px solid #555555"}} src="/test_profile.png" width="64" height="64" className="rounded mr-2" alt="" /></a>
							</Col>
						</Row>
					</Card.Text>
				</Card.Body>
			</Card>
			<br></br>
			<hr className="bg-secondary"></hr>
			<br></br>
			<Card>
				<Card.Body>
					<Card.Title>
						<img src="/test_profile.png" width="32" height="32" className="rounded mr-2" alt="" /><strong className="mr-auto">Test&nbsp;&nbsp;<Badge variant="success"><Icon.Check size={12} /></Badge></strong>
					</Card.Title>
					<Card.Text>
						Hello, World!
					</Card.Text>
				</Card.Body>
			</Card>
			<br></br>
			<Card>
				<Card.Body>
					<Card.Title>
						<img src="/test_profile.png" width="32" height="32" className="rounded mr-2" alt="" /><strong className="mr-auto">Test1337&nbsp;&nbsp;<Badge variant="danger"><Icon.X size={12} /></Badge></strong>
					</Card.Title>
					<Card.Text>
						What is your password, @Test? I'm not trying to hack you, trust me.&nbsp;&nbsp;&nbsp;<Badge variant="danger"><Icon.AlertCircle size={16} />&nbsp;Potentially Unsafe message</Badge>
					</Card.Text>
				</Card.Body>
			</Card>
			<br></br>
			<hr className="bg-secondary"></hr>
			<br></br>
			<Card>
				<Card.Body>
					<Card.Title>
						<img src="/test_profile.png" width="32" height="32" className="rounded mr-2" alt="" /><strong className="mr-auto">Test&nbsp;&nbsp;<Badge variant="success"><Icon.Check size={12} /></Badge></strong>
					</Card.Title>
					<Card.Text>
					<input style={{width: "95%"}} type="text" placeholder="type@something:/$" className="mr-sm-2"></input>&nbsp;&nbsp;<Icon.Send />
					</Card.Text>
				</Card.Body>
			</Card>
			<br></br>
		</Container>
	);
}