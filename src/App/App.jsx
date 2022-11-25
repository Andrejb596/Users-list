import { HashRouter } from "react-router-dom";
import { Navigation } from "../routes/Navigation/Navigation";
import { Routes } from "../routes/Routes";
import style from "./app.module.scss";

export const App = () => (
	<div className={style.app}>
		<HashRouter >
			<Navigation />
			<Routes />
		</HashRouter>
	</div>
);
