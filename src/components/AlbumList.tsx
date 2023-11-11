import React from 'react';
import { faker } from '@faker-js/faker';
import { User } from '../models';
import { useFetchAlbumsQuery, useCreateAlbumMutation } from '../store/apis/albumsApi.ts';
import Skeleton from './ui/Skeleton.tsx';
import AlbumDetail from './AlbumDetail.tsx';
import Button from './ui/Button.tsx';

export type AlbumListProps = {
  user: User;
}

const AlbumList: React.FC<AlbumListProps> = ({ user }) => {
  const { data, isFetching } = useFetchAlbumsQuery(user);

  const [addAlbum, status] = useCreateAlbumMutation();

  return (
    <div>
      <Button
        primary
        loading={status.isLoading}
        onClick={() => {
          addAlbum({
            userId: user.id,
            name: faker.commerce.productName()
          });
        }}
      >Add Album</Button>
      {isFetching ? (
        <Skeleton
          times={4}
          className="h-10 w-full"
        />
      ) : data?.map(a => (
        <AlbumDetail key={a.id} album={a}/>
      ))}
    </div>
  );
};

export default AlbumList;
