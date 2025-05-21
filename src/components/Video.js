import React, { useState } from 'react';

function Video() {
  const [isOpen, setIsOpen] = useState(false);
  const videoId = '5fUAJs1TP1o'; // Replace with your YouTube video ID
  const thumbnailUrl = `/assets/images/videoImages/video-thumbnail.PNG`;

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div
        className="video-section"
        style={{ backgroundImage: `url(${thumbnailUrl})` ,backgroundSize:'cover' }}
      >
        <button className="play-button" onClick={openModal}>
          <img
            src="/assets/images/videoImages/icon-img.png"
            alt="Play"
            className="play-icon"
          />
        </button>
      </div>

      {isOpen && (
        <div className="video-modal-overlay" onClick={closeModal}>
          <div className="video-modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>×</button>
            <iframe
              className="youtube-iframe"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="YouTube Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Video;
