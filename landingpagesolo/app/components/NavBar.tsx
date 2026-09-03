import Image from "next/image"
import Link from "next/link"

export default function NavBar(){
    return(
        <header className="navbar">
                <div className="nav-container">
                    <Image
                      src="/images/solologo.png"
                      alt="SOLO logo"
                      width={120}
                      height={55}
                      priority
                    />
        
                  <nav className="nav-links">
                    <Link href="\">Home</Link>
        
                    <Link href="\explore">
                      Explore 
                    </Link>
        
                    <a href="#">
                      Stakeholder Journey <span>▾</span>
                    </a>
        
                    <a href="#">Infrastructure</a>
        
                    <a href="#">Success Stories</a>
        
                    <a href="#">
                      Contact Us <span>▾</span>
                    </a>
        
                    <a href="#">Blog</a>
        
                    <a href="#" className="contact-btn">
                      Get Started
                    </a>
                  </nav>
                </div>
              </header>
    )
}