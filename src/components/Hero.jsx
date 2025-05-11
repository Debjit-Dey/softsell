import { motion } from "framer-motion";
import heroBg from "../assets/hero-bg.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-cover bg-center py-20 text-gray-950 dark:text-gray-50 h-[70vh] flex align-middle justify-center items-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="container mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-white mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Sell Your Software Licenses with Ease
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-white mb-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Get top value for your unused licenses in just a few clicks.
        </motion.p>
        <motion.a
          href="#contact"
          className="bg-secondary text-white px-6 py-3 rounded-full font-semibold hover:bg-accent transition"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Get a Quote
        </motion.a>
      </div>
    </section>
  );
}
