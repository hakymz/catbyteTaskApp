import {API, getToken} from '../../conts/api';

import {Preloader} from '../../view/components/loaders';
import axios from 'axios';
import qs from 'qs';
import Store from '../../redux/store';

import Toast from '../../view/components/toast/Toast';
import {
  updateBottomSheet,
  updateDrawer,
  updateLoggedIn,
  updateUser,
} from '../../redux/slices';

const baseURL = API;

let controller = new AbortController();

const instance = axios.create({
  baseURL,
  responseType: 'json',
  signal: controller.signal,
});

export const fetchRequest = async ({
  path,
  data = undefined,
  method = 'POST',
  showLoader = true,
  displayMessage = true,
}) => {
  instance.interceptors.request.use(
    function (config) {
      if (config.signal) {
        controller = new AbortController();
        config.signal = controller.signal;
      }
      // Do something before request is sent
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    },
  );
  const token = await getToken();
  if (token) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  //Show the preloader by default
  if (showLoader) {
    Preloader.show();
  }

  try {
    let response;
    if (method == 'POST') {
      response = await instance.post(path, qs.stringify(data));
    } else if (method == 'PUT') {
      response = await instance.put(path, qs.stringify(data));
    } else if (method == 'DELETE') {
      response = await instance.delete(path, qs.stringify(data));
    } else {
      response = await instance.get(path);
    }

    return response?.data;
  } catch (error) {
    const {data, status} = error?.response || {};

    if (status == 401) {
      Toast.show('error', 'Something went wrong, please login');
      Store.dispatch(updateUser({}));
      Store.dispatch(updateLoggedIn(false));
      Store.dispatch(updateBottomSheet({visible: false}));
      Store.dispatch(updateDrawer({visible: false}));
      controller.abort();
    }

    // controller.signal();
    if (data?.error) {
      displayMessage && Toast.show('error', data?.error);
    } else {
      displayMessage &&
        Toast.show('error', data?.message || 'Something went wrong!');
    }

    throw error;
  } finally {
    if (showLoader) {
      Preloader.hide();
    }
  }
};
