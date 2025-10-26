'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp, FaLinkedin, FaInstagram, FaEnvelope, FaGithub, FaCode, FaCloud, FaUsers, FaRocket } from 'react-icons/fa'
import { SkillWithIcon, Stat, SocialLink } from '@/types/portfolio'
import aboutData from '@/data/about.json'

// Icon mapping for skills
const skillIconMap: { [key: string]: React.ReactNode } = {
  FaCode: <FaCode className="w-6 h-6 text-primary" />,
  FaCloud: <FaCloud className="w-6 h-6 text-primary" />,
  FaUsers: <FaUsers className="w-6 h-6 text-primary" />,
  FaRocket: <FaRocket className="w-6 h-6 text-primary" />
}

// Icon mapping for social links
const socialIconMap: { [key: string]: React.ReactNode } = {
  FaWhatsapp: <FaWhatsapp className="w-6 h-6" />,
  FaLinkedin: <FaLinkedin className="w-6 h-6" />,
  FaGithub: <FaGithub className="w-6 h-6" />,
  FaInstagram: <FaInstagram className="w-6 h-6" />,
  FaEnvelope: <FaEnvelope className="w-6 h-6" />
}

// Transform the JSON data
const skills: Array<SkillWithIcon & { iconComponent: React.ReactNode }> = (aboutData.skills as SkillWithIcon[]).map(skill => ({
  ...skill,
  iconComponent: skillIconMap[skill.icon] || <div className="w-6 h-6" />
}))

const stats: Stat[] = aboutData.stats as Stat[]
const socialLinks: SocialLink[] = aboutData.socialLinks as SocialLink[]

const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-muted-light max-w-3xl mx-auto">
            Passionate about creating elegant solutions to complex problems
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Main content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Introduction */}
            <div className="card p-8">
              <p className="text-lg text-muted-light leading-relaxed">
                I am a passionate Software Engineer with expertise in full-stack development and cloud technologies. 
                Currently working at AirAsia, I specialize in building scalable applications using Python, Node.js, 
                and Google Cloud Platform.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card p-6 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      {skill.iconComponent}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {skill.title}
                      </h3>
                      <p className="text-sm text-muted-light">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Stats and Social */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Stats */}
            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-8 gradient-text text-center">
                Quick Stats
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center p-6 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20"
                  >
                    <div className="text-4xl font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-light">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-8 gradient-text text-center">
                Connect With Me
              </h3>
              <div className="flex justify-center gap-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-14 h-14 bg-secondary rounded-full flex items-center justify-center text-muted-light transition-all duration-300 ${social.color} hover:bg-secondary-light`}
                  >
                    {socialIconMap[social.icon]}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="card p-8 text-center"
            >
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Let's Work Together
              </h3>
              <p className="text-muted-light mb-6">
                I'm always interested in new opportunities and exciting projects.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 