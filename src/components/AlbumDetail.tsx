import React from 'react';
import { Album } from '../models';
import ExpandablePanel from './ui/ExpandablePanel.tsx';
import Button from './ui/Button.tsx';
import { GoTrash } from 'react-icons/go';
import { useDeleteAlbumMutation } from '../store/apis/albumsApi.ts';

type AlbumDetailProps = {
  album: Album;
};

const AlbumDetail: React.FC<AlbumDetailProps> = ({ album }) => {

  const [deleteAlbum, state] = useDeleteAlbumMutation();

  const header = (
    <>
      <Button
        danger
        className="mr-3"
        icon={<GoTrash/>}
        loading={state.isLoading}
        onClick={() => {
          deleteAlbum(album.id);
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
