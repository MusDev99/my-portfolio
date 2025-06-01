'use client'

import AnimatedSection from './AnimatedSection'

const About = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="card hover:bg-secondary/80 transition-colors">
            <p className="text-gray-300 leading-relaxed">
              I am a passionate Software Engineer with expertise in full-stack development and cloud technologies. 
              Currently working at AirAsia, I specialize in building scalable applications using Python, Node.js, 
              and Google Cloud Platform. My focus is on creating efficient, maintainable, and user-friendly solutions 
              that solve real-world problems.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default About 