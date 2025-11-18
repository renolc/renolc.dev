import TimelineItem from './TimelineItem'
import experiences from '../data/experiences'

export default () => (
  <section id="experience" className="py-20 bg-gray-100">
    <h1 className="text-4xl font-bold text-center mb-12">Experience</h1>
    <div className="max-w-4xl mx-auto relative px-4 md:px-0">
      <div
        className="hidden lg:block absolute left-1/2 w-0.5 bg-gray-300 transform -translate-x-1/2"
        style={{
          top: '1.5rem',
          height: `calc(${experiences.length - 1} * (100% / ${experiences.length}) + 1rem)`
        }}
      />

      {experiences.map((experience, index) => (
        <TimelineItem
          key={experience.company}
          {...experience}
          isLeft={index % 2 === 0}
          isLast={index === experiences.length - 1}
        />
      ))}
    </div>
  </section>
)
