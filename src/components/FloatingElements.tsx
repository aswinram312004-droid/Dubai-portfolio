import { motion } from 'framer-motion';

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, hsl(250 90% 65% / 0.3) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{
          x: ['-10%', '10%', '-10%'],
          y: ['-10%', '20%', '-10%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        initial={{ top: '-20%', left: '60%' }}
      />
      
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, hsl(190 90% 50% / 0.3) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
        animate={{
          x: ['10%', '-20%', '10%'],
          y: ['20%', '-10%', '20%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        initial={{ top: '60%', left: '-10%' }}
      />

      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, hsl(280 90% 60% / 0.3) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
        animate={{
          x: ['-5%', '15%', '-5%'],
          y: ['15%', '-5%', '15%'],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        initial={{ top: '30%', right: '5%' }}
      />

      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute w-4 h-4 rounded-sm bg-accent/20 backdrop-blur-sm"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ top: '20%', left: '10%' }}
      />

      <motion.div
        className="absolute w-3 h-3 rounded-full bg-accent-secondary/30"
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ top: '70%', right: '15%' }}
      />

      <motion.div
        className="absolute w-2 h-2 rounded-full bg-accent/30"
        animate={{
          y: [0, -15, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ top: '50%', left: '80%' }}
      />

      {/* Grid Lines */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
    </div>
  );
};

export default FloatingElements;