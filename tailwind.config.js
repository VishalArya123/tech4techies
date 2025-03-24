/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#0F172A',
        'sidebar-bg': '#1E293B',
        'card-bg': '#1E293B',
        'text-primary': '#E5E7EB',
        'text-secondary': '#CBD5E1',
        'blue-button': '#3B82F6',
        'blue-hover': '#2563EB',
        'status-green': '#10B981',
        'status-red': '#EF4444',
      },
    },
  },
  plugins: [],
}