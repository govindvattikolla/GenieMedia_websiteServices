import React, { useEffect, useRef, useState } from 'react';

const AboutUs = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState([0, 0, 0, 0, 0]);
  const [barHeights, setBarHeights] = useState([0, 0, 0, 0, 0]);

  const stats = [
    { 
      value: 14, 
      suffix: '+',
      label: 'Years of Expertise',
      color: 'bg-[#CFAF03]',
      maxHeight: 112, // h-28 in pixels
      height: 'h-28',
      mobileWidth: 48,
      delay: 0
    },
    { 
      value: 40, 
      suffix: '+',
      label: 'Countries Served',
      color: 'bg-[#03C2C2]',
      maxHeight: 128, // h-32 in pixels
      height: 'h-32',
      mobileWidth: 62,
      delay: 80
    },
    { 
      value: 250, 
      suffix: '+',
      label: 'Tech Experts On-board',
      color: 'bg-[#CFAF03]',
      maxHeight: 192, // h-48 in pixels
      height: 'h-38',
      mobileWidth: 106,
      delay: 150
    },
    { 
      value: 1600, 
      suffix: '+',
      label: 'Happy Clients',
      color: 'bg-[#03C2C2]',
      maxHeight: 240, // h-60 in pixels
      height: 'h-60',
      mobileWidth: 180,
      delay: 250
    },
    { 
      value: 2500, 
      suffix: '+',
      label: 'Projects Delivered',
      color: 'bg-[#CFAF03]',
      maxHeight: 256, // h-64 in pixels
      height: 'h-64',
      mobileWidth: 260,
      delay:350
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            setTimeout(() => animateAll(), 300);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateAll = () => {
    stats.forEach((stat, index) => {
      setTimeout(() => {
        animateCounter(index, stat.value);
        animateBar(index, stat.maxHeight);
      }, stat.delay);
    });
  };

  const animateCounter = (index, targetValue) => {
    const duration = 2000;
    const steps = 80;
    const increment = targetValue / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newValue = Math.min(Math.floor(increment * currentStep), targetValue);
      
      setCounters(prev => {
        const newCounters = [...prev];
        newCounters[index] = newValue;
        return newCounters;
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, duration / steps);
  };

  const animateBar = (index, maxHeight) => {
    const duration = 2000;
    const steps = 80;
    const increment = maxHeight / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newHeight = Math.min(increment * currentStep, maxHeight);
      
      setBarHeights(prev => {
        const newHeights = [...prev];
        newHeights[index] = newHeight;
        return newHeights;
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, duration / steps);
  };

  const MAX_MOBILE_VALUE = Math.max(...stats.map(s => s.value));


  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(16px);
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

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 5px rgba(255, 107, 0, 0.3);
          }
          50% {
            box-shadow: 0 0 20px rgba(255, 107, 0, 0.6);
          }
        }

        .animate-fadeInUp {
  animation: fadeInUp 0.4s ease forwards;
}

        .animate-slideInLeft {
          animation: slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .animate-bounceIn {
          animation: bounceIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .stat-bar {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform-origin: bottom;
        }

        .stat-bar:hover {
          transform: scale(1.05);
          filter: brightness(1.15);
          animation: glow 2s infinite;
        }

        .stat-bar-horizontal {
  transition: width 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
}


        .stat-bar-horizontal:hover {
          transform: scaleX(1.05);
          filter: brightness(1.15);
          animation: glow 2s infinite;
        }

        .counter-number {
          transition: all 0.3s ease;
          display: inline-block;
        }

        .counter-number.updating {
          transform: scale(1.1);
          color: #FF6B00;
        }

        .stat-label {
          transition: all 0.3s ease;
        }

        .stat-container:hover .stat-label {
          color: #FF6B00;
          transform: translateY(-5px);
        }

        .stat-container:hover .counter-number {
          color: #FF6B00;
          transform: scale(1.15);
        }
      `}</style>

      <section 
        ref={sectionRef}
        className="bg-gray-100 pt-10 px-6 lg:px-12"
        id='about'
      >
        <div className="max-w-6xl mx-auto">
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
                className="flex-1 flex flex-col items-center stat-container"
              >
              
                <div className={`text-center mb-4 ${isVisible ? 'animate-bounceIn' : 'opacity-0'}`}
                     style={{ animationDelay: `${stat.delay}ms` }}>
                  <div className={`text-3xl lg:text-5xl font-extrabold text-gray-900 mb-2 counter-number ${counters[index] > 0 && counters[index] < stat.value ? 'updating' : ''}`}>
                    {counters[index]}{stat.suffix}
                  </div>
                  <div className="text-sm lg:text-base text-gray-600 font-medium px-2 stat-label">
                    {stat.label}
                  </div>
                </div>

               
                <div 
                  className={`stat-bar w-full ${stat.color} rounded-t-2xl transition-all duration-100 ease-out`}
                  style={{ 
                    height: `${barHeights[index]}px`,
                    maxHeight: `${stat.maxHeight}px`
                  }}
                />
              </div>
            ))}
          </div>

          {/* Mobile: Horizontal Bars */}
          <div className="md:hidden space-y-6 pb-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`stat-container ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
                style={{ animationDelay: `${stat.delay}ms` }}
              >
               
                <div className="flex items-center gap-0 mt-5 mb-2">
                  <div className={`text-2xl font-bold text-gray-900 min-w-[80px] counter-number ${counters[index] > 0 && counters[index] < stat.value ? 'updating' : ''}`}>
                    {counters[index]}{stat.suffix}
                  </div>
                  <div className="text-sm text-gray-600 font-medium stat-label">
                    {stat.label}
                  </div>
                </div>

              
                 <div 
                  className={`stat-bar-horizontal h-8 ${stat.color} rounded-r-2xl`}
                  style={{ 
                    width: isVisible
                      ? `${(stats[index].value / MAX_MOBILE_VALUE) * 90}%`
                      : '0%'
                  }}
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