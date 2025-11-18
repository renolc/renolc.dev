import { Experience } from '../types'

interface TimelineItemProps extends Experience {
  isLeft: boolean
  isLast: boolean
}

export default ({
  company,
  position,
  period,
  description,
  technologies,
  borderColor,
  dotColor,
  isLeft,
  isLast
}: TimelineItemProps) => {
  const containerBottomMargin = isLast ? 'mb-0' : 'mb-8'

  const lineDirClasses = isLeft
    ? 'right-1/2 translate-x-2'
    : 'left-1/2 -translate-x-2'

  const cardPosClasses = isLeft
    ? 'lg:pr-8 lg:text-right mx-4 lg:mx-0'
    : 'lg:ml-auto lg:pl-8 lg:text-left mx-4 lg:mx-0'

  const cardBorderClasses = isLeft
    ? 'border-l-4 lg:border-l-0 lg:border-r-4'
    : 'border-l-4 lg:border-l-4'

  const techContainerClasses = isLeft ? 'lg:justify-end' : ''

  return (
    <div
      className={`${containerBottomMargin} relative flex items-center lg:mb-0`}
    >
      <div
        className={`${dotColor} hidden lg:block absolute left-1/2 top-4 w-4 h-4 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 z-10`}
      />

      <div
        className={`${lineDirClasses} ${dotColor} w-10 hidden lg:block absolute top-6 h-0.5 z-5`}
      />

      <div className={`${cardPosClasses} lg:w-1/2 w-full`}>
        <div
          className={`${borderColor} ${cardBorderClasses} bg-white rounded-lg shadow-md p-6`}
        >
          <h3 className="text-xl font-bold text-gray-800">{company}</h3>
          <h4 className="text-lg text-blue-600 mb-2">{position}</h4>
          <p className="text-sm text-gray-500 mb-3">{period}</p>
          <p className="text-gray-700 mb-4">{description}</p>
          {technologies && (
            <div className={`${techContainerClasses} flex flex-wrap gap-2`}>
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
