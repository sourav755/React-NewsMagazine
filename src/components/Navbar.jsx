const Navbar = ({ setCategory }) => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <span className="badge bg-light text-dark fs-4">NewsBag</span>
          </a>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a
                className="nav-link active"
                aria-current="page"
                // href="#"
                onClick={() => setCategory("general")}
              >
                Home
              </a>
              <a className="nav-link" onClick={() => setCategory("technology")}>
                Technology
              </a>
              <a className="nav-link" onClick={() => setCategory("business")}>
                Business
              </a>
              <a className="nav-link" onClick={() => setCategory("science")}>
                Science
              </a>
              <a className="nav-link" onClick={() => setCategory("health")}>
                Health
              </a>
              <a className="nav-link" onClick={() => setCategory("sports")}>
                Sports
              </a>
              <a
                className="nav-link"
                onClick={() => setCategory("entertainment")}
              >
                Entertainment
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
