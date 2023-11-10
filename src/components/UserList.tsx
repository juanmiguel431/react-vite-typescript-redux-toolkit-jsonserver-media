import { useAppSelector } from '../hooks/store/useAppSelector.ts';
import { useActions } from '../hooks/store/useActions.ts';
import { useEffect } from 'react';
import UserDetail from './UserDetail.tsx';

const UserList = () => {

  const { getUsers } = useActions();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const users = useAppSelector(s => s.user.items);

  return (
    <div>
      {users.map(user => (
        <UserDetail key={user.id} user={user}/>
      ))}
    </div>
  );
};

export default UserList;
