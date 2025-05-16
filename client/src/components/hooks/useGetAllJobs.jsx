import { setAllJobs } from "@/store/jobslice";
import { JOB_API_END_POINT } from "../../utils/constant";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useGetAllJobs = () => {
  const dispatch = useDispatch();

  const { searchedQuery } = useSelector((store) => store.job);

  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        // Convert searchedQuery (object) to proper string keyword for backend
        let keyword = "";

        if (searchedQuery && searchedQuery.value) {
          keyword = searchedQuery.value;
        }

        // Call API with optional keyword param

        const url = keyword
          ? `${JOB_API_END_POINT}/get?keyword=${encodeURIComponent(keyword)}`
          : `${JOB_API_END_POINT}/get`;

        const res = await axios.get(url, { withCredentials: true });

        if (res.data.success) {
          dispatch(setAllJobs(res.data.jobs));
        } else {
          dispatch(setAllJobs([])); // Clear jobs if fetch fails
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
        dispatch(setAllJobs([])); // Clear jobs on error
      }
    };

    fetchAllJobs();
  }, [dispatch, searchedQuery]);
};

export default useGetAllJobs;
