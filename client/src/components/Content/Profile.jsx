import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Mail, Pen, PhoneCall } from "lucide-react";
import { Badge } from "../ui/badge";
import { Label } from "../ui/label";
import AppliedJobTable from "../Content/AppliedJobTable";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";
import useGetAppliedJobs from "../hooks/useGetAppliedJobs";

const isResume = true;

const Profile = () => {
  useGetAppliedJobs();
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);

  return (
    <div>
      <Navbar />

      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            {/* Avatar */}

            <Avatar className="h-24 w-24">
              <AvatarImage
                src={user?.profile?.profilePicture}
                alt="Profile Picture"
              />
            </Avatar>

            {/* Full Name */}

            <div>
              <h1 className="font-medium text-xl">{user?.fullname}</h1>
              <p>{user?.profile?.bio}</p>
            </div>
          </div>

          {/* Edit Button */}

          <Button
            onClick={() => setOpen(true)}
            className="text-right cursor-pointer"
            variant="outline"
          >
            <Pen />
          </Button>
        </div>

        <div className="my-5">
          {/* Email */}

          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>{user?.email}</span>
          </div>

          {/* Contact */}

          <div className="flex items-center gap-3 my-2">
            <PhoneCall />
            <span>{user?.phoneNumber}</span>
          </div>
        </div>

        {user && user.role === "candidate" ? (
          <>
            {/* Skills */}

            <div className="my-5">
              <h1>Skills</h1>

              <div className="flex items-center gap-1 flex-wrap">
                {user?.profile?.skills.length !== 0 ? (
                  user?.profile?.skills.map((item, index) => (
                    <Badge key={index}>{item}</Badge>
                  ))
                ) : (
                  <span>NA</span>
                )}
              </div>
            </div>

            {/* Resume */}

            <div className="grid w-full max-w-sa items-center gap-1.5">
              <Label className="text-md font-bold">Resume</Label>

              {isResume && user?.profile?.resume ? (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={user?.profile?.resume}
                  className="text-blue-500 w-full hover:underline cursor-pointer"
                >
                  {user?.profile?.resumeOriginalName}
                </a>
              ) : (
                <span>NA</span>
              )}
            </div>

            {/* Applied Jobs */}

            <div className="max-w-4xl mx-auto bg-white rounded-2xl mt-6">
              <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
              <AppliedJobTable />
            </div>
          </>
        ) : (
          <>
            {/* Recruiter Profile Display (No additional fields) */}

            <p>{user?.profile?.bio}</p>
          </>
        )}

        {/* Update Dialog (always rendered) */}

        <UpdateProfileDialog open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default Profile;
