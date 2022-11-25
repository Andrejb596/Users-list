import { NavLink } from "react-router-dom";
import { routs } from "../utils/objOfRouts";
import { Logo } from "../../components/Logo/Logo";
import './navigation.scss';

export const Navigation = () => {
	const activeStyle = {
		color: 'darkorchid'
	};
	return (
		<nav>
			<div className="container">
				<div className='row'>
					<Logo>Users list</Logo>
					<ul className='menu'>
						<li>
							<NavLink
								to={routs.Users}
								style={({ isActive }) =>
									isActive ? activeStyle : undefined
								}
							>Users</NavLink>
						</li>
						<li>
							<NavLink
								to={routs.AboutUs}
								style={({ isActive }) =>
									isActive ? activeStyle : undefined
								}
							>About us</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
