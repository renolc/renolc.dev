import socialLinks from '../data/socials'

export default () => (
  <footer
    id="footer"
    className="bg-gray-800 text-white py-10 xl:rounded-t-lg shadow-lg"
  >
    <div className="text-center">
      <p>Connect with me</p>
      <div className="flex justify-center space-x-4 mt-4">
        {socialLinks.map(({ Icon, ...link }) => {
          return (
            <a
              key={link.title}
              href={link.href}
              className="hover:text-blue-400"
              title={link.title}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon size={24} />
            </a>
          )
        })}
      </div>
    </div>
  </footer>
)
