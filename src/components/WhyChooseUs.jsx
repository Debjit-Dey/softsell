import { motion } from "framer-motion";

const features = [
  {
    icon: "/feature1.svg",
    title: "Fast Valuations",
    description: "Get your license valued in under 24 hours.",
  },
  {
    icon: "/feature2.svg",
    title: "Secure Transactions",
    description: "Your data is protected with top-tier encryption.",
  },
  {
    icon: "/feature3.svg",
    title: "Competitive Offers",
    description: "We ensure you get the best market price.",
  },
  {
    icon: "/feature4.svg",
    title: "24/7 Support",
    description: "Our team is here to help anytime.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-16  bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose SoftSell?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="mx-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.3 } }}
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="h-12 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
