import React from "react";
import { DiscordModalStyle } from "./DiscordModal.style";
import { DiscordModalWrapper } from "./DiscordModal.style";

export const DiscordModal = ({ isOpen, onClose, discordTag }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(discordTag);
    alert("Copied to clipboard!");
  };

  if (!isOpen) return null;

  return (
    <DiscordModalWrapper>
      <DiscordModalStyle>
        <h3>
          <strong>My Discord Tag</strong>
        </h3>
        <div className="copy-container">
          <span>{discordTag}</span>
          <button className="copy-btn" onClick={copyToClipboard}>
            Copy
          </button>
        </div>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </DiscordModalStyle>
    </DiscordModalWrapper>
  );
};
