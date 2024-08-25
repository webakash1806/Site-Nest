import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Import the WhatsApp icon

const WhatsAppIconWithLink = () => {
    const phoneNumber = "+91 6207234759"; // Replace with your phone number
    const message = "Hello! I would like to inquire about your services."; // Replace with your default message

    return (
        <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`} // WhatsApp API link
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // Security feature to prevent access to window.opener
            className="flex items-center text-green-500 hover:text-green-700"
        >
            <FaWhatsapp size={24} /> {/* WhatsApp icon */}
            <span className="ml-2">Chat with Us</span> {/* Optional text */}
        </a>
    );
};

export default WhatsAppIconWithLink;
