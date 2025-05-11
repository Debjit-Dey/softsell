import { motion } from "framer-motion";

const steps = [
  {
    icon: "/step1.svg",
    title: "Upload License",
    description: "Submit your license details securely.",
  },
  {
    icon: "/step2.svg",
    title: "Get Valuation",
    description: "Receive a fair market valuation within 24 hours.",
  },
  {
    icon: "/step3.svg",
    title: "Get Paid",
    description: "Choose your preferred payment method.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 bg-white dark:bg-gray-800 ">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="p-6 mx-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow "
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.3 } }}
            >
              <img
                src={step.icon}
                alt={step.title}
                className="h-16 mx-auto mb-4"
                hover:translate-y-2
              />
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
