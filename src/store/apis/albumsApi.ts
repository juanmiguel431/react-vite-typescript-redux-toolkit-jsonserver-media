import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { jsonServerUrl } from '../../constants.ts';
import { Album, User } from '../../models';

const albumsApi = createApi({
  reducerPath: 'albums',
  // tagTypes: ['Album'],
  baseQuery: fetchBaseQuery({
    baseUrl: jsonServerUrl,
  }),
  endpoints(build) {
    return {
      fetchAlbums: build.query<Album[], User>({
        providesTags: (result, error, arg, meta) => {
          const albumTags = result ? result.map(a => ({ type: 'album', id: a.id })) : [];
          albumTags.push({ type: 'user_albums', id: arg.id });
          return albumTags;
        },
        query(user) {
          return {
            url: '/albums',
            method: 'GET',
            params: {
              userId: user.id
            }
          };
        }
      }),
      createAlbum: build.mutation<Album, Omit<Album, 'id'>>({
        invalidatesTags: (result, error, arg, meta) => {
          return [{ type: 'user_albums', id: arg.userId }];
        },
        query(album) {
          return {
            url: '/albums',
            method: 'POST',
            body: album
          }
        }
      }),
      deleteAlbum: build.mutation<undefined, number>({
        invalidatesTags: (result, error, arg, meta) => {
          return [{ type: 'album', id: arg }];
        },
        query(id) {
          return {
            url: `/albums/${id}`,
            method: 'DELETE',
          }
        }
      })
    };
  }
});

export const {
  useFetchAlbumsQuery,
  useCreateAlbumMutation,
  useDeleteAlbumMutation
} = albumsApi;

export default albumsApi;
