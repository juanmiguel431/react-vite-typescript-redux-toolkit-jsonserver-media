import React from 'react';
import { User } from '../models';
import Button from './ui/Button.tsx';
import { useActions } from '../hooks/store/useActions.ts';

type UserProps = {
  user: User;
}

const UserDetail: React.FC<UserProps> = ({ user }) => {

  const { deleteUser } = useActions();

  return (
    <div>
      {user.name}
      <Button
        danger
        onClick={() => {
          deleteUser(user);
        }}
      >Delete</Button>
    </div>
  );
};

export default UserDetail;
