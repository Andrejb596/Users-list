import { Routes as Switch, Route } from "react-router-dom";
import { Users } from "../pages";
import { routs } from "./utils/objOfRouts";

export const Routes = () => (
	<Switch>
		<Route path={routs.Users} element={<Users />} />
	</Switch>
);
