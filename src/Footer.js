import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen, faDownload } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Resume from './AdrianCollierResume.pdf';
function Footer() {
  return (
    <footer id="footerWrapper">
      <div id="footerLinks">
        <a href="mailto:adrianccollier@gmail.com">
          <FontAwesomeIcon icon={faEnvelopeOpen} size="lg" />
        </a>
        <a href="https://github.com/AdrianCCollier">
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
        <a href={Resume} download>
          <FontAwesomeIcon icon={faDownload} size="lg" alt="Download Resume" />
        </a>
      </div>
    </footer>
  )
}

export default Footer;
