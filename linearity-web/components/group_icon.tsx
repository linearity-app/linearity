import React, {useState} from 'react';
import Head from 'next/head';
import Image from 'next/image';
//import 'bootstrap/dist/css/bootstrap.min.css';
import "bootswatch/dist/darkly/bootstrap.min.css";
import { Row, Col, Card, Badge, Form, FormControl, Container, Alert } from 'react-bootstrap';
import * as Icon from 'react-feather';

class GroupIcon extends React.Component<{"is_selected": string, "img": string, "href": string}> {
	constructor(props) {
		super(props);
	}
	render() {
		if (this.props.is_selected == "true" || this.props.is_selected == "yes") {
			return (
				<a href={this.props.href}><img style={{border: "3px solid black"}} src={this.props.img} width="64" height="64" className="rounded mr-2" alt="" /></a>
			);
		}
		else {
			return (
				<a href={this.props.href}><img style={{border: "3px solid #555555"}} src={this.props.img} width="64" height="64" className="rounded mr-2" alt="" /></a>
			);
		}
	}
}

export default GroupIcon