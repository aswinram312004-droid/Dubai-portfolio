import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Calendar, Briefcase, GraduationCap, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedBackground from './AnimatedBackground';

const experiences = [
  {
    id: 1,
    title: 'UI/UX Designer',
    company: 'Tri Stone Industries',
    location: 'India',
    period: 'Jul 2025 – Sep 2025',
    type: 'work',
    description: [
      'Designed responsive web & mobile interfaces',
      'Created wireframes, user flows, prototypes',
      'Collaborated with developers & stakeholders',
    ],
  },
  {
    id: 2,
    title: 'Freelance UI/UX & Graphic Designer',
    company: 'Self-Employed',
    location: 'India',
    period: '2023 – 2024',
    type: 'work',
    description: [
      'Designed and developed business websites',
      'Created event posters and corporate advertisements',
      'Delivered production-ready digital solutions',
    ],
  },
  {
    id: 3,
    title: 'Web Development Intern',
    company: 'Vebbox Software Solutions',
    location: 'India',
    period: 'Aug 2024 – Sep 2024',
    type: 'internship',
    description: [
      'Developed responsive web pages using HTML, CSS, JavaScript',
      'Assisted in frontend feature testing',
      'Collaborated with development team',
    ],
  },
];

const ExperienceCard = ({ experience, index, t }: { experience: typeof experiences[0]; index: number; t: (key: string) => string }) => {
  const isWork = experience.type === 'work';

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="relative pl-10 pb-12 last:pb-0"
    >
      {/* Timeline Line with Animation */}
      <motion.div
        className="absolute left-[9px] top-4 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent last:hidden"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: index * 0.15 }}
        style={{ originY: 0 }}
      />

      {/* Timeline Dot with Pulse */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.15 + 0.2, type: 'spring', stiffness: 400 }}
        className={`absolute left-0 top-2 w-5 h-5 rounded-full border-2 ${
          isWork
            ? 'bg-accent border-accent shadow-[0_0_15px_hsl(250_90%_65%_/_0.5)]'
            : 'bg-background border-accent/70'
        }`}
      >
        {isWork && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-accent"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </motion.div>

      {/* Card */}
      <motion.div
        className="glass-card p-6 glow-border"
        whileHover={{ scale: 1.02, x: 5 }}
        transition={{ type: 'spring', stiffness: 400 }}
      >
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            <motion.div
              className="flex items-center gap-2 mb-2"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + 0.3 }}
            >
              <motion.div
                className={`p-1.5 rounded-lg ${isWork ? 'bg-accent/20' : 'bg-secondary'}`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {isWork ? (
                  <Briefcase size={14} className="text-accent" />
                ) : (
                  <GraduationCap size={14} className="text-accent" />
                )}
              </motion.div>
              <span className="text-xs font-medium text-accent uppercase tracking-wider">
                {isWork ? t('experience') : t('internship')}
              </span>
            </motion.div>
            <h3 className="text-lg font-semibold text-foreground">{experience.title}</h3>
            <p className="text-muted-foreground">{experience.company}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
          <motion.span
            className="flex items-center gap-1.5 px-2 py-1 bg-secondary/50 rounded-lg"
            whileHover={{ scale: 1.05 }}
          >
            <MapPin size={14} className="text-accent" />
            {experience.location}
          </motion.span>
          <motion.span
            className="flex items-center gap-1.5 px-2 py-1 bg-secondary/50 rounded-lg"
            whileHover={{ scale: 1.05 }}
          >
            <Calendar size={14} className="text-accent" />
            {experience.period}
          </motion.span>
        </div>

        <ul className="space-y-2">
          {experience.description.map((item, i) => (
            <motion.li
              key={i}
              className="flex items-start gap-3 text-sm text-muted-foreground"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + 0.4 + i * 0.1 }}
            >
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
              />
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t, isRTL } = useLanguage();

  return (
    <section id="experience" className="py-20 lg:py-32 relative overflow-hidden" ref={ref} dir={isRTL ? 'rtl' : 'ltr'}>
      <AnimatedBackground variant="minimal" />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Header */}
          <div className={`lg:sticky lg:top-32 lg:self-start ${isRTL ? 'lg:order-2' : ''}`}>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-medium text-accent uppercase tracking-wider glass-card"
            >
              <Sparkles size={14} />
              {t('journey')}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            >
              {t('professional')}
              <br />
              <span className="gradient-text">{t('experience')}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground max-w-md mb-8"
            >
              {t('experienceDescription')}
            </motion.p>

            {/* Decorative Element */}
            <motion.div
              className="hidden lg:block relative w-48 h-48"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-accent-secondary/10"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-4 rounded-full glass-card flex items-center justify-center"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="text-4xl font-bold gradient-text">1+</span>
              </motion.div>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-xs text-muted-foreground whitespace-nowrap">
                {t('yearsOfExperience')}
              </span>
            </motion.div>
          </div>

          {/* Timeline */}
          <div className={isRTL ? 'lg:order-1' : ''}>
            {experiences.map((experience, index) => (
              <ExperienceCard key={experience.id} experience={experience} index={index} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
