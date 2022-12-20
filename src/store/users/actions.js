const SET_USERS = 'SET_USERS';
const START_LOADING = 'START_LOADING';
const STOP_LOADING = 'STOP_LOADING';
const ERROR_LOADING = 'ERROR_LOADING';

export const setUsers = users => ({ type: SET_USERS, payload: users });
export const startLoading = () => ({ type: START_LOADING });
export const stopLoading = () => ({ type: STOP_LOADING });
export const errorLoading = info => ({ type: ERROR_LOADING, payload: info });

export const types = {
	SET_USERS,
	START_LOADING,
	STOP_LOADING,
	ERROR_LOADING,
};
