import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Jane Doe",
    role: "IT Manager",
    company: "TechCorp",
    review:
      "SoftSell made selling our unused licenses a breeze. Fast, secure, and great value!",
  },
  {
    name: "John Smith",
    role: "CFO",
    company: "GrowEasy",
    review:
      "The process was seamless, and the support team was fantastic. Highly recommend!",
  },
  {
    name: "Alice Brown",
    role: "CEO",
    company: "InnovateX",
    review:
      "A game-changer for our business. Highly professional and efficient service!",
  },
  {
    name: "Michael Lee",
    role: "Product Manager",
    company: "NextGen",
    review: "The best platform for selling unused licenses. Highly satisfied!",
  },
];

export default function Testimonials() {
  // Duplicate testimonials for seamless scrolling
  const scrollingTestimonials = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      className="py-16 bg-white dark:bg-gray-800 overflow-hidden"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
        <div className="relative overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {scrollingTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-1/2 p-6 m-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow flex-shrink-0"
              >
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  "{testimonial.review}"
                </p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
