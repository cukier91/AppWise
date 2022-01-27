import React, { useEffect } from "react";
import "../App.css";
import { Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, deleteProduct } from "../redux/actions/productActions";
import { Button, ListGroup } from "react-bootstrap";

export default function LandingPage() {
	const products = useSelector((state) => state.allProducts.products);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProducts());
	}, []);

	return (
		<React.Fragment>
			{products.length === 0 ? (
				<div className="Landing">
					<Spinner animation="border" role="status">
						<span className="visually-hidden">Loading...</span>
					</Spinner>
				</div>
			) : (
				<div className="Product-list">
					<ListGroup as="ol">
						{products.map(({ id, price, name, image_url }) => {
							return (
								
									<ListGroup.Item
										as="li"
										className="d-flex justify-content-between align-items-start"
										key={id}
									>
										<img className="List-img" src={`${image_url}`} />
										<div className="ms-2 me-auto">
											<div className="fw-bold">{name}</div>
											{price} PLN
										</div>
										<Button onClick={() => dispatch(deleteProduct(id))}>
											Usuń
										</Button>
									</ListGroup.Item>
							
							);
						})}
					</ListGroup>
				</div>
			)}
		</React.Fragment>
	);
}
