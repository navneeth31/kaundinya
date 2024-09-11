const AboutUs = () => {
    return (
      <div className="bg-gray-100 min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gray-800 text-white">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Kaundinya Educational Trust</h1>
            <p className="text-lg md:text-2xl mb-8">Empowering Education, Transforming Lives</p>
            <button className="cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700 hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">Donte</button>

          </div>
        </section>
  
        {/* About Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            {/* Founder Image */}
            <div className="md:w-1/3 mb-8 md:mb-0">
              <img src="./images/charminar.jpeg" alt="Founder" className="rounded-full w-80 h-80 object-cover mx-auto md:mx-0 md:ml-auto md:mr-0" />
            </div>
            {/* Founder Info */}
            <div className="md:w-2/3 md:pl-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Founder - John Doe</h2>
              <p className="text-gray-600 leading-relaxed">
                John Doe is the visionary founder of Kaundinya Educational Trust, established with the mission to provide quality education and empower students through scholarships such as KET Scholarship, KET Group-2 coaching, and KET Bank coaching.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                With a passion for education and a commitment to community service, John Doe has led the trust in creating opportunities for underprivileged students to achieve their academic and career aspirations.
              </p>
            </div>
          </div>
        </section>
  
        {/* Scholarships Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Services</h2>
            <div className="flex flex-wrap justify-center">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-20">
                {/* New Code 1*/}
                  <div className="relative group duration-500 cursor-pointer group overflow-hidden text-gray-50 h-72 w-56  rounded-2xl hover:duration-700">
                    <div className="w-56 h-72 text-gray-800">
                      <img src="./images/pic1.png" alt="KET Scholarship"/>
                    </div>
                    <div className="absolute bg-gray-50 -bottom-24 w-56 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
                      <span className="text-lime-400 font-bold text-xs">KET </span>
                      <span className="text-gray-800 font-bold text-3xl">Scholarship</span>
                      <p className="text-neutral-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </div>
    
                  {/* New Code 2*/}
                  <div className="relative group duration-500 cursor-pointer group overflow-hidden text-gray-50 h-72 w-56  rounded-2xl hover:duration-700">
                    <div className="w-56 h-72 text-gray-800">
                      <img src="./images/pic2.jpg" alt="KET Coaching"/>
                    </div>
                    <div className="absolute bg-gray-50 -bottom-24 w-56 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
                      <span className="text-lime-400 font-bold text-xs">KET GROUP-2</span>
                      <span className="text-gray-800 font-bold text-3xl">Coaching</span>
                      <p className="text-neutral-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </div>
    
                  {/* New Code 3*/}
                  <div className="relative group duration-500 cursor-pointer group overflow-hidden text-gray-50 h-72 w-56  rounded-2xl hover:duration-700">
                    <div className="w-56 h-72 text-gray-800">
                      <img src="./images/pic4.avif" alt="KET Bank Coaching"/>
                    </div>
                    <div className="absolute bg-gray-50 -bottom-24 w-56 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
                      <span className="text-lime-400 font-bold text-xs">KET BANK</span>
                      <span className="text-gray-800 font-bold text-3xl">Coaching</span>
                      <p className="text-neutral-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </section>
      </div>
    );
  };
  

  export default AboutUs;