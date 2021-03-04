import React from 'react';

import { PulseLoader } from 'react-spinners';

interface Props {
  color?: string;
  size?: number;
}

const Button: React.FC<Props> = ({ color = '#FFF', size = 10 }) => {
  return <PulseLoader color={color} loading size={size} />;
};

export default Button;
