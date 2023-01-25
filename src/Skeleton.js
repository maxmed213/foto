import React from 'react';
import ContentLoader from 'react-content-loader';//Каркас загрузок

export const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={2000}
    height={460}
    viewBox="0 0 2000 460"
    backgroundColor="#c9c9c9"
    foregroundColor="#ecebeb"
  >
    <rect x="-19" y="12" rx="30" ry="30" width="318" height="429" /> 
    <rect x="330" y="7" rx="39" ry="39" width="336" height="436" />
  </ContentLoader>
);
