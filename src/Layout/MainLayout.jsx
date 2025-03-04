import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";






export default function MainLayout() {
  return (
    <div className="mainLayout">


      <NavBar/>
      <Outlet></Outlet>
      <Footer/>


    </div>
  );
}
