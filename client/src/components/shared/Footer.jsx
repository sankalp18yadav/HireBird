import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Footer() {
  const { user } = useSelector((store) => store.auth);

  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}

      <div className="max-w-[90%] mx-auto px-6 py-10 grid md:grid-cols-4 grid-cols-1 gap-8">
        {/* Brand Section */}

        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold text-indigo-500">
            Hire<span className="text-white">Bird</span>
          </h2>
          <p className="text-sm text-gray-400 mt-3 max-w-xs leading-relaxed">
            HireBird bridges talent and ambition, offering businesses a refined
            path to discover, connect, and grow with exceptional professionals.
          </p>
          <p className="text-red-500 font-semibold mt-6">Find Us</p>
          {/* Social Links */}
          <div className="flex items-center gap-4 mt-4">
            {/* FaceBook */}

            <a
              href="https://www.facebook.com/profile.php?id=61575508210187"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center hover:bg-blue-600 transition"
            >
              <FaFacebookF
                className="text-black group-hover:text-white"
                size={16}
              />
            </a>

            {/* Instagram */}

            <a
              href="https://www.instagram.com/hirebirdofficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center hover:bg-pink-500 transition"
            >
              <FaInstagram
                className="text-black group-hover:text-white"
                size={16}
              />
            </a>

            {/* Twitter */}

            <a
              href="https://x.com/HBird77405"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center hover:bg-black transition"
            >
              <FaXTwitter
                className="text-black group-hover:text-white"
                size={16}
              />
            </a>
          </div>
          Company Engaging
          <p className="text-xs text-gray-400 mt-6">
            Made with <span className="text-red-500">❤</span> by{" "}
            <span className="text-indigo-500">
              Hire<span className="text-white">Bird</span>
            </span>
          </p>
        </div>

        {/* Useful Links */}

        <div className="md:col-span-1 md:ml-6">
          <h3 className="font-bold text-lg mb-4">Useful Links</h3>

          <ul className="space-y-2 text-sm text-gray-400">
            {user && user.role == "recruiter" ? (
              <>
                <li>
                  <Link to="/admin/company">Companies</Link>
                </li>

                <li>
                  <Link to="/admin/jobs">Jobs</Link>
                </li>

                <li>
                  <Link to="/contactUs">Contact Us</Link>
                </li>

                <li>
                  <Link to="/about">About</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/jobs">Jobs</Link>
                </li>

                <li>
                  <Link to="/browse">Browse</Link>
                </li>

                <li>
                  <Link to="/contactUs">Contact Us</Link>
                </li>

                <li>
                  <Link to="/about">About</Link>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Legal */}

        <div className="md:col-span-1 md:ml-6">
          <h3 className="font-bold text-lg mb-4">Legal</h3>

          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>

            <li>
              <Link to="/terms-n-conditions">Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}

        <div className="md:col-span-1">
          <div className="space-y-4 text-sm text-gray-400">
            <div className="flex items-start gap-2">
              <MapPin className="w-5 h-5 text-white mt-1" />

              <div>
                <a
                  href="https://www.google.com/maps/place/4578+Willow+Creek+Plaza,+Suite+1200,+San+Mateo,+CA+94403,+United+States"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  4578 Willow Creek Plaza, Suite 1200 <br />
                  San Mateo, CA 94403 <br />
                  United States
                </a>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Phone className="w-5 h-5 text-white mt-1" />

              <div>
                <a href="tel:+16505550179" className="hover:underline">
                  +1 (650) 555-0179
                </a>

                <br />

                <a href="tel:+13105550194" className="hover:underline">
                  +1 (310) 555-0194
                </a>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Mail className="w-5 h-5 text-white mt-1" />

              <a
                href="mailto:support@hirebird.co.us"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                support@hirebird.co.us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}

      <div className="bg-gray-900 text-center text-xs py-4 mt-10">
        &copy; {new Date().getFullYear()} HireBird. All rights reserved.
      </div>
    </footer>
  );
}
