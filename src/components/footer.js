import { pageLinks,socialLinks } from "../data";

const Footer = () => {
    return (
        <footer className="section footer">
        <ul className="footer-links">
            {pageLinks.map((pagelink) => {
                return (
                    <li key={pagelink.id}>
                        <a href={pagelink.href} className="footer-link">{pagelink.text}</a>
                    </li>
                );
            })}
        </ul>
        <ul className="footer-icons">
             {socialLinks.map((sociallink => {
                return (
                    <li key={sociallink.id}>
                    <a href={sociallink.href} rel="noreferrer" target="_blank" className="footer-icon"
                      ><i className={sociallink.icon}></i
                    ></a>
                  </li>   
                );
             }))}
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
      </footer>
    );
}

export default Footer;