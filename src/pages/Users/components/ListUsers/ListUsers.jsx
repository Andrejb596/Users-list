import { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setUsers, startLoading, stopLoading, errorLoading } from '../../../../store/users';

const src = 'https://jsonplaceholder.typicode.com/users';

export const ListUsers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLoading());
    axios
      .get(src)
      .then(data => {
        dispatch(setUsers(data.data));
      })
      .catch(e => {
        dispatch(errorLoading(e.message));
      })
      .finally(() => {
        dispatch(stopLoading());
      });
  }, []);

  const users = useSelector(state => state.user.list);
  const isLoading = useSelector(state => state.user.isLoading);
  const isError = useSelector(state => state.user.isError);
  const isErrorInfo = useSelector(state => state.user.infoError);

  if (isLoading) {
    return <h3>Loading....</h3>;
  }

  if (isError) {
    return <h3>{isErrorInfo}</h3>;
  }

  return (
    <ul>
      {users.length > 1 ? (
        users.map(({ id, name }) => (
          <li key={id}>
            <p>{name}</p>
          </li>
        ))
      ) : (
        <h3 className="error">The user list is empty</h3>
      )}
    </ul>
  );
};
