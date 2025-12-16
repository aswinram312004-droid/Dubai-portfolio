import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, MapPin, Sparkles, Zap } from 'lucide-react';
import { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedBackground from './AnimatedBackground';
import FloatingElements from './FloatingElements';

const HeroSection = () => {
  const containerRef = useRef(null);
  const { t, isRTL } = useLanguage();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToWork = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <AnimatedBackground variant="hero" />
      <FloatingElements />

      <motion.div style={{ y, opacity }} className="section-container relative z-10 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass-card"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <MapPin size={14} className="text-accent" />
            </motion.div>
            <span className="text-sm text-muted-foreground">{t('dubaiUAE')}</span>
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </motion.div>

          {/* Name with 3D Effect */}
          <motion.h1
            initial={{ opacity: 0, y: 50, rotateX: -20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 perspective-1000"
          >
            <motion.span
              className="inline-block"
              whileHover={{ scale: 1.02, textShadow: '0 0 40px hsl(250 90% 65% / 0.5)' }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              Anusha A
            </motion.span>
          </motion.h1>

          {/* Title with Animated Gradient */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium">
              <motion.span
                className="gradient-text font-semibold inline-block"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              >
                UI/UX Designer
              </motion.span>
              <span className="text-muted-foreground mx-2">•</span>
              <span className="text-muted-foreground">UX Designer</span>
              <span className="text-muted-foreground mx-2">•</span>
              <span className="text-muted-foreground">Junior Product Designer</span>
            </h2>
          </motion.div>

          {/* Tagline with Typewriter Effect */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            {t('designing')}{' '}
            <span className="text-foreground font-medium">{t('intuitive')}</span>,{' '}
            <span className="text-foreground font-medium">{t('scalable')}</span>, {isRTL ? 'و' : 'and'}{' '}
            <span className="text-accent font-medium">{t('userCentered')}</span> {t('digitalExperiences')}
          </motion.p>

          {/* CTA Buttons with Advanced Hover */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              onClick={scrollToWork}
              className="btn-accent group relative"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: 'radial-gradient(circle at center, hsl(0 0% 100% / 0.2), transparent 70%)',
                }}
              />
              <Sparkles size={18} className="relative z-10" />
              <span className="relative z-10">{t('viewWork')}</span>
            </motion.button>

            <motion.button
              onClick={scrollToContact}
              className="btn-secondary group"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <Zap size={18} className="group-hover:text-accent transition-colors" />
              <span>{t('contactMe')}</span>
            </motion.button>
          </motion.div>

          {/* Tech Stack Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-16 flex flex-wrap justify-center gap-3"
          >
            {['Figma', 'Adobe XD', 'Prototyping', 'Design Systems'].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + i * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 text-xs font-medium text-muted-foreground glass-card cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs uppercase tracking-[0.2em]">{t('scroll')}</span>
            <motion.div
              className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1"
            >
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-3 rounded-full bg-accent"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
