import "./App.css";
import AuthProvider from "./Pages/AuthContext/AuthProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Footer from "./Pages/Share/Footer/Footer";
import TourPackage from "./Pages/TourPackage/TourPackage";
// import FAQ from "./Pages/FAQ/FAQ";
import Blog from "./Pages/Blog/Blog";
import Testimonial from "./Pages/Testimonial/Testimonial";
import About from "./Pages/About/About";
import NotFound from "./Pages/NotFound/NotFound";
import Navigation from "./Pages/Share/Header/Navigation";
import Dashboard from "./Pages/Dashborad/DashBoard/DashBoard";
import AddPackage from "./Pages/Dashborad/AddPackage/AddPackage";
import MyOrder from "./Pages/Dashborad/MyOrder/MyOrder";
import AllOrder from "./Pages/Dashborad/AllOrder/MangeOrder";
import Profile from "./Pages/Dashborad/Profile.js/Profile";
import OrderPlace from "./Pages/OrderPlace/OrderPlace";
import BlogPost from "./Pages/Dashborad/Blog/BlogPost";
import AddAdmin from "./Pages/Dashborad/AddAdmin/AddAdmin";
import MangePackage from "./Pages/Dashborad/MangePackage/MangePackage";
import MangeOrder from "./Pages/Dashborad/AllOrder/MangeOrder";
import MyPost from "./Pages/Dashborad/MyPost/MyPost";
import MangeBlog from "./Pages/Dashborad/MangeBlog/MangeBlog";
import BlogDetails from "./Pages/Blog/BlogDetalis/BlogDetails";
import Review from "./Pages/Dashborad/Review/Review";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/package" element={<TourPackage />} />
            <Route path="/blog" element={<Blog />} />
            <Route
              path="/blogdetails/:id"
              element={
                <PrivateRoute>
                  <BlogDetails />
                </PrivateRoute>
              }
            />
            {/* <Route path="/faq" element={<FAQ />} /> */}
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/orderPlace/:id"
              element={
                <PrivateRoute>
                  <OrderPlace />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route path="/dashboard" element={<Profile />} />
              <Route path="/dashboard/profile" element={<Profile />} />
              <Route path={`/dashboard/allProduct`} element={<AllOrder />} />
              <Route path={`/dashboard/myOrder`} element={<MyOrder />} />
              <Route path={`/dashboard/addPackage`} element={<AddPackage />} />
              <Route
                path={`/dashboard/mangePackage`}
                element={<MangePackage />}
              />
              <Route path={`/dashboard/mangeOrder`} element={<MangeOrder />} />
              <Route path={`/dashboard/blogPost`} element={<BlogPost />} />
              <Route path={`/dashboard/mangeBlog`} element={<MangeBlog />} />
              <Route path={`/dashboard/admin`} element={<AddAdmin />} />
              <Route path={`/dashboard/mypost`} element={<MyPost />} />
              <Route path={`/dashboard/review`} element={<Review />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
