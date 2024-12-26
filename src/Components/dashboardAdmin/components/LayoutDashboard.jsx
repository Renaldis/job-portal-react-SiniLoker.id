import NavbarDashboard from "./NavbarDashboard";

export default function Layout(props) {
  return (
    <>
      <NavbarDashboard />
      {props.children}
    </>
  );
}
