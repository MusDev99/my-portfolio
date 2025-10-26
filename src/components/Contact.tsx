'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp, FaLinkedin, FaInstagram, FaEnvelope, FaGithub } from 'react-icons/fa'
import { ContactData, ContactSocialLink } from '@/types/portfolio'
import contactData from '@/data/contact.json'
import { useState } from 'react'

// Icon mapping for social links
const iconMap: { [key: string]: React.ReactNode } = {
  FaWhatsapp: <FaWhatsapp className="w-6 h-6" />,
  FaLinkedin: <FaLinkedin className="w-6 h-6" />,
  FaGithub: <FaGithub className="w-6 h-6" />,
  FaInstagram: <FaInstagram className="w-6 h-6" />,
  FaEnvelope: <FaEnvelope className="w-6 h-6" />
}

// Transform the JSON data
const contact: ContactData = contactData as ContactData
const socialLinks: Array<ContactSocialLink & { iconComponent: React.ReactNode }> = 
  contact.socialLinks.map(link => ({
    ...link,
    iconComponent: iconMap[link.icon] || <div className="w-6 h-6" />
  }))

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('') // for success/error messages

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        const errorData = await response.json();
        setStatus(errorData.error || 'Failed to send message.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('Failed to send message.');
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-light max-w-3xl mx-auto">
            Let's connect and discuss your next project
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card p-8"
          >
            <h3 className="text-2xl font-bold mb-8 gradient-text">{contact.form.title}</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                  {contact.form.fields.name.label}
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder={contact.form.fields.name.placeholder}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                  {contact.form.fields.email.label}
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder={contact.form.fields.email.placeholder}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                  {contact.form.fields.message.label}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                  placeholder={contact.form.fields.message.placeholder}
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-6 py-4 btn-primary text-lg font-medium"
                disabled={status === 'Sending...'}
              >
                {status === 'Sending...' ? 'Sending...' : contact.form.submitButton}
              </motion.button>
              {status && <p className="mt-4 text-center">{status}</p>}
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card p-8"
          >
            <h3 className="text-2xl font-bold mb-8 gradient-text">Connect with me</h3>
            <div className="space-y-8">
              <p className="text-lg text-muted-light leading-relaxed">
                {contact.description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-lg bg-secondary border border-border transition-all duration-300 ${link.color} hover:border-primary/50 hover:shadow-lg`}
                  >
                    {link.iconComponent}
                    <span className="font-medium text-foreground">{link.name}</span>
                  </motion.a>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-8 p-6 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-lg"
              >
                <h4 className="font-semibold mb-3 text-foreground flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  {contact.location.title}
                </h4>
                <p className="text-muted-light">{contact.location.address}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 