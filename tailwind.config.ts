import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  fontFamily: {
    'mono': ['"Cutive Mono"']
  },
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'mono': ['"Cutive Mono"'],
        'urbanist': ['Urbanist']
      }
    }
  }
}
