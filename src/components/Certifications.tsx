'use client'

import { motion } from 'framer-motion'

interface Certification {
  name: string
  issuer: string
  date: string
  credentialId?: string
  link?: string
}

const certifications: Certification[] = [
  {
    name: 'Google Cloud Professional Cloud Developer',
    issuer: 'Google Cloud',
    date: '2023',
    credentialId: '123456789',
    link: 'https://www.credential.net/your-credential-id'
  },
  {
    name: 'ITIL Foundation',
    issuer: 'AXELOS',
    date: '2023',
    credentialId: '987654321',
    link: 'https://www.credential.net/your-credential-id'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
}

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Certifications
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certifications.map((cert, index) => (
            <motion.div 
              key={index} 
              className="card hover:bg-secondary/80 transition-colors"
              variants={itemVariants}
            >
              <div className="flex flex-col h-full">
                <motion.h3 
                  className="text-xl font-bold gradient-text mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {cert.name}
                </motion.h3>
                <div className="flex-grow">
                  <motion.p 
                    className="text-gray-300 mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <span className="font-semibold">Issuer:</span> {cert.issuer}
                  </motion.p>
                  <motion.p 
                    className="text-gray-300 mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <span className="font-semibold">Date:</span> {cert.date}
                  </motion.p>
                  {cert.credentialId && (
                    <motion.p 
                      className="text-gray-300 mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <span className="font-semibold">Credential ID:</span> {cert.credentialId}
                    </motion.p>
                  )}
                </div>
                {cert.link && (
                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-accent transition-colors mt-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    View Certificate
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications 