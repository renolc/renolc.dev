import { Skill } from '../types'

export default ({ tech, proficiency }: Skill) => (
  <div className="flex flex-col items-center">
    <div className="relative w-24 h-24">
      <svg
        className="w-full h-full"
        viewBox="0 0 44 44"
        style={{ transform: 'rotate(-90deg)' }}
      >
        <circle
          stroke="#D1D5DB"
          strokeWidth={4}
          fill="none"
          cx={22}
          cy={22}
          r={20}
        />
        <circle
          stroke="#3B82F6"
          strokeWidth={4}
          fill="none"
          cx={22}
          cy={22}
          r={20}
          strokeDasharray={125.66}
          strokeDashoffset={125.66 - (proficiency / 10) * 125.66}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-sm font-medium text-center break-words px-1 max-w-[80%] mx-auto">
        {tech}
      </div>
    </div>
  </div>
)
