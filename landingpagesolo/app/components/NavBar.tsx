import Image from "next/image"
import Link from "next/link"
import UserMenu from "./UserMenu"

// TODO: replace with your real auth check (e.g. from a session/context hook)
const isLoggedIn = true;

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
                    <Link href="/">Home</Link>
        
                    <Link href="/explore">
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

                    {isLoggedIn ? (
                     <UserMenu avatarSrc="/images/profilepic.png" showChat={false} showLanguage={false} />
                    ) : (
                      <>
                        <Link href="/signin" className="nav-signin">
                          Sign In
                        </Link>

                        <Link href="/signup" className="nav-signup">
                          Sign Up
                        </Link>
                      </>
                    )}
                  </nav>
                </div>
              </header>
    )
}