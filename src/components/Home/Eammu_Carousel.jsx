import { useEffect, useRef } from 'react';

const Eammu_Carousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    const slides = container.querySelectorAll('.carousel-item');
    if (!slides.length) return;

    const interval = setInterval(() => {
      const currentIndex = [...slides].findIndex(
        slide => slide.offsetLeft >= container.scrollLeft
      );
      const nextIndex = (currentIndex + 1) % slides.length;

      container.scrollTo({
        left: slides[nextIndex].offsetLeft,
        behavior: 'smooth'
      });
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1 className="text-center font-bold text-4xl">Our Services</h1>
      <div
        className="carousel w-full min-h-[80vh] my-6 overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory"
        ref={carouselRef}
      >
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full snap-center flex-shrink-0">
          <div className="hero rounded-lg" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/portrait-group-students-celebrating-their-graduation_23-2148201864.jpg?w=900&t=st=1705480715~exp=1705481315~hmac=bb545996d05b4648c510a67b781717e086467c9056e7b3a06b9cfe02441e0274)' }}>
            <div className="hero-overlay rounded-lg bg-opacity-30"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-4xl">
                <h1 className="mb-5 text-5xl font-bold">Student Visa Services</h1>
                <p className="mb-5">Welcome to Eammu Immigration Services, your trusted partner in unlocking the doors to global education!...</p>
                <button className="hover:shadow-[#122712] hover:shadow-lg btn text-lg hover:bg-[#005a31] hover:text-[#ffffff] bg-white text-[#005a31] border-[1.5px] border-[#005a31]" onClick={() => document.getElementById('my_modal_5').showModal()}>More Details</button>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg text-[#000000]">Student Visa</h3>
                    <p className="py-4 text-[#000000]">Full student visa details...</p>
                    <div className="modal-action">
                      <form method="dialog">
                        <button className="hover:shadow-[#122712] hover:shadow-lg btn text-lg hover:bg-[#005a31] hover:text-[#ffffff] bg-white text-[#005a31] border-[1.5px] border-[#005a31]">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full snap-center flex-shrink-0">
          <div className="hero rounded-lg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=1470&auto=format&fit=crop)' }}>
            <div className="hero-overlay rounded-lg bg-opacity-30"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-2xl">
                <h1 className="mb-5 text-5xl font-bold">Tourist Visa Services</h1>
                <p className="mb-5">Welcome to Eammu Immigration Services, your trusted partner for seamless Tourist Visa Services...</p>
                <button className="hover:shadow-[#122712] hover:shadow-lg btn text-lg hover:bg-[#005a31] hover:text-[#ffffff] bg-white text-[#005a31] border-[1.5px] border-[#005a31]" onClick={() => document.getElementById('my_modal_4').showModal()}>More Details</button>
                <dialog id="my_modal_4" className="modal modal-bottom sm:modal-middle">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg text-[#000000]">Tourist Visa</h3>
                    <p className="py-4 text-[#000000]">Full tourist visa details...</p>
                    <div className="modal-action">
                      <form method="dialog">
                        <button className="hover:shadow-[#122712] hover:shadow-lg btn text-lg hover:bg-[#005a31] hover:text-[#ffffff] bg-white text-[#005a31] border-[1.5px] border-[#005a31]">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full snap-center flex-shrink-0">
          <div className="hero rounded-lg" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/people-safety-equipment-their-workplace_23-2148976360.jpg)' }}>
            <div className="hero-overlay rounded-lg bg-opacity-30"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-2xl">
                <h1 className="mb-5 text-5xl font-bold">Work Visa Services</h1>
                <p className="mb-5">Welcome to Eammu Immigration Services, your premier partner for top-notch Work Visa Services...</p>
                <button className="hover:shadow-[#122712] hover:shadow-lg btn text-lg hover:bg-[#005a31] hover:text-[#ffffff] bg-white text-[#005a31] border-[1.5px] border-[#005a31]" onClick={() => document.getElementById('my_modal_3').showModal()}>More Details</button>
                <dialog id="my_modal_3" className="modal modal-bottom sm:modal-middle">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg text-[#000000]">Work Visa</h3>
                    <p className="py-4 text-[#000000]">Full work visa details...</p>
                    <div className="modal-action">
                      <form method="dialog">
                        <button className="hover:shadow-[#122712] hover:shadow-lg btn text-lg hover:bg-[#005a31] hover:text-[#ffffff] bg-white text-[#005a31] border-[1.5px] border-[#005a31]">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 4 */}
        <div id="slide4" className="carousel-item relative w-full snap-center flex-shrink-0">
          <div className="hero rounded-lg lg:min-h-[500px]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=1470&auto=format&fit=crop)' }}>
            <div className="hero-overlay rounded-lg bg-opacity-30"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-2xl">
                <h1 className="mb-5 text-5xl font-bold">All Kinds Of Immigration Services</h1>
                <p className="mb-5">Eammu Immigration Services is a premier travel agency specializing in comprehensive immigration services...</p>
                <button className="hover:shadow-[#122712] hover:shadow-lg btn text-lg hover:bg-[#005a31] hover:text-[#ffffff] bg-white text-[#005a31] border-[1.5px] border-[#005a31]" onClick={() => document.getElementById('my_modal_2').showModal()}>More Details</button>
                <dialog id="my_modal_2" className="modal modal-bottom sm:modal-middle">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg text-[#000000]">All Kinds Of Immigration Services</h3>
                    <p className="py-4 text-[#000000]">Full immigration service details...</p>
                    <div className="modal-action">
                      <form method="dialog">
                        <button className="hover:shadow-[#122712] hover:shadow-lg btn text-lg hover:bg-[#005a31] hover:text-[#ffffff] bg-white text-[#005a31] border-[1.5px] border-[#005a31]">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eammu_Carousel;