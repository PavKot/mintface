import React from 'react';
import './TelegramButton.css';

const TelegramButton = () => (
  <a
    href="https://t.me/appmintface"
    className="telegram-btn"
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="telegram-icon">
      <circle cx="12" cy="12" r="12" fill="#229ED9"/>
      <path d="M17.5 7.5L15.5 17.5C15.5 17.5 15.25 18 14.75 18C14.5 18 14.25 17.75 14 17.5L11.5 15.5L10.25 16.75C10.25 16.75 10 17 9.75 17C9.5 17 9.5 16.75 9.5 16.5L9.5 13.5L15.5 8.5C15.5 8.5 15.75 8.25 15.5 8C15.25 7.75 14.75 8 14.75 8L7.5 10.5C7.5 10.5 7 10.75 7 11.25C7 11.75 7.75 12 7.75 12L10.25 12.75L13.5 15.5L15.5 7.5Z" fill="white"/>
    </svg>
    Join our Telegram
  </a>
);

export default TelegramButton;
