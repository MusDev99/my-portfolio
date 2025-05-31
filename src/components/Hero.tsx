'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Profile Photo */}
          <motion.div 
            className="w-64 h-64 md:w-80 md:h-80 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-50"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20">
              <Image
                src="/images/my-photo.jpeg"
                alt="Muhammad Mustaqeem"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            className="text-center md:text-left max-w-2xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Muhammad Mustaqeem Mashasan</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Software Engineer & Full Stack Developer
            </p>
            <p className="text-gray-400 mb-8">
              Passionate about creating elegant solutions to complex problems. 
              Specializing in web development and cloud technologies.
            </p>
            <motion.div 
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
            >
              <a
                href="#contact"
                className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-accent transition-colors"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
              >
                View Projects
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 