'use client'

import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaGithub } from 'react-icons/fa'
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiFramer } from 'react-icons/si'

const Footer = () => {
  const techStack = [
    { name: 'Next.js', icon: <SiNextdotjs className="w-6 h-6" />, color: 'hover:text-white' },
    { name: 'React', icon: <FaReact className="w-6 h-6" />, color: 'hover:text-blue-400' },
    { name: 'TypeScript', icon: <SiTypescript className="w-6 h-6" />, color: 'hover:text-blue-500' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-6 h-6" />, color: 'hover:text-cyan-400' },
    { name: 'Framer Motion', icon: <SiFramer className="w-6 h-6" />, color: 'hover:text-pink-500' },
    { name: 'Node.js', icon: <FaNodeJs className="w-6 h-6" />, color: 'hover:text-green-500' },
  ]

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Tech Stack */}
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Built with
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {techStack.map((tech) => (
                <motion.div
                  key={tech.name}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 text-gray-400"
                >
                  {tech.icon}
                  <span className={`text-sm ${tech.color}`}>{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Copyright and Links */}
          <div className="flex flex-col items-center md:items-end justify-center">
            <p className="text-gray-400 text-sm mb-4">
              © {new Date().getFullYear()} Muhammad Mustaqeem. All rights reserved.
            </p>
            <a
              href="https://github.com/MusDev99/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub className="w-5 h-5" />
              <span className="text-sm">View Source Code</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 