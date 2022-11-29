import PropTypes from 'prop-types';
import './demoView.scss';

export const DemoView = ({ children }) => (
	<div className="demoViewContainer">
		<h1>{children}</h1>
	</div>
);

DemoView.propTypes = {
	children: PropTypes.string
};
