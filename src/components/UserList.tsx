import { useAppSelector } from '../hooks/store/useAppSelector.ts';
import { useActions } from '../hooks/store/useActions.ts';
import { useEffect } from 'react';
import UserDetail from './UserDetail.tsx';
import useThunk from '../hooks/useThunk.ts';
import Skeleton from './ui/Skeleton.tsx';
import Button from './ui/Button.tsx';

const UserList = () => {
  const { getUsers } = useActions();
  const [getUsersThunk, isLoading, error] = useThunk(getUsers);

  useEffect(() => {
    getUsersThunk();
  }, [getUsersThunk]);

  const users = useAppSelector(s => s.user.items);

  return (
    <div>
      <Button
        secondary
        loading={isLoading}
        onClick={() => {
          getUsersThunk();
        }}
      >Reload</Button>

      {isLoading ? (
        <Skeleton times={10} className="h-10 w-full"/>
      ): (
        users.map(user => (
            <UserDetail key={user.id} user={user}/>
        ))
      )}
    </div>
  );
};

export default UserList;
