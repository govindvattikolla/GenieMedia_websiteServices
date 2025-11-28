import React, { useEffect, useRef, useState } from 'react';

const AboutUs = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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

  const stats = [
    { 
      value: '14+', 
      label: 'Years of Expertise',
      color: 'bg-[#CFAF03]',
      height: 'h-28',
      mobileWidth: 'w-32',
      delay: '0s'
    },
    { 
      value: '40+', 
      label: 'Countries Served',
      color: 'bg-[#03C2C2]',
      height: 'h-32',
      mobileWidth: 'w-40',
      delay: '0.1s'
    },
    { 
      value: '250+', 
      label: 'Tech Experts On-board',
      color: 'bg-[#CFAF03]',
      height: 'h-48',
      mobileWidth: 'w-56',
      delay: '0.2s'
    },
    { 
      value: '1600+', 
      label: 'Happy Clients',
      color: 'bg-[#03C2C2]',
      height: 'h-60',
      mobileWidth: 'w-72',
      delay: '0.3s'
    },
    { 
      value: '2500+', 
      label: 'Projects Delivered',
      color: 'bg-[#CFAF03]',
      height: 'h-64',
      mobileWidth: 'w-78',
      delay: '0.4s'
    }
  ];

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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

        .animate-fadeInUp {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .animate-scaleIn {
          animation: scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .stat-bar {
          transition: all 0.3s ease;
        }

        .stat-bar:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
        }
      `}</style>

      <section 
        ref={sectionRef}
        className="bg-gray-100 pt-10 px-6 lg:px-12"  id='about'
      >
        <div className="max-w-6xl mx-auto ">
          {/* Header */}
          <div className={`mb-8 text-center ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h2 className="text-4xl lg:text-6xl font-bold text-orange-500 mb-3">
              About Us
            </h2>
            <p className="text-lg lg:text-xl text-gray-800">
              Crafting cutting-edge digital solutions with creative minds
            </p>
          </div>

          {/* Who We Are & What Drives Us */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-16 mb-0">
            <div className={`${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}
                 style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Who We Are
              </h3>
              <p className="text-base lg:text-lg text-gray-800 leading-relaxed">
                A Mindful team of tech innovators bringing world-class tech ideas to reality. 
                We embrace the power of technology to provide cutting-edge digital solutions 
                that propel our clients toward unprecedented success.
              </p>
            </div>

            <div className={`${isVisible ? 'animate-slideInRight' : 'opacity-0'}`}
                 style={{ animationDelay: '0.3s' }}>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                What Drives Us?
              </h3>
              <p className="text-base lg:text-lg text-gray-800 leading-relaxed">
                Creativity is our heartbeat. We constantly challenge ourselves to further our 
                technical prowess and help our customers to deliver exceptional customer experience.
              </p>
            </div>
          </div>

          {/* Desktop: Vertical Bars */}
          <div className="hidden md:flex items-end justify-center gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex-1 flex flex-col items-center"
              >
                {/* Label and Value on Top */}
                <div className={`text-center mb-4 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
                     style={{ animationDelay: isVisible ? stat.delay : '0s' }}>
                  <div className="text-3xl lg:text-5xl font-extrabold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm lg:text-base text-gray-600 font-medium px-2">
                    {stat.label}
                  </div>
                </div>

                {/* Bar */}
                <div
                  className={`stat-bar w-full ${stat.height} ${stat.color} rounded-t-2xl ${
                    isVisible ? 'animate-scaleIn' : 'opacity-0'
                  }`}
                  style={{ animationDelay: isVisible ? stat.delay : '0s' }}
                />
              </div>
            ))}
          </div>

          {/* Mobile: Horizontal Bars */}
          <div className="md:hidden space-y-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
                style={{ animationDelay: isVisible ? stat.delay : '0s' }}
              >
                {/* Label and Value on Left */}
                <div className="flex items-center gap-0 mt-5 mb-2">
                  <div className="text-2xl font-bold text-gray-900 min-w-[80px]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>

                {/* Horizontal Bar */}
                <div
                  className={`stat-bar ${stat.mobileWidth} h-8 ${stat.color} rounded-r-2xl`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;