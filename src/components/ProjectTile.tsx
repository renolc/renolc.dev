import { Project } from '../types'

export default ({
  title,
  description,
  techStack,
  textColor,
  borderColor
}: Project) => (
  <div className={`bg-white shadow-md rounded-lg border-l-4 ${borderColor}`}>
    <div className="rounded-t-lg p-4">
      <span className={`text-2xl font-bold ${textColor}`}>{title}</span>
    </div>
    <div className="p-6">
      <p className="text-gray-700 mb-4">{description}</p>
      <p className="text-sm text-gray-500">Tech Stack: {techStack}</p>
    </div>
  </div>
)
