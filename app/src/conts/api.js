import AsyncStorage from '@react-native-async-storage/async-storage';
const STAGING_API = 'https://pluralcodesandbox.com/obd_final_apis/api';
const LIVE_API = 'https://0e6qi2it6h.execute-api.us-east-2.amazonaws.com/';
import Store from '../redux/store';

const getToken = async () => {
  try {
    const savedUserData = Store.getState()?.userData;
    if (savedUserData) {
      return savedUserData?.data?.token;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

const API = STAGING_API;

export {API, getToken};
