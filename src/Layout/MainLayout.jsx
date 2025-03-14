import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";
import { ToastContainer } from "react-toastify";

export default function MainLayout() {
  return (
    <div className="mainLayout">
      <NavBar />
      <ToastContainer />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}
