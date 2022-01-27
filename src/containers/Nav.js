import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Nav() {
	return (
		<>
			<link
				rel="stylesheet"
				href="https://fonts.googleapis.com/css?family=Sofia"
			/>
			<div
				style={{ display: "flex", fontFamily: "Sofia", borderBottom: "groove" }}
			>
				<img
					src="https://media.istockphoto.com/vectors/cart-trolley-vector-id1289126373"
					style={{ height: "55px", width: "55px" }}
					alt="koszyk"
				/>
				<h3 style={{ marginTop: "10px" }}>E-shop</h3>
			</div>
			<Navbar className="Nav">
				<Container style={{ justifyContent: "center" }}>
					<div style={{ margin: "auto" }}>
						<Link to="/" style={{ color: "black" }}>
							Shop
						</Link>
					</div>
					<div style={{ margin: "auto" }}> 
						<Link to="/form" style={{ color: "black" }}>
							Formularz
						</Link>
					</div>
				</Container>
			</Navbar>
		</>
	);
}
