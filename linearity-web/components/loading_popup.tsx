import React, {useState} from 'react';
import Head from 'next/head';
import Image from 'next/image';
//import 'bootstrap/dist/css/bootstrap.min.css';
import "bootswatch/dist/darkly/bootstrap.min.css";
import { Modal, Row, Col, Card, Badge, Form, FormControl, Container, Alert } from 'react-bootstrap';
import * as Icon from 'react-feather';
import FadeIn from 'react-fade-in';
import Loader from 'react-ts-loaders';
// @ts-ignore
import VerificationBadge from './../components/verification_badge.tsx';

class LoadingPopUp extends React.Component<{"show": boolean}> {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Modal show={this.props.show}>
				<Modal.Body>
				<br></br>
				<h2 className="text-center">Loading...</h2>
				<br></br>
				<Loader type="ring" color="#555555" size={100} />
				<br></br>
				</Modal.Body>
			</Modal>
		);
	}
}

export default LoadingPopUp