import {Linking} from 'react-native';
import Toast from '../../view/components/toast/Toast';

export const openLink = async url => {
  const supported = await Linking.canOpenURL(url);
  if (supported) {
    await Linking.openURL(url);
  } else {
    Toast.show('error', `Don't know how to open this URL: ${url}`);
  }
};
