import { Link } from 'react-scroll'
import navigation from '../data/navigation'

export default () => (
  <nav className="bg-gray-800 text-white py-4 sticky top-0 z-50 xl:rounded-b-lg shadow-lg">
    <ul className="flex justify-center space-x-8">
      {navigation.map((navItem) => (
        <li key={navItem.to}>
          <Link
            to={navItem.to}
            smooth={true}
            duration={500}
            spy={true}
            activeClass="text-blue-400"
            className="hover:text-blue-400 transition-colors cursor-pointer"
          >
            {navItem.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)
