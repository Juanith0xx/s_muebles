import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppBubble = () => {
  const phoneNumber = "56912345678"; // Tu número sin +

  const [bounce, setBounce] = useState(false);

  useEffect(() => {
    let timeout;
    const handleScroll = () => {
      setBounce(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setBounce(false), 500); // elimina el efecto tras 0.5s
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 bg-[#25d366] hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300 ${
        bounce ? "animate-bounce" : ""
      }`}
    >
      <FaWhatsapp className="text-3xl sm:text-4xl" />
    </a>
  );
};

export default WhatsAppBubble;
