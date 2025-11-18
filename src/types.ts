import { IconType } from 'react-icons'

export interface Skill {
  tech: string
  proficiency: number
}

export interface Project {
  title: string
  description: string
  techStack: string
  textColor: string
  borderColor: string
}

export interface Social {
  href: string
  title: string
  Icon: IconType
}
