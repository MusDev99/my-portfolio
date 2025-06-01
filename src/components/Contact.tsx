import { FaWhatsapp, FaLinkedin, FaInstagram, FaEnvelope, FaGithub } from 'react-icons/fa'

interface SocialLink {
  name: string
  icon: React.ReactNode
  url: string
  color: string
}

const socialLinks: SocialLink[] = [
  {
    name: 'WhatsApp',
    icon: <FaWhatsapp className="w-6 h-6" />,
    url: 'https://wa.me/+60139004163',
    color: 'hover:bg-green-500'
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedin className="w-6 h-6" />,
    url: 'https://www.linkedin.com/in/muhammad-mustaqeem-mashasan-1b5880215/',
    color: 'hover:bg-blue-600'
  },
  {
    name: 'GitHub',
    icon: <FaGithub className="w-6 h-6" />,
    url: 'https://github.com/MusDev99',
    color: 'hover:bg-gray-700'
  },
  {
    name: 'Instagram',
    icon: <FaInstagram className="w-6 h-6" />,
    url: 'https://instagram.com/mustagram.ofc',
    color: 'hover:bg-pink-600'
  },
  {
    name: 'Email',
    icon: <FaEnvelope className="w-6 h-6" />,
    url: 'mailto:muhd.mustaqeem99@gmail.com',
    color: 'hover:bg-red-500'
  }
]

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="card">
            <h3 className="text-xl font-bold mb-6 gradient-text">Send me a message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-accent transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="card">
            <h3 className="text-xl font-bold mb-6 gradient-text">Connect with me</h3>
            <div className="space-y-6">
              <p className="text-gray-300">
                Feel free to reach out to me through any of these platforms. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-4 rounded-lg bg-muted transition-all duration-300 ${link.color}`}
                  >
                    {link.icon}
                    <span className="font-medium">{link.name}</span>
                  </a>
                ))}
              </div>
              <div className="mt-8 p-4 bg-muted rounded-lg">
                <h4 className="font-semibold mb-2">Location</h4>
                <p className="text-gray-300">CyberSouth, Sepang, Malaysia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 