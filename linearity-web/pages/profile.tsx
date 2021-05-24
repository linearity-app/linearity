import React, {useState} from 'react';
import Head from 'next/head';
import Image from 'next/image';
//import 'bootstrap/dist/css/bootstrap.min.css';
import "bootswatch/dist/darkly/bootstrap.min.css";
import { OverlayTrigger, Row, Col, Card, Badge, Form, FormControl, Container, Alert } from 'react-bootstrap';
import * as Icon from 'react-feather';
// @ts-ignore
import VerificationBadge from './components/verification_badge.tsx';
// @ts-ignore
import WorkInProgressWarning from './components/work_in_progress_warning.tsx';

export default function Home() {
	return (
		<Container>
			<title>Linearity</title>
			<br></br>
			<WorkInProgressWarning />
			<br></br>
			<Card>
				<Card.Body>
					<Card.Title>
						<img src="/test_profile.png" width="32" height="32" className="rounded mr-2" alt="" />
						<strong className="mr-auto">Test&nbsp;&nbsp;
						<VerificationBadge is_verified="true" />
						</strong>
					</Card.Title>
					<Card.Text>
						<h5>"Hello, World!"</h5>
						<a href="#">Followers&nbsp;&nbsp;</a>
						<Badge variant="primary">32k</Badge>
						<br></br>
						<a href="#">Following&nbsp;&nbsp;</a>
						<Badge variant="primary">1</Badge>
						<br></br>
						<br></br>
						<Card className="bg-secondary">
							<Card.Body>
								<Card.Title>
									Groups owned by @Test&nbsp;&nbsp;<Icon.Users />
								</Card.Title>
								<Card.Text>
									<Row>
										<Col>
										<a href="#"><img style={{border: "3px solid #555555"}} src="/test_profile.png" width="64" height="64" className="rounded mr-2" alt="" /></a>
										<a href="#"><img style={{border: "3px solid #555555"}} src="/test_profile.png" width="64" height="64" className="rounded mr-2" alt="" /></a>
										<a href="#"><img style={{border: "3px solid #555555"}} src="/test_profile.png" width="64" height="64" className="rounded mr-2" alt="" /></a>
										<a href="#"><img style={{border: "3px solid #555555"}} src="/test_profile.png" width="64" height="64" className="rounded mr-2" alt="" /></a>
										<a href="#"><img style={{border: "3px solid #555555"}} src="/test_profile.png" width="64" height="64" className="rounded mr-2" alt="" /></a>
										</Col>
									</Row>
								</Card.Text>
							</Card.Body>
						</Card>
					</Card.Text>
				</Card.Body>
			</Card>
		</Container>
	);
}
