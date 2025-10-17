import { Link } from 'react-scroll'

export default () => (
  <>
    <nav className="bg-gray-800 text-white py-4 sticky top-0 z-50">
      <ul className="flex justify-center space-x-8">
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="text-blue-400"
            className="hover:text-blue-400 transition-colors cursor-pointer"
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="text-blue-400"
            className="hover:text-blue-400 transition-colors cursor-pointer"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="text-blue-400"
            className="hover:text-blue-400 transition-colors cursor-pointer"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="text-blue-400"
            className="hover:text-blue-400 transition-colors cursor-pointer"
          >
            Contact Me
          </Link>
        </li>
        <li>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="text-blue-400"
            className="hover:text-blue-400 transition-colors cursor-pointer"
          >
            Experience
          </Link>
        </li>
      </ul>
    </nav>

    <section id="about" className="bg-gray-100 py-20">
      <img
        src="/src/public/logo.svg"
        alt="Logo"
        className="mx-auto mb-4 w-50 h-50"
      />
      <h1 className="text-4xl font-bold text-center">Phillip Gibson</h1>
      <p className="text-center mt-4 max-w-2xl mx-auto">
        I'm a developer with over 15 years of experience, specializing in web
        technologies. My current focus is on front-end development, but I have
        plenty of full-stack experience. I'm currently open for new
        opportunities—let's build something great together!
      </p>
    </section>

    <section id="skills" className="bg-gray-200 py-20">
      <h1 className="text-4xl font-bold text-center">Skills</h1>
      <div className="mt-8 max-w-2xl mx-auto grid grid-cols-4 gap-8">
        {[
          { tech: 'JavaScript', years: 12 },
          { tech: 'HTML', years: 10 },
          { tech: 'Postgres', years: 10 },
          { tech: 'CSS', years: 9 },
          { tech: 'Node.js', years: 9 },
          { tech: 'React', years: 8 },
          { tech: 'Next.js', years: 8 },
          { tech: 'Jest', years: 8 },
          { tech: 'Express.js', years: 8 },
          { tech: 'TypeScript', years: 7 },
          { tech: 'GraphQL', years: 4 },
          { tech: 'Ruby on Rails', years: 3 },
          { tech: 'Tailwind CSS', years: 2 },
          { tech: 'Go', years: 2 },
          { tech: 'Vite', years: 1 }
        ].map(({ tech, years }) => (
          <div key={tech} className="flex flex-col items-center">
            <div className="relative w-24 h-24">
              <svg
                className="w-full h-full"
                viewBox="0 0 36 36"
                style={{ transform: 'rotate(-90deg)' }}
              >
                <circle
                  style={{ stroke: '#D1D5DB' }}
                  strokeWidth="3"
                  fill="none"
                  cx="18"
                  cy="18"
                  r="15"
                />
                <circle
                  style={{ stroke: '#3B82F6' }}
                  strokeWidth="3"
                  fill="none"
                  cx="18"
                  cy="18"
                  r="15"
                  strokeDasharray="100"
                  strokeDashoffset={`${100 - years * 7.14}`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-sm font-medium">
                {years} yrs
              </div>
            </div>
            <span className="mt-2 text-lg font-medium text-gray-800">
              {tech}
            </span>
          </div>
        ))}
      </div>
    </section>

    <section id="projects" className="bg-gray-300 py-20">
      <h1 className="text-4xl font-bold text-center">Projects</h1>
      <p className="text-center mt-4 max-w-2xl mx-auto">
        This is the projects section.
      </p>
    </section>

    <section id="contact" className="bg-gray-400 py-20">
      <h1 className="text-4xl font-bold text-center">Contact Me</h1>
      <p className="text-center mt-4 max-w-2xl mx-auto">
        This is the contact me section.
      </p>
    </section>

    <section id="experience" className="bg-gray-500 py-20">
      <h1 className="text-4xl font-bold text-center">Experience</h1>
      <p className="text-center mt-4 max-w-2xl mx-auto">
        This is the experience section.
      </p>
    </section>

    <footer className="bg-gray-800 text-white py-10">
      <div className="text-center">
        <p>Contact me via socials</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-blue-400">
            Twitter
          </a>
          <a href="#" className="hover:text-blue-400">
            LinkedIn
          </a>
          <a href="#" className="hover:text-blue-400">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  </>
)
