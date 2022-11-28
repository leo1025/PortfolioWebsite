import Link from 'next/link';

function Navbar() {
    return (
    <div>
        <nav>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/resume'>Resume</Link>
            <Link href='/portfolio'>Portfolio</Link>
            <Link href='/contact'>Contact</Link>
        </nav>
    </div>
    )
}

export default Navbar