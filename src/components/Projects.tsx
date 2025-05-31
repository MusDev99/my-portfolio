interface Project {
  title: string
  description: string
  technologies: string[]
}

const projects: Project[] = [
  {
    title: 'Project One',
    description: 'A brief description of the project and its key features.',
    technologies: ['React', 'Node.js']
  },
  {
    title: 'Project Two',
    description: 'Another impressive project showcasing different technologies.',
    technologies: ['Next.js', 'TypeScript']
  },
  {
    title: 'Project Three',
    description: 'A third project demonstrating versatility and technical skills.',
    technologies: ['Python', 'Django']
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="card">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex space-x-2">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="px-2 py-1 bg-muted rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 