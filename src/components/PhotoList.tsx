import React from 'react';
import { useCreateAlbumMutation, useFetchAlbumsQuery } from '../store/apis/albumsApi.ts';
import Button from './ui/Button.tsx';
import { faker } from '@faker-js/faker';
import Skeleton from './ui/Skeleton.tsx';
import { Album } from '../models';
import { useCreatePhotoMutation, useFetchPhotosQuery } from '../store/apis/photosApi.ts';
import PhotoDetail from './PhotoDetail.tsx';

type PhotoListProps = {
  album: Album;
};

const PhotoList: React.FC<PhotoListProps> = ({ album }) => {
  const { data, isFetching } = useFetchPhotosQuery(album);

  const [addPhoto, status] = useCreatePhotoMutation();

  return (
    <div>
      <Button
        primary
        loading={status.isLoading}
        onClick={() => {
          addPhoto({
            albumId: album.id,
            url: faker.image.urlLoremFlickr({ category: 'abstract', width: 100, height: 100 })
          });
        }}
      >Add Photo</Button>
      {isFetching ? (
        <Skeleton
          times={4}
          className="h-10 w-full"
        />
      ) : (
        <div className="mx-8 flex flex-row flex-wrap justify-center">
          {data?.map(a => (
            <PhotoDetail key={a.id} photo={a}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default PhotoList;
