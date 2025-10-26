import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'
import { FaEarthAsia } from 'react-icons/fa6'

interface Project {
  title: string
  description: string
  technologies: string[]
  projectLink?: string
  imageUrl?: string
  gradient: string
}

const projects: Project[] = [
  {
    title: 'Tokyo Itinerary',
    description: 'A web itinerary planner for Tokyo, Japan.',
    technologies: ['Astro', 'TypeScript', 'Tailwind CSS', 'Preact'],
    projectLink: 'https://mus-itinerary.my/',
    gradient: 'from-purple-500 to-pink-500'
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="card group hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              {project.imageUrl && (
                <div className="relative h-48 w-full mb-4 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-b ${project.gradient} opacity-20`} />
                </div>
              )}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className={`text-xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                    {project.title}
                  </h3>
                  {project.projectLink && (
                    <a
                      href={project.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <FaEarthAsia className="w-6 h-6" />
                    </a>
                  )}
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className={`px-3 py-1 rounded-full text-sm bg-gradient-to-r ${project.gradient} bg-opacity-20 text-white`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 