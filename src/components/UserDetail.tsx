import React from 'react';
import { GoTrash } from 'react-icons/go'
import { User } from '../models';
import Button from './ui/Button.tsx';
import { useActions } from '../hooks/store/useActions.ts';
import useThunk from '../hooks/useThunk.ts';
import ExpandablePanel from './ui/ExpandablePanel.tsx';

type UserProps = {
  user: User;
}

const UserDetail: React.FC<UserProps> = ({ user }) => {
  const { deleteUser } = useActions();
  const [deleteUserThunk, loading] = useThunk(deleteUser);

  const header = (
    <>
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
    </>
  );

  return (
    <ExpandablePanel header={header}>
      Hello
    </ExpandablePanel>
  );
};

export default UserDetail;
