import axios from 'axios';

import * as appConstants from '../constants/common';

const instance = axios.create({
  responseType: 'json',
  timeout: 1000,
  baseURL: 'https://travel-app-api-sminmgr.herokuapp.com/location',
});

/**
 * return promise which fetch data of all location.
 */
export const getAllLocation = async () => {
  try {
    return await instance.get();//(appConstants.API_LOCATION_ALL);
  }
  catch (err) {
    return Promise.reject(err);
  }
}
