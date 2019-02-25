import axios from 'axios';

import * as appConstants from '../constants/common';

const instance = axios.create({
  responseType: 'json',
  timeout: 1000,
  baseURL: 'https://travel-app-api-sminmgr.herokuapp.com',
});

/**
 * return promise which fetch data of all location.
 */
export const getAllLocation = async () => {
  try {
    return await instance.get(appConstants.API_LOCATION_ALL);
  }
  catch (err) {
    return Promise.reject(err);
  }
}

/**
 * return promise which fetch id of favorite location from api.
 */
export const getFavoriteLocation = async () => {
  try {
    return await instance.get(appConstants.API_LOCATION_FAVORITE);
  }
  catch (err) {
    return Promise.reject(err);
  }
}

/**
 * return promise which fetch id of starred location from api.
 */
export const getStarLocation = async () => {
  try {
    return await instance.get(appConstants.API_LOCATION_STAR);
  }
  catch (err) {
    return Promise.reject(err);
  }
}

/**
 * retrun promise which change location with id to favorite location.
 */
export const toggleFavoriteLocation = async (id) => {
  try {
    return await instance.put(appConstants.API_LOCATION_ALL, { id });
  }
  catch (err) {
    return Promise.reject(err);
  }
}

export const getAllThingsToDo = async () => {
  try {
    return await instance.get(appConstants.API_THINGS_TO_DO_ALL);
  }
  catch (err) {
    return Promise.reject(err);
  }
}

/**
 * Return promise which calls review for specific place with id.
 *
 * @param {Number} id Id of an post or things to do inside location.
 */
export const getReviewsById = async (id) => {
  try {
    return await instance.get(`${appConstants.API_REVIEW}?thingsToDoId${id}`);
  }
  catch (err) {
    return Promise.reject(err);
  }
}
