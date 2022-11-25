import { Routes as Switch, Route } from "react-router-dom";
import { Users, PageNotFound } from "../pages";
import { routs } from "./utils/objOfRouts";

export const Routes = () => (
	<Switch>
		<Route path={routs.Users} element={<Users />} />
		<Route path="*" element={<PageNotFound />} />
	</Switch>
);
