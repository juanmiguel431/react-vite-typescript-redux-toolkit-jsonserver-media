import { useAppSelector } from '../hooks/store/useAppSelector.ts';
import { useActions } from '../hooks/store/useActions.ts';
import { useEffect } from 'react';

const UserList = () => {

  const { getUsers } = useActions();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const users = useAppSelector(s => s.user.items);

  return (
    <div>
      {users.map(u => (
        <div key={u.id}>{u.name}</div>
      ))}
    </div>
  );
};

export default UserList;
