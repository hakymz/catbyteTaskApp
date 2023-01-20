import React from 'react';
import {Svg} from '.';
import Eye from '../../../../assets/svgs/icons/eye.svg';
import BarCode from '../../../../assets/svgs/icons/barCode.svg';
import ArrowBack from '../../../../assets/svgs/icons/arrowBack.svg';
import ArrowWhite from '../../../../assets/svgs/icons/arrowWhite.svg';
import Speedometer from '../../../../assets/svgs/icons/speedometer.svg';
import Person from '../../../../assets/svgs/icons/person.svg';
import Logout from '../../../../assets/svgs/icons/logout.svg';
import Lock from '../../../../assets/svgs/icons/lock.svg';
import Phone from '../../../../assets/svgs/icons/phone.svg';
import Mobile from '../../../../assets/svgs/icons/mobile.svg';
import AngleArrow from '../../../../assets/svgs/icons/angleArrow.svg';
import Help from '../../../../assets/svgs/icons/help.svg';
import About from '../../../../assets/svgs/icons/about.svg';
import Terms from '../../../../assets/svgs/icons/terms.svg';
import Privacy from '../../../../assets/svgs/icons/privacy.svg';

const width = 30;
const height = 30;

const customStyle = props => {
  return {
    style: {
      height: props.height || props.size || height,
      width: props.width || props.size || width,
    },
    ...props,
  };
};
export const Icons = {
  Eye: ({...props}) => {
    return <Svg {...customStyle(props)} file={Eye} />;
  },
  BarCode: ({...props}) => {
    return <Svg {...customStyle(props)} file={BarCode} />;
  },
  ArrowBack: ({...props}) => {
    return <Svg {...customStyle(props)} file={ArrowBack} />;
  },
  ArrowWhite: ({...props}) => {
    return <Svg {...customStyle(props)} file={ArrowWhite} />;
  },
  Speedometer: ({...props}) => {
    return <Svg {...customStyle(props)} file={Speedometer} />;
  },
  Person: ({...props}) => {
    return <Svg {...customStyle(props)} file={Person} />;
  },
  Logout: ({...props}) => {
    return <Svg {...customStyle(props)} file={Logout} />;
  },
  Lock: ({...props}) => {
    return <Svg {...customStyle(props)} file={Lock} />;
  },
  Phone: ({...props}) => {
    return <Svg {...customStyle(props)} file={Phone} />;
  },
  Mobile: ({...props}) => {
    return <Svg {...customStyle(props)} file={Mobile} />;
  },
  AngleArrow: ({...props}) => {
    return <Svg {...customStyle(props)} file={AngleArrow} />;
  },
  Help: ({...props}) => {
    return <Svg {...customStyle(props)} file={Help} />;
  },
  About: ({...props}) => {
    return <Svg {...customStyle(props)} file={About} />;
  },
  Terms: ({...props}) => {
    return <Svg {...customStyle(props)} file={Terms} />;
  },
  Privacy: ({...props}) => {
    return <Svg {...customStyle(props)} file={Privacy} />;
  },
};
