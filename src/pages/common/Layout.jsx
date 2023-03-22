// Layout.js

import React from "react";
import Sidebar from "../common/Sidebar/sideBar";
import Footer from "./Footer/Footer";
import TopNavBar from "./topBar";

const Layout = ({ children }) => {
	return (
		<div className="container max-w-full w-full ">
			<div className="flex flex-col w-full bg-gradient-to-br from-sky-800 to-indigo-900 ">
				<TopNavBar showSearchBar={false} />
				<div className="flex flex-row">
					<Sidebar/>
					{children}
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
