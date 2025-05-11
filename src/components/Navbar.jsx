import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogPanel } from "@headlessui/react";

export default function Navbar({ isDark, setIsDark }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-green-400  dark:bg-gray-800 shadow-md z-50 mb-1"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#hero" className="flex items-center">
          <img
            src="/logo.png"
            alt="SoftSell Logo"
            className="h-14 w-16 rounded-xl"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-800  dark:text-gray-300 hover:text-primary dark:hover:text-secondary transition"
            >
              {link.name}
            </a>
          ))}
          {/* Theme Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
          >
            {isDark ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 dark:text-gray-300 "
          onClick={() => {
            setIsMenuOpen(true);
            setIsDark(!isDark);
          }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dialog */}
      <Dialog
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        className="md:hidden relative  bg-green-400 z-50 dark:bg-gray-950 dark:text-white"
      >
        {/* Background overlay */}
        <div
          className="fixed inset-0  opacity-30  bg-green-400"
          aria-hidden="true"
        />

        <DialogPanel
          as={motion.div}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 right-0 w-3/4 max-w-sm  bg-green-400 dark:bg-gray-950  h-full p-6 shadow-lg"
        >
          {/* Header with logo and close button */}
          <div className="flex justify-between items-center mb-6 dark:bg-gray-950 dark:text-white">
            <img src="/logo.png" alt="SoftSell Logo" className="h-8 w-auto" />
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-600 dark:text-gray-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={() => {
                setIsDark(!isDark);
                setIsMenuOpen(false);
              }}
              className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full text-left"
            >
              {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
          </div>
        </DialogPanel>
      </Dialog>
    </motion.nav>
  );
}
