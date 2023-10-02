import React from "react";

function Footer() {
  return (

    <footer className="bg-gray-100 py-8 sm:py-12">
      <div className="container mx-auto px-4 relative ">
        <div className="sm:flex sm:flex-wrap mx-[27%] w-full">
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
            <h5 className="text-xl font-bold mb-6">Features</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <a href="#" className="hover:text-purple-800">Cool features</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-purple-800">Random feature</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-purple-800">Team feature</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-purple-800">Developer stuff</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-purple-800">Another feature</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-purple-800">Last feature</a>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
            <h5 className="text-xl font-bold mb-6">Resources</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <a href="#" className="hover:text-purple-800">Resource</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-purple-800">Resource name</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-purple-800">Another resource</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-purple-800">Final resource</a>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
            <h5 className="text-xl font-bold mb-6">About</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <a href="#" className="hover:text-purple-800">Our team</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-purple-800">Locations</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-purple-800">Privacy policy</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-purple-800">Terms of service</a>
              </li>
            </ul>
          </div>
          
          </div>
          <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
          <h5 className="text-xl font-bold mb-7 text-center xl:text-center">Stay connected</h5>
          <div className="flex justify-center xl:justify-center">
            <a href="https://www.facebook.com/googlefordevs" className="w-8 h-8 border border-gray-400 aspect-square rounded-full text-center py-1 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600 mx-2">
              <i className="fab fa-facebook"></i>
            </a>

            <a href="https://twitter.com/googledevs" className="w-8 h-8 border border-gray-400 aspect-square rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400 mx-2">
              <i className="fab fa-twitter"></i>
            </a>

            <a href="https://www.youtube.com/googledevelopers" className="w-8 h-8 border border-gray-400 aspect-square rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600 mx-2">
              <i className="fab fa-youtube"></i>
            </a>

            <a href="https://www.instagram.com/gdsc_ju/" className="w-8 h-8 border border-gray-400 aspect-square rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-red-400 hover:border-red-400 mx-2">
              <i className="fab fa-instagram"></i>
            </a>

            <a href="https://www.linkedin.com/company/gdsc-jadavpur-university/" className="w-8 h-8 border border-gray-400 aspect-square rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-800 hover:border-blue-800 mx-2">
              <i className="fab fa-linkedin"></i>
            </a>

            <a href="https://github.com/GDSC-Jadavpur-University" className="w-8 h-8 border border-gray-400 aspect-square rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-800 hover:border-blue-800 mx-2">
              <i class="fa-brands fa-github"></i>
            </a>
            
            <a href="https://gdsc.community.dev/jadavpur-university-kolkata/" className="w-8 h-8 border border-gray-400 aspect-square rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-purple-800 hover:border-purple-800 mx-2">
              <i className="fab fa-google"></i>
            </a>
          </div>
        </div>


      </div>
    </footer>

  );
}

export default Footer;
