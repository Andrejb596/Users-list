import { NavLink } from "react-router-dom";
import { routs } from "../utils/objOfRouts";
import './navigation.scss';

export const Navigation = () => (
	<nav>
		<div className="container">
			<div className='row'>
				<ul className='menu'>
					<li><NavLink to={routs.Users}>Users</NavLink></li>
				</ul>
			</div>
		</div>
	</nav>
);
