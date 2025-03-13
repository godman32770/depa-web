/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#1E3A8A", // น้ำเงินเข้ม
          secondary: "#3B82F6", // น้ำเงินอ่อน
          accent: "#10B981", // เขียว (สำหรับ Register)
          background: "#F3F4F6", // เทาอ่อน
        },
      },
    },
    plugins: [],
};