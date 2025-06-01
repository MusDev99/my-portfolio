'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp, FaLinkedin, FaInstagram, FaEnvelope, FaGithub } from 'react-icons/fa'

const About = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Text content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="card hover:bg-secondary/80 transition-colors p-6">
                <p className="text-gray-300 leading-relaxed text-lg">
                  I am a passionate Software Engineer with expertise in full-stack development and cloud technologies. 
                  Currently working at AirAsia, I specialize in building scalable applications using Python, Node.js, 
                  and Google Cloud Platform.
                </p>
              </div>

              <div className="card hover:bg-secondary/80 transition-colors p-6">
                <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  What I Do
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Building scalable backend systems and microservices
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Implementing cloud solutions and DevOps practices
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Creating efficient and maintainable code
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Collaborating with cross-functional teams
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Right side - Stats and Social */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="card hover:bg-secondary/80 transition-colors p-6">
                <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Quick Stats
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-lg bg-primary/10">
                    <div className="text-3xl font-bold text-primary">4+</div>
                    <div className="text-sm text-gray-400">Years Experience</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-primary/10">
                    <div className="text-3xl font-bold text-primary">10+</div>
                    <div className="text-sm text-gray-400">Projects Completed</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-primary/10">
                    <div className="text-3xl font-bold text-primary">5+</div>
                    <div className="text-sm text-gray-400">Companies Worked</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-primary/10">
                    <div className="text-3xl font-bold text-primary">3+</div>
                    <div className="text-sm text-gray-400">Cloud Platforms</div>
                  </div>
                </div>
              </div>

              <div className="card hover:bg-secondary/80 transition-colors p-6">
                <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Connect With Me
                </h3>
                <div className="flex justify-center gap-6">
                  <a
                    href="https://wa.me/+60139004163"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-500 transition-colors"
                  >
                    <FaWhatsapp className="w-8 h-8" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/muhammad-mustaqeem-mashasan-1b5880215/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    <FaLinkedin className="w-8 h-8" />
                  </a>
                  <a
                    href="https://github.com/MusDev99"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <FaGithub className="w-8 h-8" />
                  </a>
                  <a
                    href="https://instagram.com/mustagram.ofc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-pink-500 transition-colors"
                  >
                    <FaInstagram className="w-8 h-8" />
                  </a>
                  <a
                    href="mailto:muhd.mustaqeem99@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <FaEnvelope className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 