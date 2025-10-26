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
import { Skill } from '@/types/portfolio'
import skillsData from '@/data/skills.json'

// Icon mapping
const iconMap: { [key: string]: React.ReactNode } = {
  SiJavascript: <SiJavascript className="w-8 h-8" />,
  SiTypescript: <SiTypescript className="w-8 h-8" />,
  SiReact: <SiReact className="w-8 h-8" />,
  SiNodedotjs: <SiNodedotjs className="w-8 h-8" />,
  SiPython: <SiPython className="w-8 h-8" />,
  SiPostgresql: <SiPostgresql className="w-8 h-8" />,
  SiGit: <SiGit className="w-8 h-8" />,
  SiGooglecloud: <SiGooglecloud className="w-8 h-8" />
}

// Transform the JSON data to include React components
const skills: Array<Skill & { icon: React.ReactNode }> = (skillsData as Skill[]).map(skill => ({
  ...skill,
  icon: iconMap[skill.iconName] || <div className="w-8 h-8" />
}))

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