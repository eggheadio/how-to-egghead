import React from 'react';

const EggheadEmbed = ({ lessonLink, lessonTitle }) => (
  <div
    style={{
      position: 'relative',
      paddingBottom: '56.2%',
    }}
  >
    <iframe
      width="100%"
      height="100%"
      src={lessonLink}
      title={lessonTitle}
      frameBorder="0"
      allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreenstyle="position: absolute;width: 100%;height: 100%;"
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
      }}
    />
  </div>
);

export default EggheadEmbed;
