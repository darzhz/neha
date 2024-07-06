import './navbar.css';
function Navbar() {
  return (
    <>
      <div className="nav">
        <div className="logo">
          <p>Neha</p>
        </div>
        <div className="links">
          <a className="link " href="#">
            Home
          </a>
          <a className="link " href="#projects">
            Projects
          </a>
          <a className="link " href="#contact">
            Contacts
          </a>
        </div>
      </div>
    </>
  );
}
export default Navbar;
