import {Dimensions, Platform} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
const {width, height} = Dimensions.get('window');

const GENERAL = {
  statusBarHeight: getStatusBarHeight(),
  platform: Platform.OS,
  space: 20,
  horizontalSpace: 20,
  screenWidth: width,
  screenHeight: height,
  landScape: 'landscape',
  portrait: 'portrait',
};

export default GENERAL;
