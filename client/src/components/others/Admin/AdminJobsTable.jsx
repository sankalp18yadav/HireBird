import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import { Edit2, Eye, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminJobsTable = () => {
  const { allAdminJobs, searchJobByText } = useSelector((store) => store.job);

  const [filterJobs, setFilterJobs] = useState(allAdminJobs);

  const navigate = useNavigate();

  useEffect(() => {
    const filteredJobs =
      allAdminJobs.length >= 0 &&
      allAdminJobs.filter((job) => {
        if (!searchJobByText) {
          return true;
        }

        return job?.title
          ?.toLowerCase()
          .includes(
            searchJobByText.toLowerCase() ||
              job?.company?.name
                ?.toLowerCase()
                .includes(searchJobByText.toLowerCase())
          );
      });

    setFilterJobs(filteredJobs);
  }, [allAdminJobs, searchJobByText]);

  return (
    <div>
      <Table className="table-fixed w-full">
        {/* Table Caption */}

        <TableCaption>
          A list of your recently registered posted jobs
        </TableCaption>

        {/* Table Header */}

        <TableHeader>
          {/* Table Row */}

          <TableRow>
            {/* Table Head */}

            <TableHead className="w-[20%]">Company Name</TableHead>
            <TableHead className="w-[20%]">Role</TableHead>
            <TableHead className="w-[20%]">Country</TableHead>
            <TableHead className="w-[20%]">Date</TableHead>
            <TableHead className="w-[20%] text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        {/* Table Body */}

        <TableBody>
          {filterJobs?.map((job) => (
            // Table Row

            <TableRow key={job?._id}>
              {/* Table Cell */}

              <TableCell className="w-[20%]">{job?.company?.name}</TableCell>
              <TableCell className="w-[20%]">{job?.title}</TableCell>
              <TableCell className="w-[20%]">{job?.country}</TableCell>
              <TableCell className="w-[20%]">
                {job?.createdAt.split("T")[0]}
              </TableCell>
              <TableCell className="w-[20%] text-right cursor-pointer">
                {/* Popover */}

                <Popover>
                  {/* Popover Trigger */}

                  <PopoverTrigger>
                    {/* Horizontal */}

                    <MoreHorizontal />
                  </PopoverTrigger>

                  {/* Popover Content */}

                  <PopoverContent className="w-32">
                    {/* Look Applicants */}

                    <div
                      onClick={() =>
                        navigate(`/admin/jobs/${job._id}/applicants`)
                      }
                      className="flex items-center w-fit gap-2 cursor-pointer mt-2"
                    >
                      <Eye className="w-4" />

                      <span>Applicants</span>
                    </div>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminJobsTable;
