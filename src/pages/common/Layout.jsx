// Layout.js

import React from "react";
import { Card, Button, Row, Container, Col } from "react-bootstrap";

import Sidebar from "../sidebar";

const Layout = ({ children }) => {
	return (
		<div className="container">
			<div>
				<Col xs={"4"}>
					<Sidebar />
				</Col>
				<Col xs={8}>{children}</Col>
			</div>
		</div>
	);
};

export default Layout;
