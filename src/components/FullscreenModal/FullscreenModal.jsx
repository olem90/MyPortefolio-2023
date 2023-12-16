import { FullscreenModalStyleWrapper } from "./FullscreenModal.style";
import React, { useEffect, useRef } from "react";

export const FullscreenModal = ({
  closeModal,
  selectedImage,
  isModalOpen,
  isLandscape,
}) => {
  if (!isModalOpen) return null;
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeModal]);

  return (
    <FullscreenModalStyleWrapper>
      <div className="modal" ref={modalRef}>
        <img
          src={selectedImage}
          alt="Fullscreen Image"
          className={isLandscape ? "landscape" : ""}
        />
        <button className="close-modal-btn" onClick={closeModal}>
          Close
        </button>
      </div>
    </FullscreenModalStyleWrapper>
  );
};
