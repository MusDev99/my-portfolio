export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            <span className="gradient-text">Software Engineer</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Building innovative solutions with modern technologies
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-accent transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 