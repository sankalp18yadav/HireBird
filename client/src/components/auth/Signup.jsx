import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Checkbox } from "../ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/store/authSlice";

const Signup = () => {
  //Input

  const [input, setInput] = useState({
    fullname: "",
    gender: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });

  const { loading, user } = useSelector((store) => store.auth);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    //FullName Input

    if (!input.fullname) {
      toast.error("Please enter your full name.");
      return;
    }

    //Gender Input

    if (!["male", "female", "other"].includes(input.gender)) {
      toast.error("Please select your gender.");
      return;
    }

    //Email Input

    if (!input.email.trim() || !/\S+@\S+\.\S+/.test(input.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    //Phone Number Input

    if (!/^\d{10}$/.test(input.phoneNumber)) {
      toast.error("Please enter a valid 10-digit mobile number.");
      return;
    }

    //Password Input

    if (!input.password.trim() || input.password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }

    //Role Input

    if (!["candidate", "recruiter"].includes(input.role)) {
      toast.error("Please select your role.");
      return;
    }

    //Terms & Conditions Input

    if (!agreed) {
      toast.error("Please accept the Terms & Conditions to continue.");
      return;
    }

    //Form Data

    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("gender", input.gender);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);

    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      dispatch(setLoading(true));

      const res = await axios.post(
        `${USER_API_END_POINT}/register`,
        formData,

        {
          headers: {
            "Content-Type": "multipart/form-data",
          },

          withCredentials: true,
        }
      );

      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      {/* Navbar */}

      <Navbar />

      <div className="flex items-center justify-center max-w-7xl mx-auto">
        {/* form */}

        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          {/* Sign Up */}

          <h1 className="font-bold text-xl mb-5">Sign Up</h1>

          {/* Full Name */}

          <div className="my-4 flex flex-col gap-y-2">
            <Label>Full Name</Label>
            <Input
              type="text"
              value={input.fullname}
              name="fullname"
              onChange={changeEventHandler}
              placeholder="What is your name?"
            />
          </div>

          {/* Gender */}

          <div className="my-4 flex flex-col">
            <Label className="mb-2">Gender</Label>
            <RadioGroup className="flex items-center gap-3">
              {/* Male */}

              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={input.gender === "male"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Male</Label>
              </div>

              {/* Female */}

              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={input.gender === "female"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Female</Label>
              </div>

              {/* Other */}

              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={input.gender === "other"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r3">Other</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Email Id */}

          <div className="my-4 flex flex-col gap-y-2">
            <Label>Email ID</Label>
            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="Tell us your Email ID"
            />
          </div>

          {/* Mobile Number */}

          <div className="my-4 flex flex-col gap-y-2">
            <Label>Mobile Number</Label>
            <Input
              type="tel"
              value={input.phoneNumber}
              name="phoneNumber"
              onChange={changeEventHandler}
              placeholder="Enter your Mobile number"
            />
          </div>

          {/* Password */}

          <div className="my-4 flex flex-col gap-y-2">
            <Label>Password</Label>
            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder="Enter your password"
            />
          </div>

          {/* Role */}

          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-3 ">
              {/* Candidate */}

              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="candidate"
                  checked={input.role == "candidate"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Candidate</Label>
              </div>

              {/* Recruiter */}

              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role == "recruiter"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Profile */}

          <div className="flex items-center gap-4 my-3">
            <Label>Profile</Label>
            <Input
              accept="image/*"
              type="file"
              onChange={changeFileHandler}
              className="cursor-pointer"
            />
          </div>

          {/* Terms & Conditions */}

          <div className="flex items-start space-x-2 my-3">
            <Checkbox
              className="cursor-pointer"
              id="terms"
              checked={agreed}
              onCheckedChange={(checked) => setAgreed(checked === true)}
            />

            <div className="text-sm leading-tight">
              <label htmlFor="terms" className="font-medium">
                I agree to the&nbsp;
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    type="button"
                    variant="link"
                    className="p-0 h-auto text-[#6C5CE7] underline cursor-pointer"
                  >
                    Terms and Conditions
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="max-w-md w-[90vw] max-h-[70vh] overflow-y-auto p-4 text-sm bg-white border rounded-md shadow-lg"
                  align="start"
                  side="bottom"
                >
                  <h3 className="font-bold text-lg mb-2">
                    📄 Terms & Conditions – HireBird
                  </h3>
                  <p className="mb-2 text-xs text-gray-500">
                    Last Updated: May 03, 2025
                  </p>
                  <p className="mb-2">
                    Welcome to HireBird! These Terms and Conditions govern your
                    access to and use of the HireBird platform, including all
                    features, services, and functionalities available via our
                    website.
                  </p>

                  <h4 className="font-semibold mt-4">1. Definitions</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <strong>User:</strong> Any individual accessing the
                      platform.
                    </li>
                    <li>
                      <strong>Employer:</strong> Posts/view jobs.
                    </li>
                    <li>
                      <strong>Job Seeker:</strong> Applies or uploads resumes.
                    </li>
                    <li>
                      <strong>Content:</strong> Data like resumes, job posts,
                      etc.
                    </li>
                  </ul>

                  <h4 className="font-semibold mt-4">2. User Accounts</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>You must be 18+ years old.</li>
                    <li>Maintain your login credentials securely.</li>
                    <li>Provide accurate, current info.</li>
                  </ul>

                  <h4 className="font-semibold mt-4">3. Use of the Platform</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Apply, upload resumes (Job Seekers).</li>
                    <li>Post/search jobs (Employers).</li>
                    <li>No misuse: fraud, spam, false info.</li>
                  </ul>

                  <h4 className="font-semibold mt-4">
                    4. Content Ownership & License
                  </h4>
                  <p>
                    You retain rights to your content but grant HireBird a
                    license to use it on the platform.
                  </p>

                  <h4 className="font-semibold mt-4">5. Privacy</h4>
                  <p>
                    We follow privacy rules. No data selling. Check our Privacy
                    Policy for details.
                  </p>

                  <h4 className="font-semibold mt-4">6. Termination</h4>
                  <p>
                    We may suspend accounts that violate rules. You may also
                    delete your account anytime.
                  </p>

                  <h4 className="font-semibold mt-4">
                    7. Limitation of Liability
                  </h4>
                  <p>
                    We’re not liable for job outcomes. The service is provided
                    “as-is.”
                  </p>

                  <h4 className="font-semibold mt-4">8. Changes to Terms</h4>
                  <p>
                    We may update terms. Continued use means you accept the
                    updates.
                  </p>

                  <h4 className="font-semibold mt-4">9. Governing Law</h4>
                  <p>
                    U.S. law applies. Jurisdiction: Redwood City, California,
                    United States.
                  </p>

                  <h4 className="font-semibold mt-4">10. Contact Us</h4>
                  <p>
                    📧 support@hirebird.co.us
                    <br />
                    📞 +1 (650) 555-0179 📞 +1 (310) 555-0194
                  </p>
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* SignUp Button */}

          {loading ? (
            <Button className="w-full my-4">
              {" "}
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
          ) : (
            <Button type="submit" className="w-full my-3 cursor-pointer">
              Signup
            </Button>
          )}

          <span className="text-sm">
            Account already exist. Please&nbsp;
            <Link to="/login" className="text-[#6C5CE7] cursor-pointer">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
