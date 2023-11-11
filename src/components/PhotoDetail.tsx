import React from 'react';
import { Photo } from '../models';
import { useDeletePhotoMutation } from '../store/apis/photosApi.ts';
import { GoTrash } from 'react-icons/go';
import Button from './ui/Button.tsx';
import classNames from 'classnames';

type PhotoDetailProps = {
  photo: Photo;
};

const PhotoDetail: React.FC<PhotoDetailProps> = ({ photo }) => {
  const [deletePhoto, state] = useDeletePhotoMutation();

  const className = classNames(
    'absolute inset-0 flex items-center justify-center',
    {
      'opacity-0 hover:bg-gray-200 hover:opacity-80': !state.isLoading,
      'opacity-80 bg-gray-200': state.isLoading
    }
  );

  return (
    <div className="relative m-2 cursor-pointer" onClick={() => deletePhoto(photo.id)}>
      <img src={photo.url} alt="random pic" className="h-20 w-30"/>
      <div className={className}>
        <Button icon={<GoTrash className="text-3xl"/>} loading={state.isLoading}/>
      </div>
    </div>
  );
};

export default PhotoDetail;
