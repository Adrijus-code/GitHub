import Twitter from '../assets/twitter.png'
import Facebook from '../assets/facebook.png'
import Instagram from '../assets/instagram.png'
import Github from '../assets/github.png'

export default function Footer(){
    return(
        <footer className='footer'>
            <span className="footer-icon-span"><img className='footer-icon' src={Twitter}/></span>
            <span className="footer-icon-span"><img className='footer-icon' src={Facebook}/></span>
            <span className="footer-icon-span"><img className='footer-icon' src={Instagram}/></span>
            <span className="footer-icon-span"><img className='footer-icon' src={Github}/></span>
        </footer>
    )
}