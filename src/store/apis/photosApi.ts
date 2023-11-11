import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { jsonServerUrl } from '../../constants.ts';
import { Album, Photo } from '../../models';

const photosApi = createApi({
  reducerPath: 'photos',
  baseQuery: fetchBaseQuery({
    baseUrl: jsonServerUrl,
  }),
  endpoints(build) {
    return {
      fetchPhotos: build.query<Photo[], Album>({
        providesTags: (result, error, arg, meta) => {
          const albumTags = result ? result.map(a => ({ type: 'photo', id: a.id })) : [];
          albumTags.push({ type: 'album_photos', id: arg.id });
          return albumTags;
        },
        query(album) {
          return {
            url: '/photos',
            method: 'GET',
            params: {
              albumId: album.id
            }
          };
        }
      }),
      createPhoto: build.mutation<Album, Omit<Photo, 'id'>>({
        invalidatesTags: (result, error, arg, meta) => {
          return [{ type: 'album_photos', id: arg.albumId }];
        },
        query(album) {
          return {
            url: '/photos',
            method: 'POST',
            body: album
          }
        }
      }),
      deletePhoto: build.mutation<undefined, number>({
        invalidatesTags: (result, error, arg, meta) => {
          return [{ type: 'photo', id: arg }];
        },
        query(id) {
          return {
            url: `/photos/${id}`,
            method: 'DELETE',
          }
        }
      })
    };
  }
});

export const {
  useFetchPhotosQuery,
  useCreatePhotoMutation,
  useDeletePhotoMutation
} = photosApi;

export default photosApi;
