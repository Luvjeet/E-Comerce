import NavBar from "../common/NavBar";

const Layout = (props) => {
  return (
    <div className={props.className}>
      <NavBar />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
