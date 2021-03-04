import React from 'react';

import ContentLoader from 'react-content-loader';

const Menu: React.FC = () => {
  return (
    <ContentLoader
      backgroundColor="#e9e7e7"
      foregroundColor="#f9f6f6"
      height={100}
      speed={2}
      viewBox="0 0 500 100"
      width="100%"
    >
      <rect height="97" rx="6" ry="6" width="100%" x="0" y="0" />
    </ContentLoader>
  );
};

const Header: React.FC = () => {
  return (
    <ContentLoader
      backgroundColor="#e9e7e7"
      foregroundColor="#f9f6f6"
      height={45}
      speed={2}
      style={{
        position: 'absolute',
        left: 0,
        paddingRight: 10,
        background: '#fff',
      }}
      viewBox="0 0 210 45"
      width={210}
    >
      <rect height="40" rx="6" ry="6" width="200" x="0" y="0" />
    </ContentLoader>
  );
};

export { Menu, Header };
