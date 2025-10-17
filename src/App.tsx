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

    <section id="about" className="min-h-screen bg-gray-100 py-20">
      <h1 className="text-4xl font-bold text-center">About Me</h1>
      <p className="text-center mt-4">This is the about me section.</p>
    </section>

    <section id="skills" className="min-h-screen bg-gray-200 py-20">
      <h1 className="text-4xl font-bold text-center">Skills</h1>
      <p className="text-center mt-4">This is the skills section.</p>
    </section>

    <section id="projects" className="min-h-screen bg-gray-300 py-20">
      <h1 className="text-4xl font-bold text-center">Projects</h1>
      <p className="text-center mt-4">This is the projects section.</p>
    </section>

    <section id="contact" className="min-h-screen bg-gray-400 py-20">
      <h1 className="text-4xl font-bold text-center">Contact Me</h1>
      <p className="text-center mt-4">This is the contact me section.</p>
    </section>

    <section id="experience" className="min-h-screen bg-gray-500 py-20">
      <h1 className="text-4xl font-bold text-center">Experience</h1>
      <p className="text-center mt-4">This is the experience section.</p>
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
