import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-[#1E2A5A]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onAnimationComplete={() => {
        setTimeout(onComplete, 2000);
      }}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <Calendar className="w-20 h-20 text-white mb-4" strokeWidth={1.5} />
        <h1 className="text-4xl font-bold text-white mb-2">Campus Events</h1>
        <p className="text-white/80 text-lg">Never miss an event again</p>
      </motion.div>
    </motion.div>
  );
}
