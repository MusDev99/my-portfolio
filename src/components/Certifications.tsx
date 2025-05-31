interface Certification {
  name: string
  issuer: string
  date: string
  credentialId?: string
  link?: string
}

const certifications: Certification[] = [
  {
    name: 'Google Cloud Professional Cloud Developer',
    issuer: 'Google Cloud',
    date: '2023',
    credentialId: '123456789',
    link: 'https://www.credential.net/your-credential-id'
  },
  {
    name: 'ITIL Foundation',
    issuer: 'PeopleCert',
    date: '2024',
    credentialId: 'GR671712263MB',
    link: 'https://www.peoplecert.org/for-corporations/certificate-verification-service'
  }
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="card hover:bg-secondary/80 transition-colors">
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-bold gradient-text mb-2">{cert.name}</h3>
                <div className="flex-grow">
                  <p className="text-gray-300 mb-2">
                    <span className="font-semibold">Issuer:</span> {cert.issuer}
                  </p>
                  <p className="text-gray-300 mb-2">
                    <span className="font-semibold">Date:</span> {cert.date}
                  </p>
                  {cert.credentialId && (
                    <p className="text-gray-300 mb-4">
                      <span className="font-semibold">Credential ID:</span> {cert.credentialId}
                    </p>
                  )}
                </div>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-accent transition-colors mt-4"
                  >
                    View Certificate
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 