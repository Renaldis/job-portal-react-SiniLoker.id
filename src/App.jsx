import Home from "./Pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import JobVacancies from "./Pages/JobVacancies";
import About from "./Pages/About";
import GlobalJobProvider from "./context/GlobalJobProvider";
import ErrNotFound from "./Pages/ErrNotFound";
import Layout from "./Components/layout/Layout";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Cookies from "js-cookie";
import Dashboard from "./Components/dashboardAdmin/pages/Dashboard";
import DeleteAccount from "./Pages/DeleteAccount";
import LayoutDashboard from "./Components/dashboardAdmin/components/LayoutDashboard";
import AsideRouter from "./Components/dashboardAdmin/components/asideRouter/AsideRouter";
import DashboardProfile from "./Components/dashboardAdmin/pages/DashboardProfile";
import DashboardListJob from "./Components/dashboardAdmin/pages/DashboardListJob";
import DashboardJobForm from "./Components/dashboardAdmin/pages/DashboardJobForm";
import JobVacancyDetail from "./Components/jobVacancyDetail/JobVacancyDetail";
import DashboardEditVacancy from "./Components/dashboardAdmin/pages/DashboardEditVacancy";

function App() {
  // custom route
  const LoginRoute = (props) => {
    if (Cookies.get("token") == undefined) {
      return props.children;
    } else if (Cookies.get("token") !== undefined) {
      return <Navigate to={"/dashboard"} />;
    }
  };
  const DashboardRoute = (props) => {
    if (Cookies.get("token") !== undefined) {
      return props.children;
    } else if (Cookies.get("token") == undefined) {
      return <Navigate to={"/login"} />;
    }
  };
  return (
    <Router>
      <GlobalJobProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/job-vacancies"
            element={
              <Layout>
                <JobVacancies />
              </Layout>
            }
          />
          <Route
            path="/job-vacancies/:id"
            element={
              <Layout>
                <JobVacancyDetail />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route path="*" element={<ErrNotFound />} />
          <Route
            path="/login"
            element={
              <LoginRoute>
                <Login />
              </LoginRoute>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/deleteAcc" element={<DeleteAccount />} />

          <Route
            path="/dashboard"
            element={
              <LayoutDashboard>
                <DashboardRoute>
                  <Dashboard />
                </DashboardRoute>
              </LayoutDashboard>
            }
          />
          <Route
            path="/dashboard/list-job-vacancy"
            element={
              <LayoutDashboard>
                <DashboardRoute>
                  <DashboardListJob />
                </DashboardRoute>
              </LayoutDashboard>
            }
          />
          <Route
            path="/dashboard/list-job-vacancy/create"
            element={
              <LayoutDashboard>
                <DashboardRoute>
                  <DashboardJobForm />
                </DashboardRoute>
              </LayoutDashboard>
            }
          />
          <Route
            path="/dashboard/list-job-vacancy/edit/:id"
            element={
              <LayoutDashboard>
                <DashboardRoute>
                  <DashboardEditVacancy />
                </DashboardRoute>
              </LayoutDashboard>
            }
          />
          <Route
            path="/dashboard/profile"
            element={
              <LayoutDashboard>
                <DashboardRoute>
                  <DashboardProfile />
                </DashboardRoute>
              </LayoutDashboard>
            }
          />
        </Routes>
      </GlobalJobProvider>
    </Router>
  );
}

export default App;
