import React from 'react';
import { Photo } from '../models';

type PhotoDetailProps = {
  photo: Photo;
};

const PhotoDetail: React.FC<PhotoDetailProps> = ({ photo }) => {
  return (
    <div>{photo.url}</div>
  );
};

export default PhotoDetail;
