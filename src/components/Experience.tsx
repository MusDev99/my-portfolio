'use client'

import { motion } from 'framer-motion'

interface Experience {
    company: string
    position: string
    duration: string
    description: string[]
    skills: string[]
}

const experiences: Experience[] = [
    {
        company: 'AirAsia',
        position: 'Software Engineer',
        duration: '2022 - Present',
        description: [
            'Developed and maintained microservices using Python and Node.js',
            'Implemented cloud solutions using Google Cloud Platform',
            'Collaborated with cross-functional teams to deliver high-quality software'
        ],
        skills: ['Python', 'Node.js', 'GCP', 'Microservices', 'Docker']
    },
    {
        company: 'Previous Company',
        position: 'Junior Developer',
        duration: '2021 - 2022',
        description: [
            'Built and maintained web applications using React and Node.js',
            'Implemented RESTful APIs and database solutions',
            'Participated in code reviews and agile development processes'
        ],
        skills: ['React', 'Node.js', 'MongoDB', 'REST APIs', 'Git']
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
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut'
        }
    }
}

export default function Experience() {
    return (
        <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.h2 
                    className="text-3xl font-bold mb-8 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Work Experience
                </motion.h2>
                <motion.div 
                    className="space-y-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="card hover:bg-secondary/80 transition-colors"
                            variants={itemVariants}
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-bold gradient-text">{exp.company}</h3>
                                    <p className="text-gray-300 mt-1">{exp.position}</p>
                                </div>
                                <p className="text-primary font-semibold mt-2 md:mt-0">{exp.duration}</p>
                            </div>
                            <ul className="list-disc list-inside space-y-2 mb-4">
                                {exp.description.map((item, i) => (
                                    <motion.li 
                                        key={i} 
                                        className="text-gray-300"
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: i * 0.1 }}
                                    >
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                            <div className="flex flex-wrap gap-2">
                                {exp.skills.map((skill, i) => (
                                    <motion.span
                                        key={i}
                                        className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: i * 0.1 }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
} 