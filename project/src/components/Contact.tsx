import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, Linkedin, Send, X } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
  // Initialize EmailJS with your User ID
  useEffect(() => {
    emailjs.init('YOUR_USER_ID'); // Replace with your EmailJS User ID
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    date: '',
    timeSlot: '',
    package: '',
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<{ message: string; type: 'success' | 'error' | '' }>({
    message: '',
    type: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (modalOpen) {
      setBookingData({ ...bookingData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs
      .send(
        'service_jmez3tj', // Your provided Service ID
        'YOUR_CONTACT_TEMPLATE_ID', // Replace with your Contact Form Template ID
        formData,
        'YOUR_USER_ID' // Replace with your EmailJS User ID
      )
      .then(
        () => {
          setFormStatus({ message: 'Message sent successfully!', type: 'success' });
          setFormData({ name: '', email: '', phone: '', message: '' });
          setTimeout(() => setFormStatus({ message: '', type: '' }), 5000);
        },
        (error) => {
          setFormStatus({ message: `Failed to send message: ${error.text}`, type: 'error' });
        }
      );
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs
      .send(
        'service_jmez3tj', // Your provided Service ID
        'YOUR_BOOKING_TEMPLATE_ID', // Replace with your Booking Form Template ID
        bookingData,
        'YOUR_USER_ID' // Replace with your EmailJS User ID
      )
      .then(
        () => {
          setFormStatus({ message: 'Booking request sent successfully!', type: 'success' });
          setBookingData({ name: '', email: '', phone: '', message: '', date: '', timeSlot: '', package: '' });
          setModalOpen(false);
          setTimeout(() => setFormStatus({ message: '', type: '' }), 5000);
        },
        (error) => {
          setFormStatus({ message: `Failed to send booking: ${error.text}`, type: 'error' });
        }
      );
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => {
    setModalOpen(false);
    setFormStatus({ message: '', type: '' });
  };

  // Sample time slots (based on availability: Mon-Fri 6AM-8PM, Sat-Sun 8AM-6PM)
  const timeSlots = [
    '6:00 AM - 7:00 AM',
    '7:00 AM - 8:00 AM',
    '8:00 AM - 9:00 AM',
    '4:00 PM - 5:00 PM',
    '5:00 PM - 6:00 PM',
    '6:00 PM - 7:00 PM',
    '7:00 PM - 8:00 PM',
  ];

  // Packages (from Services component)
  const packages = ['Personal Training', 'Group Training', 'Nutrition Coaching', 'HIIT Programs'];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-cream relative overflow-x-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23035A52' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6 font-ibarra relative">
              Start Your Transformation Today
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-primary animate-pulse-glow" />
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-glacial">
              Ready to take the first step towards a healthier, stronger you? Let's discuss your fitness goals and create a personalized plan.
            </p>
          </div>

          {/* Form Status Message */}
          {formStatus.message && (
            <div
              className={`mb-6 p-4 rounded-lg text-center font-glacial text-sm sm:text-base ${
                formStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}
            >
              {formStatus.message}
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Form */}
            <div className="bg-white bg-opacity-90 p-6 sm:p-8 rounded-xl shadow-2xl border-2 border-primary animate-scale-in">
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-6 font-ibarra">Get In Touch</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm sm:text-base font-medium text-primary mb-2 font-glacial">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white bg-opacity-90 border border-primary rounded-lg focus:outline-none focus:border-accent text-primary transition-all duration-300 font-glacial"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm sm:text-base font-medium text-primary mb-2 font-glacial">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white bg-opacity-90 border border-primary rounded-lg focus:outline-none focus:border-accent text-primary transition-all duration-300 font-glacial"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm sm:text-base font-medium text-primary mb-2 font-glacial">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white bg-opacity-90 border border-primary rounded-lg focus:outline-none focus:border-accent text-primary transition-all duration-300 font-glacial"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm sm:text-base font-medium text-primary mb-2 font-glacial">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-white bg-opacity-90 border border-primary rounded-lg focus:outline-none focus:border-accent text-primary resize-none transition-all duration-300 font-glacial"
                    placeholder="Tell me about your fitness goals and any specific requirements..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent text-primary py-3 sm:py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center transform hover:scale-105 hover:bg-yellow-400 font-glacial"
                  aria-label="Send message"
                >
                  <Send className="w-5 h-5 sm:w-6 sm:h-6 text-primary mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white bg-opacity-90 p-6 sm:p-8 rounded-xl shadow-2xl border-2 border-primary animate-scale-in">
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-6 font-ibarra">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-accent mr-4" />
                    <div>
                      <p className="text-gray-600 text-sm sm:text-base font-glacial">Email</p>
                      <p className="text-primary font-medium font-glacial">dickson.cadiet@email.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-accent mr-4" />
                    <div>
                      <p className="text-gray-600 text-sm sm:text-base font-glacial">Phone</p>
                      <p className="text-primary font-medium font-glacial">+254 710 841 781</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-accent mr-4" />
                    <div>
                      <p className="text-gray-600 text-sm sm:text-base font-glacial">Location</p>
                      <p className="text-primary font-medium font-glacial">Gilgil, Kenya</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-accent mr-4" />
                    <div>
                      <p className="text-gray-600 text-sm sm:text-base font-glacial">Availability</p>
                      <p className="text-primary font-medium font-glacial">Mon-Fri: 6AM-8PM | Sat-Sun: 8AM-6PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white bg-opacity-90 p-6 sm:p-8 rounded-xl shadow-2xl border-2 border-primary animate-scale-in">
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 font-ibarra">Follow Me</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-accent text-primary p-3 sm:p-4 rounded-lg transition-all duration-300 transform hover:scale-110 hover:bg-yellow-400"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6 sm:w-7 sm:h-7" />
                  </a>
                  <a
                    href="#"
                    className="bg-accent text-primary p-3 sm:p-4 rounded-lg transition-all duration-300 transform hover:scale-110 hover:bg-yellow-400"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6 sm:w-7 sm:h-7" />
                  </a>
                  <a
                    href="#"
                    className="bg-accent text-primary p-3 sm:p-4 rounded-lg transition-all duration-300 transform hover:scale-110 hover:bg-yellow-400"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6 sm:w-7 sm:h-7" />
                  </a>
                </div>
              </div>

              <div className="bg-white bg-opacity-90 p-6 sm:p-8 rounded-xl shadow-2xl border-2 border-primary animate-scale-in">
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 font-ibarra">Free Consultation</h3>
                <p className="text-gray-600 mb-4 font-glacial leading-relaxed text-sm sm:text-base">
                  Schedule a complimentary 30-minute consultation to discuss your fitness goals and learn how I can help you achieve them.
                </p>
                <button
                  onClick={openModal}
                  className="bg-accent text-primary px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 font-glacial"
                  aria-label="Book free consultation"
                >
                  Book Free Session
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Booking */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          role="dialog"
          aria-labelledby="booking-modal-title"
          onClick={closeModal}
        >
          <div
            className="bg-cream p-6 sm:p-8 rounded-xl shadow-2xl border-2 border-primary max-w-lg w-full mx-4 animate-scale-in relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-primary hover:text-accent transition-all duration-300"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 id="booking-modal-title" className="text-xl sm:text-2xl font-bold text-primary mb-6 font-ibarra">
              Book Your Free Consultation
            </h3>
            <form onSubmit={handleBookingSubmit} className="space-y-6">
              <div>
                <label htmlFor="booking-name" className="block text-sm sm:text-base font-medium text-primary mb-2 font-glacial">
                  Full Name
                </label>
                <input
                  type="text"
                  id="booking-name"
                  name="name"
                  value={bookingData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white bg-opacity-90 border border-primary rounded-lg focus:outline-none focus:border-accent text-primary transition-all duration-300 font-glacial"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="booking-email" className="block text-sm sm:text-base font-medium text-primary mb-2 font-glacial">
                  Email Address
                </label>
                <input
                  type="email"
                  id="booking-email"
                  name="email"
                  value={bookingData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white bg-opacity-90 border border-primary rounded-lg focus:outline-none focus:border-accent text-primary transition-all duration-300 font-glacial"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="booking-phone" className="block text-sm sm:text-base font-medium text-primary mb-2 font-glacial">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="booking-phone"
                  name="phone"
                  value={bookingData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white bg-opacity-90 border border-primary rounded-lg focus:outline-none focus:border-accent text-primary transition-all duration-300 font-glacial"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label htmlFor="booking-date" className="block text-sm sm:text-base font-medium text-primary mb-2 font-glacial">
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="booking-date"
                  name="date"
                  value={bookingData.date}
                  onChange={handleInputChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 bg-white bg-opacity-90 border border-primary rounded-lg focus:outline-none focus:border-accent text-primary transition-all duration-300 font-glacial"
                />
              </div>
              <div>
                <label htmlFor="booking-time" className="block text-sm sm:text-base font-medium text-primary mb-2 font-glacial">
                  Preferred Time Slot
                </label>
                <select
                  id="booking-time"
                  name="timeSlot"
                  value={bookingData.timeSlot}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white bg-opacity-90 border border-primary rounded-lg focus:outline-none focus:border-accent text-primary transition-all duration-300 font-glacial"
                >
                  <option value="" disabled>
                    Select a time slot
                  </option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="booking-package" className="block text-sm sm:text-base font-medium text-primary mb-2 font-glacial">
                  Package
                </label>
                <select
                  id="booking-package"
                  name="package"
                  value={bookingData.package}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white bg-opacity-90 border border-primary rounded-lg focus:outline-none focus:border-accent text-primary transition-all duration-300 font-glacial"
                >
                  <option value="" disabled>
                    Select a package
                  </option>
                  {packages.map((pkg) => (
                    <option key={pkg} value={pkg}>
                      {pkg}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="booking-message" className="block text-sm sm:text-base font-medium text-primary mb-2 font-glacial">
                  Additional Information
                </label>
                <textarea
                  id="booking-message"
                  name="message"
                  value={bookingData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white bg-opacity-90 border border-primary rounded-lg focus:outline-none focus:border-accent text-primary resize-none transition-all duration-300 font-glacial"
                  placeholder="Any specific requirements or goals..."
                />
              </div>
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="w-full bg-accent text-primary py-3 sm:py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center transform hover:scale-105 hover:bg-yellow-400 font-glacial"
                  aria-label="Submit booking"
                >
                  <Send className="w-5 h-5 sm:w-6 sm:h-6 text-primary mr-2" />
                  Submit Booking
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="w-full bg-gray-600 text-white py-3 sm:py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center transform hover:scale-105 font-glacial"
                  aria-label="Cancel booking"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};