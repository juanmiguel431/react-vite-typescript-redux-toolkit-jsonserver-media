import React from 'react';
import { GoTrash } from 'react-icons/go'
import { User } from '../models';
import Button from './ui/Button.tsx';
import { useActions } from '../hooks/store/useActions.ts';
import useThunk from '../hooks/useThunk.ts';

type UserProps = {
  user: User;
}

const UserDetail: React.FC<UserProps> = ({ user }) => {
  const { deleteUser } = useActions();
  const [deleteUserThunk, loading] = useThunk(deleteUser);

  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center">
        {user.name}
        <Button
          danger
          icon={<GoTrash/>}
          loading={loading}
          onClick={() => {
            deleteUserThunk(user);
          }}
        />
      </div>
    </div>
  );
};

export default UserDetail;
