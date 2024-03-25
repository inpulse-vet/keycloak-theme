import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const cabaret = {
  '50': '#fef2f4',
  '100': '#fde6ea',
  '200': '#fbd0da',
  '300': '#f8a9bd',
  '400': '#f3799a',
  '500': '#e84273',
  '600': '#d52964',
  '700': '#b41c54',
  '800': '#961b4c',
  '900': '#811a47',
  '950': '#480923',
}

const persianRed = {
  '50': '#fef2f3',
  '100': '#fee2e3',
  '200': '#fecacc',
  '300': '#fca5a9',
  '400': '#f97076',
  '500': '#f0434b',
  '600': '#da222a',
  '700': '#ba1b22',
  '800': '#9a1a20',
  '900': '#801c20',
  '950': '#450a0d',
}

const tarawera = {
  '50': '#0c556d',
  '100': '#0c556d',
  '200': '#0c556d',
  '300': '#0c556d',
  '400': '#0c556d',
  '500': '#0c556d',
  '600': '#ffffff',
  '700': '#0c556d',
  '800': '#0c556d',
  '900': '#0c556d',
  '950': '#0c556d',
}

export default {
  content: ['./theme/**/*.ftl'],
  experimental: {
    optimizeUniversalDefaults: true,
  },
  plugins: [require('@tailwindcss/forms')],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        primary: cabaret,
        secondary: tarawera,

        provider: {
          apple: '#000000',
          bitbucket: '#0052CC',
          discord: '#5865F2',
          facebook: '#1877F2',
          github: '#181717',
          gitlab: '#FC6D26',
          google: '#4285F4',
          instagram: '#E4405F',
          linkedin: '#0A66C2',
          microsoft: '#5E5E5E',
          oidc: '#F78C40',
          openshift: '#EE0000',
          paypal: '#00457C',
          slack: '#4A154B',
          stackoverflow: '#F58025',
          twitter: '#1DA1F2',
        },
      },
      fontFamily: {
        'sans': ['Montserrat']
      },
      borderRadius: {
        'lg': '50px',
        'md': '50px'
      },
      backgroundImage: (theme) => ({
        'inlogo':
          "url('https://spaces.incloud.vet/svgs/inpulse-logo-branco-horizontal.svg')",
        'inlogo-dark':
          "url('https://spaces.incloud.vet/svgs/inpulse-logo-branco-horizontal.svg')",
      }),
    },
  },
  variants: {
    extend: {
      backgroundImage: ['dark'],
    },
  },
} satisfies Config;
