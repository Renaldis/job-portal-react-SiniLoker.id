import Footer from "../footer/Footer";
import Navbarr from "../navbar/Navbarr";

export default function LayoutDashboard(props) {
  return (
    <>
      <Navbarr className="sticky top-0 z-50 bg-white shadow-sm" />
      {props.children} <Footer />
    </>
  );
}
