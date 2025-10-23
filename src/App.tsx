import { Link } from 'react-scroll'
import { FaGithub, FaBluesky, FaUpwork } from 'react-icons/fa6'

import ContraIcon from './components/ContraIcon'
import SkillCircle from './components/SkillCircle'
import skillsData from './data/skills'

export default () => (
  <div className="w-full bg-gray-100">
    <div className="max-w-7xl mx-auto px-0">
      <nav className="bg-gray-800 text-white py-4 sticky top-0 z-50 xl:rounded-b-lg shadow-lg">
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
              About
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
        <img src="/logo.svg" alt="Logo" className="mx-auto mb-4 w-50 h-50" />
        <h1 className="text-4xl font-bold text-center">Phillip Gibson</h1>
        <p className="text-center mt-4 max-w-2xl mx-auto">
          I'm a developer with over 15 years of experience, specializing in web
          technologies. My current focus is on front-end development, but I have
          plenty of full-stack experience too. I'm currently open for new
          opportunities—let's build something great together!
        </p>
      </section>

      <section
        id="skills"
        className="bg-gray-200 py-20 xl:rounded-lg shadow-lg"
      >
        <h1 className="text-4xl font-bold text-center">Skills</h1>
        <div className="mt-8 max-w-2xl mx-auto grid grid-cols-4 gap-8">
          {skillsData.map((data, i) => (
            <SkillCircle key={i} {...data} />
          ))}
        </div>
      </section>

      <section id="projects" className="bg-gray-100 py-20">
        <h1 className="text-4xl font-bold text-center">Projects</h1>
        <div className="mt-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 xl:px-0">
          {[
            {
              title: 'Twitter Clone',
              description:
                'A fully responsive Twitter clone with real-time updates and user authentication.',
              techStack: 'React, Tailwind CSS, Firebase',
              textColor: 'text-indigo-500',
              borderColor: 'border-l-indigo-500'
            },
            {
              title: 'Media Browser',
              description:
                'A sleek media browser for exploring movies, TV shows, and music.',
              techStack: 'Vue.js, Vuetify, TMDB API',
              textColor: 'text-teal-500',
              borderColor: 'border-l-teal-500'
            },
            {
              title: 'E-Commerce Platform',
              description:
                'An e-commerce platform with a modern UI, shopping cart, and payment integration.',
              techStack: 'Next.js, TypeScript, Stripe API',
              textColor: 'text-amber-500',
              borderColor: 'border-l-amber-500'
            }
          ].map(({ title, description, techStack, textColor, borderColor }) => (
            <div
              key={title}
              className={`bg-white shadow-md rounded-lg border-l-4 ${borderColor}`}
            >
              <div className="rounded-t-lg p-4">
                <span className={`text-2xl font-bold ${textColor}`}>
                  {title}
                </span>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">{description}</p>
                <p className="text-sm text-gray-500">Tech Stack: {techStack}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="cta"
        className="py-20 text-white animate-gradient xl:rounded-lg shadow-lg"
      >
        <h1 className="text-4xl font-bold text-center">
          Want to Work Together?
        </h1>
        <p className="text-center mt-4 max-w-2xl mx-auto">
          I'm a professional developer you can trust to bring your ideas to
          life. Let's discuss your project and create something amazing. Reach
          out today!
        </p>
        <div className="text-center mt-8">
          <a
            href="mailto:hello@renolc.dev"
            className="bg-cyan-600 text-white font-bold py-2 px-6 rounded-full shadow-md hover:bg-cyan-700 transition cursor-pointer"
          >
            Let's Talk
          </a>
        </div>
      </section>

      <section id="experience" className="bg-gray-100 py-20">
        <h1 className="text-4xl font-bold text-center">Experience</h1>
        <p className="text-center mt-4 max-w-2xl mx-auto">
          This is the experience section.
        </p>
      </section>

      <footer
        id="footer"
        className="bg-gray-800 text-white py-10 xl:rounded-t-lg shadow-lg"
      >
        <div className="text-center">
          <p>Contact me via socials</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://bsky.app/profile/renolc.games"
              className="hover:text-blue-400"
              title="Bluesky"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaBluesky size={24} />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~015ed310b1be763832"
              className="hover:text-blue-400"
              title="UpWork"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaUpwork size={24} />
            </a>
            <a
              href="https://contra.com/phillip_gibson"
              className="hover:text-blue-400"
              title="Contra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ContraIcon size={24} />
            </a>
            <a
              href="https://github.com/renolc"
              className="hover:text-blue-400"
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  </div>
)
