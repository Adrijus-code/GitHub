import heroImage from '../assets/hero.png'
import emailIcon from '../assets/email.png'
import linkedInIcon from '../assets/linkedin.png'


export default function Info(){
    return(
        <section className='info-section'>
            <div className="hero-img-div"></div>
           <div className="hero-description-div">
                <h1 className="hero-name">Laura Smith</h1>
                <p className="hero-job-description">Frontend Developer</p>
                <p className="hero-site">laurasmith.website</p>
                <div className="button-div">
                    <button className="btn email-btn"><img className="email-icon" src={emailIcon}/>Email</button>
                    <button className="btn linkedin-btn"><img className="linkedin-icon" src={linkedInIcon}/>LinkedIn</button>
                </div>
           </div>
        </section>
    )
}