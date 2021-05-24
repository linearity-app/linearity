import React, {useState} from 'react';
import Head from 'next/head';
import Image from 'next/image';
//import 'bootstrap/dist/css/bootstrap.min.css';
import "bootswatch/dist/darkly/bootstrap.min.css";
import { Row, Col, Card, Badge, Form, FormControl, Container, Alert } from 'react-bootstrap';
import * as Icon from 'react-feather';

class VerificationBadge extends React.Component<{"is_verified": string}> {
	constructor(props) {
		super(props);
	}
	render() {
		if (this.props.is_verified == "true" || this.props.is_verified == "yes") {
			return (
				<Badge variant="success">
					<Icon.Check size={12} />
				</Badge>
			);
		}
		else {
			return (
				<Badge variant="danger">
					<Icon.X size={12} />
				</Badge>
			);
		}
	}
}

export default VerificationBadge