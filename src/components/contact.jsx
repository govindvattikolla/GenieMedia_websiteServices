import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 9966888428'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['contact@digimarketing.com'],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: ['5A2 4th Floor KP Icon KP Infra', 'Yendada, Vishakhapatnam - 530045'],  

      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Monday - Friday: 10AM - 7PM', 'Saturday: 10AM - 4PM'],
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    
    setTimeout(() => {
      alert('Message sent successfully! We will get back to you soon.');
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .contact-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .contact-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
        }

        .form-input:focus {
          outline: none;
          border-color: #FF6B00;
          box-shadow: 0 0 0 3px rgba(255, 107, 0, 0.1);
        }

        .submit-btn {
          background: linear-gradient(135deg, #FF6B00, #FF8C3A);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .submit-btn::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: translate(-50%, -50%);
          transition: width 0.6s ease, height 0.6s ease;
        }

        .submit-btn:hover::before {
          width: 300px;
          height: 300px;
        }

        .submit-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(255, 107, 0, 0.4);
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        .icon-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      <section 
        ref={sectionRef}
        className="relative bg-gray-100 py-10 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 right-10 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className={`text-center mb-10 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 border border-orange-200 rounded-full mb-4">
              <Globe className="text-orange-500" size={16} />
              <span className="text-sm font-semibold text-orange-700">Get In Touch</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-4">
              Let's Start a <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Conversation</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible
            </p>
          </div>

          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
               style={{ animationDelay: '0.2s' }}>
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-card bg-white rounded-2xl p-6 shadow-lg">
                <div className={`icon-float w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                  <info.icon className="text-white" size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm mb-1">{detail}</p>
                ))}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12"> 

           <div className={`${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                      Send us a Message
                    </h3>

                    <form
                      action="https://formsubmit.co/contact@kkdigitalgrowth.com"
                      method="POST"
                      className="space-y-6"
                    >
                    
                      <input type="hidden" name="_template" value="table" />
                      <input type="hidden" name="_captcha" value="false" />
                      <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />
                  
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Full Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            className="form-input w-full px-4 py-3 rounded-xl border-2 border-gray-200 transition-all"
                            placeholder="John Doe"
                          />
                        </div>
                  
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Email Address
                          </label>
                          <input
                            type="email"
                            name="email"
                            
                            className="form-input w-full px-4 py-3 rounded-xl border-2 border-gray-200 transition-all"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>
                  
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            className="form-input w-full px-4 py-3 rounded-xl border-2 border-gray-200 transition-all"
                            placeholder="Enter Mobile Number"
                          />
                        </div>
                  
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Subject
                          </label>
                          <input
                            type="text"
                            name="subject"
                            className="form-input w-full px-4 py-3 rounded-xl border-2 border-gray-200 transition-all"
                            placeholder="Project Inquiry"
                          />
                        </div>
                      </div>
                  
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Your Message
                        </label>
                        <textarea
                          name="message"
                          rows="6"
                          required
                          className="form-input w-full px-4 py-3 rounded-xl border-2 border-gray-200 transition-all resize-none"
                          placeholder="Tell us about your project..."
                        ></textarea>
                      </div>
                  
                      <button
                        type="submit"
                        className="submit-btn w-full py-4 text-white font-bold rounded-xl text-lg flex items-center justify-center gap-2 relative z-10"
                      >
                        Send Message
                        <Send size={20} />
                      </button>
                    </form>
                   
                  </div>

            </div>
            

            <div className={`${isVisible ? 'animate-slideInRight' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden h-full">
                <div className="relative h-64 lg:h-80 bg-gradient-to-br from-orange-100 to-orange-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d400.67734146285284!2d83.36646125424554!3d17.780138304199394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b9f81ce4773%3A0xdb3f7e114ab5a4f3!2sKP%20ICON%20KP%20INFRA%20LLP!5e0!3m2!1sen!2sin!4v1764246017962!5m2!1sen!2si"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Office Location"
                  ></iframe>
                </div>

                

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Office</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-orange-600" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                        <p className="text-gray-600 text-sm">5A2 4th Floor KP Icon KP Infra</p>
                        <p className="text-gray-600 text-sm">Yendada, Vishakhapatnam - 530045</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Clock className="text-blue-600" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                        <p className="text-gray-600 text-sm">Monday - Friday: 10:00 AM - 7:00 PM</p>
                        <p className="text-gray-600 text-sm">Saturday: 10:00 AM - 4:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;