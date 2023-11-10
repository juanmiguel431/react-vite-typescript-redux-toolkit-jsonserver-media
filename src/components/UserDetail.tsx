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
        <div className="flex flex-row items-center justify-between">
          <Button
            danger
            className="mr-3"
            icon={<GoTrash/>}
            loading={loading}
            onClick={() => {
              deleteUserThunk(user);
            }}
          />
          {user.name}
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
