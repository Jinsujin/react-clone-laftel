import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import ImagesZoom from '../ImagesZoom';

const AniThumbnailImage = ({ image }) => {
  const [showImagesZoom, setShowImagesZoom] = useState(false);

  const onZoom = useCallback(() => {
    setShowImagesZoom(true);
  }, []);

  const onClose = useCallback(() => {
    setShowImagesZoom(false);
  }, []);

  return (
    <>
      <img role="presentation" src={image} alt={image} onClick={onZoom} />
      {/* 이미지 확대해서 보기 */}
      {/* {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />} */}
    </>
  );
};

AniThumbnailImage.propTypes = {
  image: PropTypes.string.isRequired,
};

export default AniThumbnailImage;
