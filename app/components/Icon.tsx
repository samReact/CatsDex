import React from 'react';
import {SvgXml} from 'react-native-svg';
import listIcon from '../assets/icons/list.svg';
import plusIcon from '../assets/icons/plus-circle.svg';
import mapIcon from '../assets/icons/map-pin.svg';
import arrowIcon from '../assets/icons/arrow-left.svg';
import maleIcon from '../assets/icons/male.svg';
import femaleIcon from '../assets/icons/female.svg';
import swipeIcon from '../assets/icons/swipe.svg';
import closeIcon from '../assets/icons/x.svg';
import editIcon from '../assets/icons/edit.svg';
import trashIcon from '../assets/icons/trash.svg';

type IconProps = {
  name: string;
  color: string;
};

const Icon: React.FC<IconProps> = ({name, color}) => {
  switch (name) {
    case 'list':
      return <SvgXml xml={listIcon} color={color} width="28" height="28" />;
    case 'plus':
      return <SvgXml xml={plusIcon} color={color} width="28" height="28" />;
    case 'map':
      return <SvgXml xml={mapIcon} color={color} width="28" height="28" />;
    case 'arrow':
      return <SvgXml xml={arrowIcon} color={color} width="28" height="28" />;
    case 'male':
      return <SvgXml xml={maleIcon} color={color} width="22" height="22" />;
    case 'female':
      return <SvgXml xml={femaleIcon} color={color} width="22" height="22" />;
    case 'swipe':
      return <SvgXml xml={swipeIcon} color={color} width="44" height="44" />;
    case 'close':
      return <SvgXml xml={closeIcon} color={color} width="28" height="28" />;
    case 'edit':
      return <SvgXml xml={editIcon} color={color} width="22" height="22" />;
    case 'trash':
      return <SvgXml xml={trashIcon} color={color} width="22" height="22" />;
    default:
      return <SvgXml xml={mapIcon} color={color} width="28" height="28" />;
  }
};

export default Icon;
