import React from 'react';
import { Album } from '../models';
import ExpandablePanel from './ui/ExpandablePanel.tsx';
import Button from './ui/Button.tsx';
import { GoTrash } from 'react-icons/go';

type AlbumDetailProps = {
  album: Album;
};

const AlbumDetail: React.FC<AlbumDetailProps> = ({ album }) => {

  const header = (
    <>
      <Button
        danger
        className="mr-3"
        icon={<GoTrash/>}
        // loading={loading}
        onClick={() => {
          // deleteUserThunk(user);
        }}
      />
      {album.name}
    </>
  );

  return (
    <ExpandablePanel header={header}>
      <div>Images of the album {album.name}</div>
    </ExpandablePanel>
  );
};

export default AlbumDetail;
