import React, {useState} from 'react';
import Head from 'next/head';
import Image from 'next/image';
//import 'bootstrap/dist/css/bootstrap.min.css';
import "bootswatch/dist/darkly/bootstrap.min.css";
import { Row, Col, Card, Badge, Form, FormControl, Container, Alert } from 'react-bootstrap';
import * as Icon from 'react-feather';

class WorkInProgressWarning extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		//return (<br></br>);
		return (
			<Alert variant="warning">
				<Icon.AlertTriangle size={20} /> WARNING: The web frontend for Linearity is currently a work-in-progress and should not be expected to be stable. Because of that, Please do not use this app without knowing what you are doing.
			</Alert>
		);
	}
}

export default WorkInProgressWarning