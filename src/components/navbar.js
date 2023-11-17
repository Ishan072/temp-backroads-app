
import logo from '../images/logo.svg';
import { pageLinks,socialLinks } from '../data';

const Navbar = () => {
    return (
        <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <ul className="nav-links" id="nav-links">
          {pageLinks.map((pagelink) => {
                    return (
                        <li key={pagelink.id}>
                            <a href={pagelink.href} className="nav-link"> {pagelink.text} </a>
                        </li>
                    );
                })}
          </ul>
  
          <ul className="nav-icons">
            {socialLinks.map((sociallink) => {
                return (
                <li key={sociallink.id}>
                <a href={sociallink.href} target="_blank" rel="noreferrer" className="nav-icon">
                    <i className={sociallink.icon}></i></a>
                </li>
                );
            })
            }
          </ul>
        </div>
      </nav>  
    );
}

export default Navbar;