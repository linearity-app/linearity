import Head from 'next/head';
import Image from 'next/image';
//import 'bootstrap/dist/css/bootstrap.min.css';
import "bootswatch/dist/darkly/bootstrap.min.css";
import { Container, Alert } from 'react-bootstrap';

export default function Home() {
	return (
		<Container>
			<br></br>
			<Alert variant="warning">
				WARNING: The web frontend for Linearity is currently a work-in-progress and should not be expected to be stable. Because of that, Please do not use this app without knowing what you are doing.
			</Alert>
		</Container>
	);
}
