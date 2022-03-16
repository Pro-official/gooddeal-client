import React from "react";
import { useHistory } from "react-router-dom";
import Hero from "../../components/Hero";
import useAuth from "../../Hooks/useAuth";

const Home = () => {
	const { user } = useAuth();
	const history = useHistory();

	return (
		<>
			{user.email ? (
				<div>
					<Hero />
				</div>
			) : (
				history.push("/login")
			)}
		</>
	);
};

export default Home;
