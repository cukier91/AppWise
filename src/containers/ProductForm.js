import React, { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import "../App.css";
import { AddProduct, deleteProduct } from "../redux/actions/productActions";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ProductForm() {
	const [displayAlert, setDisplayAlert] = useState("none");
	const [form, setForm] = useState({
		name: "",
		description: "",
		price: "",
		image_url: "",
	});
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prevState) => {
			return {
				...prevState,
				[name]: value,
			};
		});
	};

	function validator({ name, price, description, image_url }) {
		const nonWhiteSpaceRGEX = /\S+/;
		const urlRGEX =
			/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

		const nameR = nonWhiteSpaceRGEX.test(name);
		const priceR = nonWhiteSpaceRGEX.test(price);
		const descriptionR = nonWhiteSpaceRGEX.test(description);
		const imgUrlR = nonWhiteSpaceRGEX.test(image_url);
		const urlResult = urlRGEX.test(image_url);

		if (!nameR || !priceR || !descriptionR || !imgUrlR || !urlResult) {
			return false;
		} else {
			return true;
		}
	}

	function addProduct(e, product) {
		e.preventDefault();
		if (!validator(product)) {
			return setDisplayAlert("block");
		} else {
			dispatch(AddProduct(product));
			navigate("/");
		}
	}

	return (
		<div className="App-header">
			<Form className="Form-container">
				<Alert
					variant={"danger"}
					style={{ fontSize: "80%", display: displayAlert }}
				>
					Wprowadzone dane są niepoprawne
				</Alert>
				<Form.Group className="mb-3" controlId="exampleForm.ControlTextName">
					<Form.Control
						name="name"
						value={form.name}
						type="text"
						placeholder="Nazwa"
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group
					className="mb-3"
					controlId="exampleForm.ControlTextAreDescription"
				>
					<Form.Control
						name="description"
						value={form.description}
						as="textarea"
						rows={3}
						placeholder="Opis"
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="exampleForm.ControlTextPrice">
					<Form.Control
						name="price"
						value={form.price}
						type="number"
						placeholder="Cena"
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="exampleForm.ControlTextLink">
					<Form.Control
						name="image_url"
						value={form.image_url}
						type="text"
						placeholder="Link"
						onChange={handleChange}
					/>
				</Form.Group>

				<Button
					variant="primary"
					type="submit"
					style={{ marginLeft: "70%" }}
					onClick={(e) => {
						addProduct(e, form);
					}}
				>
					Submit
				</Button>
			</Form>

			<div className="Form-img">
				{form.image_url === "" ? null : (
					<img className="Scale-img" src={`${form.image_url}`} />
				)}
			</div>
		</div>
	);
}
