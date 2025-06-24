import { useEffect, useRef, useState } from 'react';

const Eammu_Carousel = () => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToSlide = (index) => {
    const container = carouselRef.current;
    const slides = container?.querySelectorAll('.carousel-item');
    if (container && slides?.[index]) {
      container.scrollTo({
        left: slides[index].offsetLeft,
        behavior: 'smooth',
      });
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    const container = carouselRef.current;
    const slides = container.querySelectorAll('.carousel-item');
    if (!slides.length) return;

    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % slides.length;
      scrollToSlide(nextIndex);
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const slideData = [
    {
      title: 'Student Visa Services',
      image:
        'https://img.freepik.com/free-photo/portrait-group-students-celebrating-their-graduation_23-2148201864.jpg?w=900',
      description:
        'Welcome to Eammu Immigration Services, your trusted partner in unlocking the doors to global education! Specializing in Student Visa Services, we take immense pride in facilitating the academic dreams of Bangladeshi students across 45+ countries.',
    },
    {
      title: 'Tourist Visa Services',
      image:
        'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=1470&auto=format&fit=crop',
      description:
        'Explore the world with confidence. We handle your tourist visa process efficiently so you can focus on your travel dreams. USA, Europe, Dubai, Asia — we\'ve got you covered!',
    },
    {
      title: 'Work Visa Services',
      image:
        'https://img.freepik.com/free-photo/people-safety-equipment-their-workplace_23-2148976360.jpg',
      description:
        'Secure employment opportunities abroad with our end-to-end work visa support. We guide you through every step of the process.',
    },
    {
      title: 'All Immigration Services',
      image:
        'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=1470&auto=format&fit=crop',
      description:
        'From student to tourist to permanent residency — Eammu Immigration Services covers all types of global immigration support.',
    },
  ];

  return (
    <div >
      <h1 className="text-center font-bold text-4xl">Our Services</h1>
      <div
        className="carousel w-full min-h-[80vh] my-6 overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory relative"
        ref={carouselRef}
      >
        {slideData.map((slide, index) => (
          <div
            key={`slide${index + 1}`}
            id={`slide${index + 1}`}
            className="carousel-item relative w-full snap-center flex-shrink-0"
          >
            <div
              className="hero rounded-lg min-h-[80vh]"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="hero-overlay rounded-lg bg-opacity-30"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-3xl">
                  <h1 className="mb-5 text-5xl font-bold">{slide.title}</h1>
                  <p className="mb-5 text-lg">{slide.description}</p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute flex justify-between transform -translate-y-1/2 left-4 right-4 top-1/2">
              <button
                className="bg-white w-12 h-12 rounded-full"
                onClick={() => scrollToSlide((index - 1 + slideData.length) % slideData.length)}
              >
                ❮
              </button>
              <button
                className="bg-white w-12 h-12 rounded-full"
                onClick={() => scrollToSlide((index + 1) % slideData.length)}
              >
                ❯
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Eammu_Carousel;
