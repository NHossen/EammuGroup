import React from "react";

const WhatsAppFloatingButton = () => {
  const phoneNumber = "+971507078334";
  const message = encodeURIComponent("Hello, I would like to inquire about your services.");
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^\d]/g, "")}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-[#25D366] to-[#128C7E] shadow-lg rounded-full p-4 hover:scale-110 transition-transform duration-300 ease-in-out animate-pulse-slow"
      style={{ boxShadow: "0 6px 12px rgba(37, 211, 102, 0.6)" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        fill="white"
        viewBox="0 0 24 24"
      >
        <path d="M20.52 3.48A11.92 11.92 0 0012 0C5.37 0 0 5.37 0 12c0 2.1.55 4.15 1.6 5.96L0 24l6.32-1.57A11.95 11.95 0 0012 24c6.63 0 12-5.37 12-12 0-3.22-1.26-6.23-3.48-8.52zM12 21.6a9.45 9.45 0 01-4.86-1.44l-.35-.21-3.76.94.98-3.68-.23-.36a9.36 9.36 0 01-1.45-4.85c0-5.15 4.18-9.33 9.33-9.33 2.49 0 4.83.97 6.58 2.73a9.28 9.28 0 012.72 6.6c0 5.15-4.18 9.33-9.33 9.33z" />
        <path d="M17.44 14.6c-.28-.14-1.66-.82-1.92-.91-.26-.08-.45-.14-.64.14-.2.28-.77.91-.95 1.1-.18.2-.36.22-.66.08a7.77 7.77 0 01-2.28-1.4 8.48 8.48 0 01-1.57-1.94c-.17-.29-.02-.45.13-.6.14-.14.3-.37.45-.55a1.1 1.1 0 00.15-.25c.05-.09.02-.17-.01-.24-.04-.08-.64-1.55-.88-2.12-.23-.55-.46-.48-.64-.49a1.7 1.7 0 00-.49-.05c-.16 0-.37.05-.56.25-.19.2-.74.72-.74 1.76s.76 2.04.87 2.18c.11.13 1.5 2.28 3.63 3.2a3.95 3.95 0 001.64.56c.69 0 1.19-.22 1.54-.46.47-.3.94-.82 1.07-1.62.12-.8.12-1.49.09-1.64-.03-.16-.12-.26-.26-.37z" />
      </svg>
    </a>
  );
};

export default WhatsAppFloatingButton;
