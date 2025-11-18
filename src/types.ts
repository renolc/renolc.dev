import { IconType } from 'react-icons'

export interface Skill {
  tech: string
  proficiency: number
}

export interface Social {
  href: string
  title: string
  Icon: IconType
}

export interface NavLink {
  to: string
  label: string
}

export interface Experience {
  company: string
  position: string
  period: string
  description: string
  technologies?: string[]
  borderColor: string
  dotColor: string
}
