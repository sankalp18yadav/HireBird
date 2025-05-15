import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover.jsx";
import { Avatar, AvatarImage } from "../ui/avatar.jsx";
import { Button } from "../ui/button.jsx";
import { LogOut, User2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import axios from "axios";
import { USER_API_END_POINT } from "./../../utils/constant";
import { setUser } from "@/store/authSlice";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);

  const lastScrollY = React.useRef(0);

  const { user } = useSelector((store) => store.auth);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });

      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  const handleScroll = React.useCallback(() => {
    if (window.scrollY > lastScrollY.current) {
      setHidden(true); // scrolling down
    } else {
      setHidden(false); // scrolling up
    }

    lastScrollY.current = window.scrollY;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <nav
      className={`w-full bg-white shadow-md z-50 transition-transform duration-500 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="bg-white shadow-md sticky top-0 z-50">
        <div className="flex items-center justify-between mx-auto max-w-[90%] h-16">
          <div>
            {/* Logo */}

            <h1 className="text-4xl font-bold">
              <Link to="/">
                <span className="text-[#6C5CE7]">Hire</span>
                <span className="text-[#2D3436]">Bird</span>
              </Link>
            </h1>
          </div>

          <div className="flex items-center gap-12">
            {/* Navbar index */}

            <ul className="flex font-medium items-center gap-5">
              {user && user.role == "recruiter" ? (
                <>
                  <li>
                    <Link to="/admin/companies">Companies</Link>
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

            {!user ? (
              <div className="flex items-center gap-2">
                {/* Login */}

                <Link to="/login">
                  <Button
                    className="cursor-pointer hover:bg-[#2D3436] hover:text-[#ffffff]"
                    variant="outline"
                  >
                    Login
                  </Button>
                </Link>

                {/* Sign Up */}

                <Link to="/signup">
                  <Button className="bg-[#6C5CE7] hover:bg-[#2D3436] cursor-pointer">
                    Sign Up
                  </Button>
                </Link>
              </div>
            ) : (
              // For Profile

              <Popover>
                <PopoverTrigger>
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src={user?.profile?.profilePicture}
                      alt="Profile Picture"
                    />
                  </Avatar>
                </PopoverTrigger>

                <PopoverContent className="w-80">
                  <div className="flex gap-4 space-y-2">
                    {/* Avatar */}

                    <Avatar className="cursor-pointer">
                      <AvatarImage
                        src={user?.profile?.profilePicture}
                        alt="Profile Picture"
                      />
                    </Avatar>

                    {/* User Name */}

                    <div>
                      <h4 className="font-medium">{user?.fullname}</h4>
                      <p className="text-sm text-muted-foreground">
                        {user?.profile?.bio}
                      </p>
                    </div>
                  </div>

                  {/* Profile */}

                  <div className="flex flex-col my-2 text-gray-600">
                    {/* Update Profile */}

                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <User2 />

                      <Button variant="link">
                        <Link to="/profile">View & Update Profile</Link>
                      </Button>
                    </div>

                    {/* Logout */}

                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <LogOut />

                      <Button
                        onClick={logoutHandler}
                        variant="link"
                        className="cursor-pointer"
                      >
                        Logout
                      </Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
