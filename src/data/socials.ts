import { FaBluesky, FaEnvelope, FaGithub, FaMastodon } from 'react-icons/fa6'

import { Social } from '../types'

export default [
  {
    href: 'https://github.com/renolc',
    title: 'GitHub',
    Icon: FaGithub
  },
  {
    href: 'https://bsky.app/profile/renolc.games',
    title: 'Bluesky',
    Icon: FaBluesky
  },
  {
    href: 'https://mastodon.gamedev.place/@renolc',
    title: 'Mastodon',
    Icon: FaMastodon
  },
  {
    href: 'mailto:hello@renolc.dev',
    title: 'Email',
    Icon: FaEnvelope
  }
] as Social[]
