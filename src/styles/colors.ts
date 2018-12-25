import { rgba, transparentize } from 'polished'

const black = '#09242A'
const white = 'white'

const baseColors = {
  coral: '#FFBA9C',
  yellow: '#F5B022',

  black: black,
  black95: rgba(black, 0.95),
  black90: rgba(black, 0.9),
  black85: rgba(black, 0.85),
  black80: rgba(black, 0.8),
  black70: rgba(black, 0.7),
  black60: rgba(black, 0.6),
  black50: rgba(black, 0.5),
  black40: rgba(black, 0.4),
  black35: rgba(black, 0.35),
  black30: rgba(black, 0.3),
  black20: rgba(black, 0.2),
  black15: rgba(black, 0.15),
  black10: rgba(black, 0.1),
  black05: rgba(black, 0.05),

  white0: rgba(white, 0),
  white05: rgba(white, 0.05),
  white10: rgba(white, 0.1),
  white15: rgba(white, 0.15),
  white20: rgba(white, 0.2),
  white30: rgba(white, 0.3),
  white40: rgba(white, 0.4),
  white50: rgba(white, 0.5),
  white60: rgba(white, 0.6),
  white70: rgba(white, 0.7),
  white80: rgba(white, 0.8),
  white90: rgba(white, 0.9),
  white: white,
}

export default {
  ...baseColors,
  brand: baseColors.yellow,
}

