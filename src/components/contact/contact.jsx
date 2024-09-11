import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'; // Import icons from react-icons library
import Map from '../map/Map'; // Assuming you have a separate component for Google Maps
import ContactForm from '../contactform/ContactForm'; // Assuming you have a separate component for Contact Form

const ContactUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Contact Info Section */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          {/* Contact Details */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
            <div className="flex items-center mb-4 text-gray-300">
              <FaMapMarkerAlt className="mr-2" /> Hyderabad, Telangana, India
            </div>
            <div className="flex items-center mb-4 text-gray-300">
              <FaPhone className="mr-2" /> +91 123 456 7890
            </div>
            <div className="flex items-center mb-4 text-gray-300">
              <FaEnvelope className="mr-2" /> info@kaundinyaeducationaltrust.com
            </div>
          </div>
          {/* Google Maps */}
          <div className="md:w-1/2">
            <Map />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Get In Touch</h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
