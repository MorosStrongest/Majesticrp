import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gov: {
          950: 'rgb(3 8 20)',
          900: 'rgb(7 14 34)',
          800: 'rgb(15 24 48)',
          700: 'rgb(31 41 59)',
          500: 'rgb(100 116 139)',
          gold: 'var(--color-gov-gold)',
        },
      },
      boxShadow: {
        panel: '0 20px 60px rgba(0,0,0,.45)',
        gold: '0 0 0 1px rgba(214, 173, 76, .45), 0 20px 60px rgba(0,0,0,.55)',
      },
      backgroundImage: {
        'gov-gradient': 'linear-gradient(135deg, rgba(8,14,28,.98), rgba(8,14,28,.78) 40%, rgba(15,24,48,.92))',
      },
      keyframes: {
        glow: {'0%,100%': { opacity: '.88', transform: 'translateY(0)' }, '50%': { opacity: '1', transform: 'translateY(-1px)' }},
        drift: {'0%': { transform: 'translate3d(0,0,0)' }, '50%': { transform: 'translate3d(0,-8px,0)' }, '100%': { transform: 'translate3d(0,0,0)' }},
      },
      animation: {
        glow: 'glow 3.5s ease-in-out infinite',
        drift: 'drift 12s ease-in-out infinite',
      },
    },
  },
  plugins: [typography],
};
