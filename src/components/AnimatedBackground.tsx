import { motion } from 'framer-motion';

interface AnimatedBackgroundProps {
  variant?: 'hero' | 'section' | 'minimal';
}

const AnimatedBackground = ({ variant = 'section' }: AnimatedBackgroundProps) => {
  if (variant === 'hero') {
    return (
      <div className="absolute inset-0 overflow-hidden">
        {/* Mesh Gradient */}
        <div className="absolute inset-0 mesh-bg" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(250 90% 65% / 0.15) 0%, transparent 50%)',
            filter: 'blur(60px)',
            top: '-30%',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(190 90% 50% / 0.1) 0%, transparent 50%)',
            filter: 'blur(40px)',
            bottom: '-20%',
            right: '-10%',
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Animated Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(250 90% 65%)" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(250 90% 65%)" stopOpacity="1" />
              <stop offset="100%" stopColor="hsl(250 90% 65%)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.line
            x1="0"
            y1="30%"
            x2="100%"
            y2="30%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
          />
        </svg>
      </div>
    );
  }

  if (variant === 'minimal') {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, hsl(250 90% 65% / 0.3) 0%, transparent 60%)',
          filter: 'blur(40px)',
        }}
        animate={{
          x: ['-10%', '10%', '-10%'],
          y: ['10%', '-10%', '10%'],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        initial={{ top: '20%', right: '10%' }}
      />
    </div>
  );
};

export default AnimatedBackground;