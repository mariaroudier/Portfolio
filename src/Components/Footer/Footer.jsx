import { NavLink } from 'react-router-dom';
import github from '../github.png'
import linkedin from '../linkedin.png'

function Footer(){
return(
      <div className="footer">
            <div className='footer-content'>
                  <div className='footer_content-block'>
                        <span className='heading-third'>MARIA ROUDIER</span>
                        <span className="sub">A Frontend Web Developer</span>
                  </div>
                  <div className='footer_content-block'>
                        <span className='heading-third'>SOCIAL</span>
                        <div className='footer_content_block-icons'>
                              <NavLink className='link-footer' to='https://github.com/mariaroudier'><img className='footer_content_block-icon' src={github}></img></NavLink>
                              <NavLink className='link-footer' to='https://linkedin.com/in/mariaroudier/?locale=fr_FR'><img className='footer_content_block-icon linkedin' src={linkedin}></img></NavLink>
                        </div>
                  </div>
            </div>
            <span id='copyrights'>© Copyright 2023. Made by Maria Roudier</span>
            <a href="https://www.flaticon.com/free-icons/next" title="next icons" className='link-rights'>Next icons created by Fathema Khanom - Flaticon</a>
            <a href="https://www.flaticon.com/free-icons/ui" title="ui icons"className='link-rights'>Ui icons created by Fathema Khanom - Flaticon</a>
      </div>
)
}

export default Footer;