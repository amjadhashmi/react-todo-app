/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       "page-bg-light-blue": "#edf2fb",
       "add-btn-bright-blue": "#3b82f6",
       "input-b-light-gray": "#e5e7eb",
       "total-count-box": "#f3f4f6",
       "completed-box": "#d1fae5",
       "remaining-box": "#fde68a",
       "active-tab" : "#2563eb",
       "inactive-tab": "#e5e7eb",
       "text-main-color": "#374151",
       "muted-text": "#9ca3af",
       "card-bg": "#fff"
      },

    },
  },
  plugins: [],
}
