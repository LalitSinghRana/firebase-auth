import React, { useRef } from "react";
import { Form, Button, Card } from "react-bootstrap";
import {  } from "../contexts/AuthContext";

export default function Signup() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();
  const {signup} = useAuth();

	return (
		<>
			<Card>
				<Card.Body>
					<h2 classNme="text-center mb-4">Sign Up</h2>
					<Form>
						<Form.Group id="email">
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" ref={emailRef}></Form.Control>
						</Form.Group>
						<Form.Group id="password">
							<Form.Label>Passowrd</Form.Label>
							<Form.Control type="password" ref={passwordRef}></Form.Control>
						</Form.Group>
						<Form.Group id="password confirm">
							<Form.Label>Confirm Password</Form.Label>
							<Form.Control
								type="password"
								ref={passwordConfirmRef}
							></Form.Control>
						</Form.Group>
						<Button className="w-100" type="submit">
							Sign Up
						</Button>
					</Form>
				</Card.Body>
			</Card>
			<div className="w-100 text-center mt-2">
				Already have an account? Log In
			</div>
		</>
	);
}
