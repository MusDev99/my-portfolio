// Data type interfaces for portfolio components

export interface Certification {
  name: string
  issuer: string
  date: string
  credentialId?: string
  link?: string
}

export interface KeyProject {
  title: string
  description: string[]
}

export interface Experience {
  company: string
  position: string
  duration: string
  location: string
  type: string
  responsibilities: string[]
  keyProjects?: KeyProject[]
  skills: string[]
  gradient: string
}

export interface Education {
  institution: string
  degree: string
  field: string
  duration: string
  grade?: string
  achievements?: string[]
}

export interface Project {
  title: string
  description: string
  technologies: string[]
  projectLink?: string
  githubLink?: string
  imageUrl?: string
  gradient: string
  featured?: boolean
}

export interface Skill {
  name: string
  iconName: string
  color: string
}

// Social links interface
export interface SocialLink {
  icon: string
  href: string
  color: string
}

// Stats interface
export interface Stat {
  value: string
  label: string
}

// Skills with icons interface for About component
export interface SkillWithIcon {
  icon: string
  title: string
  description: string
}

// Contact interfaces
export interface ContactSocialLink {
  name: string
  icon: string
  url: string
  color: string
}

export interface ContactLocation {
  title: string
  address: string
}

export interface ContactFormField {
  label: string
  placeholder: string
}

export interface ContactFormFields {
  name: ContactFormField
  email: ContactFormField
  message: ContactFormField
}

export interface ContactForm {
  title: string
  fields: ContactFormFields
  submitButton: string
}

export interface ContactData {
  socialLinks: ContactSocialLink[]
  location: ContactLocation
  form: ContactForm
  description: string
}
