import { contact } from '../../portfolio'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600">
            Ready to start your learning journey? Contact us today!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <a
            href={`mailto:${contact.email}`}
            className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300"
          >
            <div className="text-4xl mb-4">📧</div>
            <h3 className="font-bold text-gray-900 mb-2">Email</h3>
            <p className="text-primary">{contact.email}</p>
          </a>

          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300"
          >
            <div className="text-4xl mb-4">💬</div>
            <h3 className="font-bold text-gray-900 mb-2">WhatsApp</h3>
            <p className="text-primary">Chat with us</p>
          </a>

          <a
            href={contact.social?.linkedin}
            target="_blank"
            rel="noreferrer"
            className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300"
          >
            <div className="text-4xl mb-4">💼</div>
            <h3 className="font-bold text-gray-900 mb-2">LinkedIn</h3>
            <p className="text-primary">Connect with us</p>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
