import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileText, ArrowRight, Briefcase, Users, Lightbulb, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import TiltCard from './TiltCard';
import AnimatedBackground from './AnimatedBackground';

const AboutSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t, isRTL } = useLanguage();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const highlights = [
    { icon: Briefcase, label: t('internshipFreelance'), color: 'from-violet-500/20 to-purple-500/10' },
    { icon: Users, label: t('crossFunctional'), color: 'from-blue-500/20 to-cyan-500/10' },
    { icon: Lightbulb, label: t('dataDriven'), color: 'from-amber-500/20 to-orange-500/10' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden" ref={containerRef} dir={isRTL ? 'rtl' : 'ltr'}>
      <AnimatedBackground variant="minimal" />
      
      <div className="section-container relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className={isRTL ? 'lg:order-2' : ''}
          >
            <motion.span
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-medium text-accent uppercase tracking-wider glass-card"
            >
              <Sparkles size={14} />
              {t('aboutMe')}
            </motion.span>

            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            >
              {t('craftingDigital')}
              <br />
              <span className="gradient-text">{t('experiences')}</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-muted-foreground leading-relaxed mb-4"
            >
              {t('aboutDescription')}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-muted-foreground leading-relaxed mb-8"
            >
              {t('aboutDescription2')}
            </motion.p>

            {/* Highlights with 3D Effect */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className={`inline-flex items-center gap-2 px-4 py-3 glass-card cursor-default group`}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon size={16} className="text-accent group-hover:text-accent-glow transition-colors" />
                  </motion.div>
                  <span className="text-sm text-foreground">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Resume Button with Arrow Animation */}
            <motion.a
              variants={itemVariants}
              href="https://drive.google.com/uc?export=download&id=1WONKwjjBPWLNrjcwcQRbyYJ4ejqIRFUE"
              className="inline-flex items-center gap-2 text-foreground font-medium group animated-underline"
              whileHover={{ x: isRTL ? -4 : 4 }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <FileText size={18} className="text-accent" />
              </motion.div>
              {t('downloadResume')}
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={16} className={`text-accent ${isRTL ? 'rotate-180' : ''}`} />
              </motion.div>
            </motion.a>
          </motion.div>

          {/* Visual Element with 3D Card */}
          <motion.div style={{ y }} className={`relative ${isRTL ? 'lg:order-1' : ''}`}>
            <TiltCard className="relative aspect-square max-w-md mx-auto" tiltAmount={10}>
              {/* Background Shapes */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent-secondary/10 rounded-3xl"
                animate={{ rotate: [3, 5, 3] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-0 glass-card rounded-3xl"
                animate={{ rotate: [-3, -5, -3] }}
                transition={{ duration: 8, repeat: Infinity }}
                style={{ transformOrigin: 'center' }}
              />

              {/* Main Card */}
              <div className="relative h-full glass-card rounded-3xl p-8 flex flex-col justify-center items-center glow-border">
                {/* Avatar */}
                <motion.div
                  className="w-32 h-32 rounded-full bg-gradient-to-br from-accent/30 to-accent-secondary/20 flex items-center justify-center mb-6 relative"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{
                      boxShadow: [
                        '0 0 0 0 hsl(250 90% 65% / 0)',
                        '0 0 0 20px hsl(250 90% 65% / 0)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-5xl font-bold gradient-text">A</span>
                </motion.div>

                <div className="text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Anusha A</h3>
                  <p className="text-muted-foreground text-sm">{t('uiuxDesigner')}</p>
                </div>

                {/* Stats with Animation */}
                <div className="grid grid-cols-2 gap-8 mt-8">
                  {[
                    { value: '8+', label: t('projectsCount') },
                    { value: '6+', label: t('Months Exp') },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      className="text-center"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: 0.5 + i * 0.1, type: 'spring', stiffness: 400 }}
                    >
                      <motion.span
                        className="block text-3xl font-bold gradient-text"
                        whileHover={{ scale: 1.1 }}
                      >
                        {stat.value}
                      </motion.span>
                      <span className="text-xs text-muted-foreground">{stat.label}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute top-4 right-4 w-3 h-3 rounded-full bg-accent/50"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-accent-secondary/50"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
