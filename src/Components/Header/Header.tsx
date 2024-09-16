
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <nav className="navbar bg-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand active text-white" to="/">
            Free Games
          </Link>
          <button
            className="navbar-toggler  bg-white"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end bg-dark"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header bg-main text-white ">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Free Games
              </h5>
              <button
                type="button"
                className="btn-close bg-danger border-0"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body ">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 ">
                <li className="nav-item Text">
                  <Link className="nav-link text-secondary" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link text-secondary" to="/zombie">
                    Zombie
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link text-secondary" to="/battleRoyale">
                    Battle Royale
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link text-secondary" to="/racing">
                    Racing
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link text-secondary" to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link text-secondary" to="/fighting">
                    Fighting
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
