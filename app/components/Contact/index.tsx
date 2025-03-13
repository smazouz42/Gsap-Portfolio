import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";

interface ContactSectionProps {
  contactZnx?: number;
}

const ContactSection = ({ contactZnx = 10 }: ContactSectionProps) => {
  useEffect(() => {
    console.log("Updated z-index:", contactZnx);
  }, [contactZnx]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setErrors({ email: "Invalid email address" });
      return;
    }

    if (
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    ) {
      console.log("Sending email...");
      console.log(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
      console.log(process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);
      console.log(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          e.target as HTMLFormElement,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Message sent successfully!");
          },
          (error) => {
            console.log("zamla bdat ");
            console.log(error.text);
            alert("Failed to send message, please try again later.");
          }
        );
    } else {
      alert("EmailJS configuration is missing.");
    }

    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setErrors({ email: "" });
  };

  return (
    <section className={`-section absolute top-0 w-full h-screen ${contactZnx === 60 ? "z-50" : "z-10"}`}>
      <div className="contact-section absolute top-0 w-full h-full flex flex-col justify-center items-center text-white ">
        <div className="absolute inset-0 -z-10">
          <video
            className="absolute inset-0 object-cover w-full h-full"
            src="/21.mp4"
            autoPlay
            loop
            muted
          />
          <div className="absolute inset-0 bg-black bg-opacity-80" />
        </div>

        <h2 className="text-4xl md:text-6xl font-bold mb-8">Let&apos;s Work Together</h2>
        <form className="w-full max-w-lg bg-opacity-50 p-6 rounded-lg" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              className="bg-cyan-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-cyan-600 transition"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
            <span>S4idmazouz@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faPhone} size="2x" />
            <span>+212 674402833</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;