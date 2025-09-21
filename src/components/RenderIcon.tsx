import React, { memo } from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

import { icons } from '../utils/icon';

interface RenderIconProps {
  name: string;
  size: number;
  color: string;
  pathProps?: SvgProps;
}

const RenderIcon = ({ name, size = 10, color, pathProps }: RenderIconProps) => {
  const icon =
    icons.find(item => item.name === name) ||
    icons.find(item => item.name === 'MdError');

  return (
    <Svg width={size} height={size} viewBox={icon?.viewBox || '0 0 24 24'}>
      <Path fill={color} d={icon?.d} {...pathProps} />
    </Svg>
  );
};

export default memo(RenderIcon);
