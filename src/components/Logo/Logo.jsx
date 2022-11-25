import PropTypes from 'prop-types';
import style from './logo.module.scss';
import logo from '../../assets/icon.png';
import { links } from "../../data/data";

export const Logo = ({ children }) => (
	<a href={links.firstLink} className={style.logo}>
		<img src={logo} alt="logo" />
		<span>{children}</span>
	</a>
);

Logo.propTypes = {
	children: PropTypes.string
};
