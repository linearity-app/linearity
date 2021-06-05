import React, {useState} from 'react';
import Head from 'next/head';
import Image from 'next/image';
//import 'bootstrap/dist/css/bootstrap.min.css';
import "bootswatch/dist/darkly/bootstrap.min.css";
import { Badge, Toast, Card, Row, Col, Container, Alert } from 'react-bootstrap';
import * as Icon from 'react-feather';
// @ts-ignore
import VerificationBadge from './../components/verification_badge.tsx';
// @ts-ignore
import WorkInProgressWarning from './../components/work_in_progress_warning.tsx';

export default function Home() {
	return (
		<Container>
			<title>Linearity</title>
			<br></br>
			<WorkInProgressWarning />
			<h1>Hello, World!</h1>
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
						Hello, World!
					</Card.Text>
				</Card.Body>
			</Card>
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
