import SkillCircle from './SkillCircle'
import skillsData from '../data/skills'

export default () => (
  <section id="skills" className="py-20 shadow-lg bg-gray-200">
    <h1 className="text-4xl font-bold text-center">Skills</h1>
    <div className="mt-8 max-w-2xl mx-auto grid grid-cols-3 md:grid-cols-4 gap-8">
      {skillsData.map((skill, i) => (
        <SkillCircle key={i} {...skill} />
      ))}
    </div>
  </section>
)
