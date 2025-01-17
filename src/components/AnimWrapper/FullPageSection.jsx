import { motion } from 'framer-motion';

const FullPageSection = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="h-screen flex justify-center "
    >
      {children}
    </motion.div>
  );
};

export default FullPageSection;