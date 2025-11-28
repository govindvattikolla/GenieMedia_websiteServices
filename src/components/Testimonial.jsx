import React, { useState, useEffect, useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechStartup Inc",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      rating: 5,
      text: "Working with this team has been absolutely transformative for our business. Their innovative approach to digital marketing helped us achieve a 300% increase in online engagement within just three months. Highly recommended!"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Marketing Director, E-Shop Global",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      rating: 5,
      text: "The level of professionalism and creativity they bring to every project is outstanding. They understood our vision perfectly and delivered results beyond our expectations. Our ROI has never been better!"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Founder, Fashion Forward",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      rating: 5,
      text: "From strategy to execution, everything was flawless. The team's expertise in UI/UX design and digital marketing helped us create a stunning online presence that our customers absolutely love. A game-changer for our brand!"
    },
    {
      id: 4,
      name: "David Park",
      role: "CTO, InnovateTech Solutions",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      rating: 5,
      text: "Their technical prowess combined with creative thinking makes them stand out. They built our e-commerce platform from scratch and it's performing exceptionally well. Best investment we've made!"
    },
    {
      id: 5,
      name: "Lisa Anderson",
      role: "Brand Manager, Luxury Boutique",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop",
      rating: 5,
      text: "Exceptional service from start to finish. They took the time to understand our brand identity and created a digital experience that truly reflects our values. Our customer satisfaction has skyrocketed!"
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Operations Manager, FoodHub Co",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      rating: 5,
      text: "Working with such talented professionals has been a pleasure. Their attention to detail and commitment to excellence is evident in every aspect of their work. They've helped us grow exponentially!"
    }
  ];

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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

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

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
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

        .animate-slideIn {
          animation: slideIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .animate-scaleIn {
          animation: scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .quote-float {
          animation: float 3s ease-in-out infinite;
        }

        .testimonial-card {
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nav-button {
          transition: all 0.3s ease;
        }

        .nav-button:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 20px rgba(255, 107, 0, 0.3);
        }

        .nav-button:active {
          transform: scale(0.95);
        }

        .dot {
          transition: all 0.3s ease;
        }

        .dot.active {
          width: 40px;
        }

        .star-icon {
          filter: drop-shadow(0 2px 4px rgba(255, 193, 7, 0.3));
        }
      `}</style>

      <section 
        ref={sectionRef}
        className="relative bg-white py-12 px-4 sm:px-6 lg:px-8 overflow-hidden" id='reviews'
      >
        {/* Background Decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-300 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 border border-orange-200 rounded-full mb-4">
              <Star className="text-orange-500" size={16} fill="currentColor" />
              <span className="text-sm font-semibold text-orange-700">
                Client Testimonials
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-4">
              What Our <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from the businesses we've helped transform
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative">
            {/* Main Testimonial Card */}
            <div className={`relative ${isVisible ? 'animate-scaleIn' : 'opacity-0'}`}
                 style={{ animationDelay: '0.3s' }}>
              <div className="testimonial-card bg-white rounded-3xl shadow-2xl p-8 lg:p-12 mx-auto max-w-4xl relative">
                {/* Quote Icon */}
                <div className="quote-float absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <Quote className="text-white" size={32} />
                </div>

                {/* Rating Stars */}
                <div className="flex justify-center gap-1 mb-6 mt-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="star-icon text-yellow-400" 
                      size={24} 
                      fill="currentColor"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed text-center mb-8 italic">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Author Info */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-orange-100 shadow-lg"
                  />
                  <div className="text-center sm:text-left">
                    <h4 className="text-xl font-bold text-gray-900">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-600 font-medium">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="nav-button absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-orange-600 hover:bg-orange-500 hover:text-white z-10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextTestimonial}
              className="nav-button absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-orange-600 hover:bg-orange-500 hover:text-white z-10"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`dot h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'active bg-gradient-to-r from-orange-500 to-orange-600'
                    : 'w-2 bg-gray-300 hover:bg-orange-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Bottom Stats */}
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
               style={{ animationDelay: '0.5s' }}>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-orange-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-orange-600 mb-2">98%</div>
              <div className="text-gray-600 font-medium">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-orange-600 mb-2">5.0</div>
              <div className="text-gray-600 font-medium">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-orange-600 mb-2">1000+</div>
              <div className="text-gray-600 font-medium">Reviews</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;