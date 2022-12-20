import style from './users.module.scss';
import { ListUsers } from './components/ListUsers/ListUsers';

export default function Users() {
  return (
    <div className={`page ${style.users}`}>
      <div className="container">
        <ListUsers />
      </div>
    </div>
  );
}
