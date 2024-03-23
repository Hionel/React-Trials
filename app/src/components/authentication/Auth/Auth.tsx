import React from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";

import "./Auth.module.scss";
// base imports
import BaseContainer from "../../UI/BaseContainer";
import BaseCard from "../../UI/BaseCard";

// components
import Login from "../Login/Login";
import Register from "../Register/Register";

const Auth = () => {
	return (
		<>
			<BaseContainer additionalClasses="flexCentered">
				<BaseCard additionalClasses="flexCentered">
					<Routes>
						<Route path="/login" Component={Login}></Route>
						<Route path="/registration" Component={Register}></Route>
					</Routes>
				</BaseCard>
			</BaseContainer>
		</>
	);
};

export default Auth;
