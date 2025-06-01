'use client'

import { motion } from 'framer-motion'

interface Experience {
    company: string
    position: string
    duration: string
    location: string
    type: string
    responsibilities: string[]
    keyProjects?: {
        title: string
        description: string[]
    }[]
    skills: string[]
    gradient: string
}

const experiences: Experience[] = [
    {
        company: 'AirAsia',
        position: 'Software Engineer',
        duration: 'Aug 2023 - Present',
        location: 'Sepang, Selangor, Malaysia',
        type: 'Full-time',
        gradient: 'from-blue-500 to-cyan-500',
        responsibilities: [
            'Backend Development & Maintenance for Airline and Enterprise Legacy System',
            'Primarily responsible for developing and maintaining Python-based/ Node Js applications and systems within Google Cloud Platform',
            'Ensure scalability of applications by implementation of SOLID principle, excellence engineering practice and robust software architecture',
            'Implement Gitlab CICD to automate testing, deployment, and integration processes to serverless apps, ensuring fast and reliable software release',
            'Collaborate with Product Owner to gather requirements using Jira, design new features by proof of concept, and troubleshoot bugs from service request'
        ],
        keyProjects: [
            {
                title: 'Auto Seat Assignment',
                description: [
                    'Developed and enhanced an algorithm-based system to automatically assign seats for passengers, improving passenger checkin experience and reduce ground team manual seat assignment',
                    'Integrated the solution into the broader AirAsia check-in and booking systems, ensuring seamless data flow and functionality'
                ]
            }
        ],
        skills: ['Python', 'Angular', 'Google Cloud Platform (GCP)', 'Critical Thinking', 'Gitlab', 'Node.js', 'Linux', 'Agile Methodologies', 'ITIL Implementation']
    },
    {
        company: 'CMA Solutions Sdn Bhd',
        position: 'Software Developer',
        duration: 'Feb 2023 - Aug 2023',
        location: 'On-site',
        type: 'Full-time',
        gradient: 'from-purple-500 to-pink-500',
        responsibilities: [
            'Analyse requirement and business flow of module collection of salary deduction from employer and payment to cooperative in eSPGA',
            'Developing decoupling system between front end in Angular and backend using .NET 6 by RESTful API integration',
            'Conducting functional test based on test script and immediate solve bugs on production server and data cleaning in database'
        ],
        skills: ['Entity Framework', 'REST APIs', '.NET Framework', 'Microsoft SQL Server', 'AngularTs', '.NET Core']
    },
    {
        company: 'IRIS Corporation Berhad',
        position: 'Software Developer',
        duration: 'Apr 2022 - Jan 2023',
        location: 'Putrajaya Federal Territory, Malaysia',
        type: 'Contract',
        gradient: 'from-green-500 to-emerald-500',
        responsibilities: [
            'Deliver and support in writing some technical document such WDD, TDD, SDD for Immigration Body Service module in NIISe project',
            'Involve in assisting solution architect in designing NIISe overall blueprint and managing collaboration of modules'
        ],
        skills: ['UML Diagram', 'UI Mockup (Lo-Fi)', 'Microsoft Office', 'Figma', 'Visual Paradigm', 'System Requirements', 'Software Project Management', 'Team Leadership']
    },
    {
        company: 'Fulkrum Interactive',
        position: 'Programmer',
        duration: 'Sep 2021 - Feb 2022',
        location: 'Kepala Batas, Penang, Malaysia',
        type: 'Internship',
        gradient: 'from-orange-500 to-red-500',
        responsibilities: [
            'Develop Inventory Management System on sugar product that assisting and auditing supply-chain walkthrough including investment, purchase, inventory, sales and delivery',
            'Implemented component-based architecture in React JS for scalability and reusability',
            'Developed microservices using Laravel Lumen for supply chain modules'
        ],
        skills: ['Laravel Lumen', 'React.js', 'Agile Methodologies', 'Scrum', 'Jira']
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

const Experience = () => {
    return (
        <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.h2 
                    className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Work Experience
                </motion.h2>
                <motion.div 
                    className="relative"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Timeline line */}
                    <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-primary to-accent" />
                    
                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                className="relative pl-8"
                                variants={itemVariants}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2" />
                                
                                <div className="card hover:bg-secondary/80 transition-colors">
                                    <div className="mb-4">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                                    {exp.position}
                                                </h3>
                                                <p className="text-gray-300">{exp.company}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-primary font-semibold">{exp.duration}</p>
                                                <p className="text-sm text-gray-400">{exp.type}</p>
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-400 mt-1">{exp.location}</p>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-lg font-semibold mb-2 text-white">Responsibilities:</h4>
                                            <ul className="list-disc list-inside space-y-2">
                                                {exp.responsibilities.map((item, i) => (
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
                                        </div>

                                        {exp.keyProjects && (
                                            <div>
                                                <h4 className="text-lg font-semibold mb-2 text-white">Key Projects:</h4>
                                                {exp.keyProjects.map((project, i) => (
                                                    <div key={i} className="mb-4">
                                                        <h5 className="font-semibold text-primary">{project.title}</h5>
                                                        <ul className="list-disc list-inside space-y-2">
                                                            {project.description.map((desc, j) => (
                                                                <li key={j} className="text-gray-300">{desc}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        <div>
                                            <h4 className="text-lg font-semibold mb-2 text-white">Skills:</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {exp.skills.map((skill, i) => (
                                                    <motion.span
                                                        key={i}
                                                        className={`px-3 py-1 rounded-full text-sm bg-gradient-to-r ${exp.gradient} bg-opacity-20 text-white`}
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 0.3, delay: i * 0.1 }}
                                                    >
                                                        {skill}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Experience 