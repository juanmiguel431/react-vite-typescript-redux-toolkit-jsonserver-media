import React from 'react';
import { User } from '../models';
import { useFetchAlbumsQuery } from '../store';
import Skeleton from './ui/Skeleton.tsx';
import AlbumDetail from './AlbumDetail.tsx';

export type AlbumListProps = {
  user: User;
}

const AlbumList: React.FC<AlbumListProps> = ({ user }) => {
  const { data, isFetching } = useFetchAlbumsQuery(user);

  if (isFetching) {
    return (
      <Skeleton
        times={4}
        className="h-10 w-full"
      />
    );
  }

  return data?.map(a => (
    <AlbumDetail key={a.id} album={a} />
  ));

};

export default AlbumList;
