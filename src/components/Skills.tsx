import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNodedotjs, 
  SiPython, 
  SiPostgresql, 
  SiGit, 
  SiGooglecloud 
} from 'react-icons/si'

interface Skill {
  name: string
  icon: React.ReactNode
  color: string
}

const skills: Skill[] = [
  {
    name: 'JavaScript',
    icon: <SiJavascript className="w-8 h-8" />,
    color: 'from-yellow-400 to-yellow-600'
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript className="w-8 h-8" />,
    color: 'from-blue-500 to-blue-700'
  },
  {
    name: 'React',
    icon: <SiReact className="w-8 h-8" />,
    color: 'from-cyan-400 to-blue-600'
  },
  {
    name: 'Node.js',
    icon: <SiNodedotjs className="w-8 h-8" />,
    color: 'from-green-500 to-green-700'
  },
  {
    name: 'Python',
    icon: <SiPython className="w-8 h-8" />,
    color: 'from-blue-500 to-yellow-500'
  },
  {
    name: 'SQL',
    icon: <SiPostgresql className="w-8 h-8" />,
    color: 'from-blue-400 to-blue-600'
  },
  {
    name: 'Git',
    icon: <SiGit className="w-8 h-8" />,
    color: 'from-orange-500 to-red-600'
  },
  {
    name: 'GCP',
    icon: <SiGooglecloud className="w-8 h-8" />,
    color: 'from-blue-400 to-blue-600'
  }
]

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div 
              key={skill.name} 
              className="card hover:bg-secondary/80 transition-colors p-6 flex flex-col items-center gap-4"
            >
              <div className="text-4xl">
                {skill.icon}
              </div>
              <span className={`text-lg font-medium bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills 