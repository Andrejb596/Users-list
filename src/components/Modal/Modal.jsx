import PropTypes from 'prop-types';
import style from "./modal.module.scss";

export const Modal = ({ children, active, setActive }) => (
	<div className={active ? `${style.modal} ${style.active}` : `${style.modal}`}>
		<form className={active ? `${style.content} ${style.active}` : `${style.content}`}>
			{children}
			<div className={style.buttonContainer}>
				<button className={style.buttonCancel} type='button' onClick={() => setActive(false)}>No, cancel</button>
				<button className={style.buttonConfirm} type='submit'>Yes, confirm</button>
			</div>
		</form>
	</div>
);

Modal.propTypes = {
	children: PropTypes.string,
	active: PropTypes.bool,
	setActive: PropTypes.func
};
