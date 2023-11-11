import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { jsonServerUrl } from '../../constants.ts';
import { Album, User } from '../../models';

const albumsApi = createApi({
  reducerPath: 'albums',
  baseQuery: fetchBaseQuery({
    baseUrl: jsonServerUrl,
  }),
  endpoints(build) {
    return {
      fetchAlbums: build.query<Album[], User>({
        query(user){
          return {
            url: '/albums',
            method: 'GET',
            params: {
              userId: user.id
            }
          };
        }
      }),
    };
  }
});

export default albumsApi;
