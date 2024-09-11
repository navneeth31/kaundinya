import "./home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Carousel Section */}
      <section className="mb-8 w-full max-w-screen-xl">
        <Carousel
          showThumbs={false}
          showArrows={true}
          infiniteLoop={true}
          emulateTouch={true}
          swipeable={true}
          autoPlay={true}
          interval={5000} // Change slides every 5 seconds
          className="rounded-lg overflow-hidden shadow-lg"
          style={{ width: '100%', height: '400px' }} // Set width and height
        >
          <div>
            <img src="https://images.pexels.com/photos/1460222/pexels-photo-1460222.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Carousel Image 1" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
          </div>
          <div>
            <img src="https://images.pexels.com/photos/4275885/pexels-photo-4275885.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Carousel Image 2" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
          </div>
          <div>
            <img src="https://images.pexels.com/photos/2714581/pexels-photo-2714581.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Carousel Image 3" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
          </div>
        </Carousel>
      </section>

      {/* Content Section */}
      <div className="bg-white border border-gray-300 rounded-lg shadow-lg max-w-4xl overflow-hidden ">
        <div className="flex flex-col md:flex-row items-center p-6">
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
            <img className="rounded-lg w-100% h-80 object-cover mt-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt9uYtD_4uE0EWs3GpnpkyQeqhK7iy1R06Ug&s" alt="Smiling Child" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Kaundinya Educational Trust</h2>
            <p className="text-gray-600 mt-4">
              Lopamudra Charitable Trust is a non-governmental organization based in Hyderabad that is dedicated to improving the lives of the underprivileged. The foundation primary focus is on healthcare, education, and livelihood programs that aim to alleviate poverty and create a more sustainable future for communities in need.
            </p>
            <button className="mt-6 px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
      {/* About US */}
      <div className="flex items-center justify-center min-h-screen container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-20">
          {/* New Code 1*/}
            <Link to="/About">
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
            </Link>

            {/* New Code 2*/}
            <Link to="/About">
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
            </Link>

            {/* New Code 3*/}
            <Link to="/About">
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
            </Link>
          </div>
        </div>
      </div>
  );
};

export default Home;
