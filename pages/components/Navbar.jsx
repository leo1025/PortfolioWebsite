import Link from 'next/link';

function Navbar() {
    return (
    <div>
        <nav className='navbar navbar-expand-sm navbar-dark'>
            <div className='container-fluid'>
                <Link href='/' className='navbar-brand mb-0 h1'>LeonaDA</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className='navbar-nav ms-auto'>
                        <li className='navbar-item'>
                            <Link className='nav-link' href='/about'>About</Link>
                        </li>
                        <li className='navbar-item'>
                            <Link className='nav-link' href='/resume'>Resume</Link>
                        </li>
                        <li className='navbar-item'>
                            <Link className='nav-link' href='/portfolio'>Portfolio</Link>
                        </li>
                        <li className='navbar-item'>
                            <Link className='nav-link' href='/contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    )
}

export default Navbar