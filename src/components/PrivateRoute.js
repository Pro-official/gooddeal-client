import React from "react";
import { Route, Redirect } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
	const { user, isLoading } = useAuth();
	if (isLoading) {
		return <BeatLoader loading={isLoading} size={30} />;
	}
	return (
		<Route
			{...rest}
			render={({ location }) =>
				user.email ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/login",
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
};

export default PrivateRoute;
