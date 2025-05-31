interface WorkExperience {
    company: string
    position: string
    duration: string
    description: string
    keySkills: string[]
    achievements: string[]
}

const experiences: WorkExperience[] = [
    {
        company: 'AirAsia',
        position: 'Software Engineer',
        duration: 'Aug2023 - Current',
        description: 'Worked on the airline\'s customer checkin system',
        keySkills: [
            'Python',
            'Flask',
            'GCP',
            'Express JS',
            'Next JS'
        ],
        achievements: [
            'Redesigned the booking interface improving conversion by 25%',
            'Implemented automated testing reducing bugs by 30%',
            'Optimized frontend performance for mobile users'
        ]
    },
    {
        company: 'CMA Solution',
        position: 'Full Stack Developer',
        duration: 'Feb2023 - July2023',
        description: 'Developed and maintained multiple web applications for enterprise clients.',
        keySkills: [
            'JavaScript',
            'Python',
            'Django',
            'PostgreSQL',
            'Docker'
        ],
        achievements: [
            'Built a real-time data processing system',
            'Implemented CI/CD pipelines reducing deployment time by 60%',
            'Developed RESTful APIs serving 1M+ requests daily'
        ]
    },
    {
        company: 'IRIS Corp',
        position: 'Software Developer',
        duration: 'April2022 - Jan2023',
        description: 'Leading development of enterprise-level applications and implementing innovative solutions.',
        keySkills: [
            'React',
            'TypeScript',
            'Node.js',
            'AWS',
            'Microservices'
        ],
        achievements: [
            'Architected and developed a scalable microservices platform',
            'Improved application performance by 40% through optimization',
            'Led a team of 5 developers in implementing new features'
        ]
    },
]

export default function Experience() {
    return (
        <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative">
                            {/* Timeline line */}
                            {index !== experiences.length - 1 && (
                                <div className="absolute left-4 top-12 bottom-0 w-0.5 bg-primary/30" />
                            )}

                            <div className="relative flex gap-6">
                                {/* Timeline dot */}
                                <div className="absolute left-4 top-4 w-2 h-2 rounded-full bg-primary" />

                                {/* Content */}
                                <div className="ml-8 flex-1">
                                    <div className="card hover:bg-secondary/80 transition-colors">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                            <div>
                                                <h3 className="text-xl font-bold gradient-text">{exp.company}</h3>
                                                <p className="text-gray-300">{exp.position}</p>
                                            </div>
                                            <span className="text-sm text-primary mt-2 md:mt-0">{exp.duration}</span>
                                        </div>

                                        <p className="text-gray-300 mb-4">{exp.description}</p>

                                        {/* Key Skills */}
                                        <div className="mb-4">
                                            <h4 className="text-sm font-semibold mb-2 text-gray-300">Key Skills:</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {exp.keySkills.map((skill, skillIndex) => (
                                                    <span
                                                        key={skillIndex}
                                                        className="px-3 py-1 bg-muted rounded-full text-sm text-primary"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Achievements */}
                                        <div>
                                            <h4 className="text-sm font-semibold mb-2 text-gray-300">Key Achievements:</h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-300">
                                                {exp.achievements.map((achievement, achievementIndex) => (
                                                    <li key={achievementIndex} className="text-sm">
                                                        {achievement}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
} 