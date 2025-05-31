import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-secondary/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold gradient-text">Portfolio</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="#about" className="nav-link px-3 py-2 text-sm font-medium">About</Link>
              <Link href="#projects" className="nav-link px-3 py-2 text-sm font-medium">Projects</Link>
              <Link href="#skills" className="nav-link px-3 py-2 text-sm font-medium">Skills</Link>
              <Link href="#contact" className="nav-link px-3 py-2 text-sm font-medium">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 