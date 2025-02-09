/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'border': 'border 4s ease infinite',
        'border-alt': 'border-alt 4s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        border: {
          '0%, 100%': {
            'border-color': 'rgb(59, 130, 246)' /* blue-600 */
          },
          '25%': {
            'border-color': 'rgb(168, 85, 247)' /* purple-600 */
          },
          '50%': {
            'border-color': 'rgb(236, 72, 153)' /* pink-600 */
          },
          '75%': {
            'border-color': 'rgb(234, 179, 8)' /* yellow-600 */
          }
        },
        'border-alt': {
          '0%, 100%': {
            'border-color': 'rgba(59, 130, 246, 0.5)' /* blue-600/50 */
          },
          '25%': {
            'border-color': 'rgba(168, 85, 247, 0.5)' /* purple-600/50 */
          },
          '50%': {
            'border-color': 'rgba(236, 72, 153, 0.5)' /* pink-600/50 */
          },
          '75%': {
            'border-color': 'rgba(234, 179, 8, 0.5)' /* yellow-600/50 */
          }
        }
      }
    },
  },
  plugins: [],
};