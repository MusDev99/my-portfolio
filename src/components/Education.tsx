'use client'

import { motion } from 'framer-motion'

interface Education {
  institution: string
  degree: string
  field: string
  duration: string
  grade?: string
  achievements?: string[]
}

const education: Education = {
  institution: 'Universiti Teknologi MARA (UiTM)',
  degree: 'Bachelor of Computer Science',
  field: 'Computer Science',
  duration: '2018 - 2022',
  grade: '3.82',
  achievements: [
    'Dean\'s List for Academic Excellence',
    'Final Year Project: Development of an AI-based System'
  ]
}

export default function Education() {
  return (
    <section id="education" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="card hover:bg-secondary/80 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="flex flex-col md:flex-row md:items-start md:justify-between mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div>
                <h3 className="text-xl font-bold gradient-text">{education.institution}</h3>
                <p className="text-gray-300 mt-1">{education.degree}</p>
                <p className="text-gray-300">{education.field}</p>
              </div>
              <div className="mt-4 md:mt-0 md:text-right">
                <p className="text-primary font-semibold">{education.duration}</p>
                {education.grade && (
                  <p className="text-gray-300 mt-1">
                    <span className="font-semibold">CGPA:</span> {education.grade}
                  </p>
                )}
              </div>
            </motion.div>
            
            {education.achievements && education.achievements.length > 0 && (
              <motion.div 
                className="mt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h4 className="text-sm font-semibold mb-3 text-gray-300">Achievements:</h4>
                <ul className="list-disc list-inside space-y-2">
                  {education.achievements.map((achievement, index) => (
                    <motion.li 
                      key={index} 
                      className="text-gray-300"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    >
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 