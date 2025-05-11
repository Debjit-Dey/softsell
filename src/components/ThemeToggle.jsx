import { motion } from "framer-motion";

export default function ThemeToggle({ isDark, setIsDark }) {
  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <motion.button
      className="fixed top-4 right-4 p-2 text-black bg-gray-200 dark:bg-gray-700 dark:text-white rounded-full z-50"
      onClick={() => setIsDark(!isDark)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {isDark ? "☀️" : "🌙"}
    </motion.button>
  );
}
