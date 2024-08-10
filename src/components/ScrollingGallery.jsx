import React from 'react';
import style from './ScrollingGallery.module.css';

function ScrollingGallery({galleryItems}) {
  return (
    <div className={`${style.galleryWrapper}`}>
      <div className={style.scrollContainer}>
        {galleryItems.concat(galleryItems).map((item, index) => (
          <div key={index} className={style.galleryItem}>
            <img src={item.image} alt={item.title} className={style.galleryImage} />
            <div className={style.overlay}>
              <div className={style.overlayContent}>
                <h2 className={style.overlayTitle}>{item.title}</h2>
                <p className={style.overlayDescription}>{item.description}</p>
                <a href={item.link} className={style.overlayLink} target="_blank" rel="noopener noreferrer">
                  View Portfolio
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScrollingGallery;
