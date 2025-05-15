import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/shared/MainLayout";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Profile from "./components/Content/Profile";
import Home from "./components/others/Home/Home";
import Jobs from "./components/others/Jobs/Jobs";
import Browse from "./components/others/Context/Browse";
import ContactUs from "./components/others/Helper/ContactUs";
import About from "./components/others/Helper/About";
import Privacy from "./components/shared/Privacy";
import TermsNConditions from "./components/shared/TermsNConditions";
import JobDescription from "./components/others/Jobs/JobDescription";
import Companies from "./components/others/Admin/Companies";
import CompanyCreate from "./components/others/Admin/CompanyCreate";
import CompanyLayout from "./components/shared/CompanyLayout";
import CompanySetup from "./components/others/Admin/CompanySetup";
import AdminJobs from "./components/others/Admin/AdminJobs";
import PostJob from "./components/others/Admin/PostJob";
import Applicants from "./components/others/Admin/Applicants";
import ProtectedRoute from "./components/others/Admin/ProtectedRoute";

const appRouter = createBrowserRouter([
  //main route

  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/jobs", element: <Jobs /> },
      { path: "/browse", element: <Browse /> },
      { path: "/contactUs", element: <ContactUs /> },
      { path: "/about", element: <About /> },
      { path: "/privacy-policy", element: <Privacy /> },
      { path: "/terms-n-conditions", element: <TermsNConditions /> },
    ],
  },

  //login route

  {
    path: "/login",
    element: <Login />,
  },

  //profile route

  {
    path: "/profile",
    element: <Profile />,
  },

  //Job Description Route

  {
    path: "/description/:id",
    element: <JobDescription />,
  },

  //signup route

  {
    path: "/signup",
    element: <Signup />,
  },

  //Admin Control

  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <CompanyLayout />
      </ProtectedRoute>
    ),
    children: [
      //Companies

      {
        path: "companies",
        element: <Companies />,
      },

      //CompanyCreate

      {
        path: "companies/create",
        element: <CompanyCreate />,
      },

      //Company Id

      {
        path: "companies/:id",
        element: <CompanySetup />,
      },

      //Admin Job

      {
        path: "jobs",
        element: <AdminJobs />,
      },

      //Post Job

      {
        path: "jobs/create",
        element: <PostJob />,
      },

      //Applicants

      {
        path: "jobs/:id/applicants",
        element: <Applicants />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
