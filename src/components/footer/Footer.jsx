import './footer.css';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="container mx-auto px-5">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="mb-8 lg:mb-0">
            <img src="/images//logo.png" alt="Logo" className="h-10 mb-4" />
            <p className="mb-4">+91 73373 23966</p>
            <p>info@Kaundinya.org</p>
          </div>
          <div className="flex flex-col lg:flex-row justify-between w-full lg:w-auto space-y-8 lg:space-y-0 lg:space-x-12">
            <div>
              <h3 className="text-white font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Our Founder</a></li>
                <li><a href="#" className="hover:text-white">Videos</a></li>
                <li><a href="#" className="hover:text-white">In the News</a></li>
                <li><a href="#" className="hover:text-white">Gallery</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Projects</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">1008 Deliveries</a></li>
                <li><a href="#" className="hover:text-white">Self Employment</a></li>
                <li><a href="#" className="hover:text-white">Education</a></li>
                <li><a href="#" className="hover:text-white">Healthcare</a></li>
                <li><a href="#" className="hover:text-white">Food Distribution</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Involve</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Volunteer</a></li>
                <li><a href="#" className="hover:text-white">Donate</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Address</h3>
              <p>Kaundinya Educational Trust</p>
              <p>6th floor, Ilyas Mohammed Khan Estate</p>
              <p>Rd No 1, Banjara Hills, Hyderabad – 500034</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>&copy; Kaundinya Educational Trust - Designed by (...)</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
