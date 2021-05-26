import React, {useState} from 'react';
import Head from 'next/head';
import Image from 'next/image';
//import 'bootstrap/dist/css/bootstrap.min.css';
import "bootswatch/dist/darkly/bootstrap.min.css";
import { Row, Col, Card, Badge, Form, FormControl, Container, Alert } from 'react-bootstrap';
import * as Icon from 'react-feather';
// @ts-ignore
import VerificationBadge from './components/verification_badge.tsx';
// @ts-ignore
import WorkInProgressWarning from './components/work_in_progress_warning.tsx';
// @ts-ignore
import GroupIcon from './components/group_icon.tsx';


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
			<Card>
				<Card.Body>
					<Card.Title>
						<img src="/test_profile.png" width="32" height="32" className="rounded mr-2" alt="" />
						<strong className="mr-auto">Test1337&nbsp;&nbsp;
						<VerificationBadge is_verified="false" />
						</strong>
					</Card.Title>
					<Card.Text>
						What is your password, @Test123? I'm not trying to hack you, trust me.&nbsp;&nbsp;&nbsp;<Badge variant="danger"><Icon.AlertCircle size={16} />&nbsp;Potentially Unsafe message</Badge>
					</Card.Text>
				</Card.Body>
			</Card>
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
					<input style={{width: "100%"}} type="text" placeholder="type@something:/$" className="mr-sm-2 form-control"></input>
					</Card.Text>
				</Card.Body>
			</Card>
			<br></br>
		</Container>
	);
}
