import React from 'react';
import { User } from '../models';

export type AlbumListProps = {
  user: User;
}

const AlbumList: React.FC<AlbumListProps> = ({ user }) => {
  return (
    <div>Albums for {user.name}</div>
  );
};

export default AlbumList;
