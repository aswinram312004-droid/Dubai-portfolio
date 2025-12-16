import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Palette, Search, Layout, Brain, Users, GitBranch,
  PenTool, Layers, TestTube, Grid3X3, Smartphone,
  Figma, Monitor, Image, Type, Zap, Database,
  Table, Workflow, Code, Github
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import TiltCard from './TiltCard';
import AnimatedBackground from './AnimatedBackground';

const SkillCard = ({ skill, index }: { skill: { name: string; icon: typeof Search }; index: number }) => {
  const Icon = skill.icon;

  return (
    <TiltCard className="h-full" tiltAmount={8} scale={1.03}>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.03 }}
        className="group glass-card p-4 h-full cursor-default relative overflow-hidden glow-border"
      >
        {/* Shimmer effect */}
        <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100" />
        
        <div className="flex items-center gap-3 relative z-10">
          <motion.div
            className="w-10 h-10 rounded-xl bg-secondary/80 flex items-center justify-center group-hover:bg-accent/20 transition-all duration-300"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Icon size={18} className="text-muted-foreground group-hover:text-accent transition-colors" />
          </motion.div>
          <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
            {skill.name}
          </span>
        </div>

        {/* Glow effect on hover */}
        <motion.div
          className="absolute -bottom-1 left-1/2 w-1/2 h-1 bg-accent/50 blur-md opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1/2"
        />
      </motion.div>
    </TiltCard>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t, isRTL } = useLanguage();

  const skillCategories = [
    {
      title: t('uiuxProductDesign'),
      icon: Palette,
      skills: [
        { name: 'UX Research', icon: Search },
        { name: 'UI Design', icon: Palette },
        { name: 'Product Design', icon: Layout },
        { name: 'Design Thinking', icon: Brain },
        { name: 'Personas & Journey Mapping', icon: Users },
        { name: 'User Flows & IA', icon: GitBranch },
        { name: 'Wireframing', icon: PenTool },
        { name: 'Prototyping & Interaction', icon: Layers },
        { name: 'Usability Testing', icon: TestTube },
        { name: 'Design Systems', icon: Grid3X3 },
        { name: 'Responsive Design', icon: Smartphone },
      ],
    },
    {
      title: t('designTools'),
      icon: Figma,
      skills: [
        { name: 'Figma', icon: Figma },
        { name: 'Adobe XD', icon: Monitor },
        { name: 'Photoshop', icon: Image },
        { name: 'Illustrator', icon: PenTool },
        { name: 'Canva', icon: Type },
        { name: 'Affinity', icon: Zap },
      ],
    },
    {
      title: t('dataAutomation'),
      icon: Database,
      skills: [
        { name: 'Microsoft Excel', icon: Table },
        { name: 'n8n Workflow Automation', icon: Workflow },
        { name: 'Design Operations', icon: Database },
      ],
    },
    {
      title: t('frontendCollaboration'),
      icon: Code,
      skills: [
        { name: 'HTML, CSS, JavaScript', icon: Code },
        { name: 'Git & GitHub', icon: Github },
        { name: 'Design Handoff', icon: Layers },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 lg:py-32 relative overflow-hidden" ref={ref} dir={isRTL ? 'rtl' : 'ltr'}>
      <AnimatedBackground variant="section" />
      
      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-medium text-accent uppercase tracking-wider glass-card"
          >
            <Zap size={14} />
            {t('expertise')}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            {t('skillsTitle').split('&')[0]} <span className="gradient-text">& {t('skillsTitle').split('&')[1]}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground"
          >
            {t('skillsDescription')}
          </motion.p>
        </div>

        {/* Skills Grid */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <motion.h3
                  className="text-lg font-semibold text-foreground mb-6 flex items-center gap-3"
                  whileHover={{ x: isRTL ? -5 : 5 }}
                >
                  <motion.div
                    className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CategoryIcon size={16} className="text-accent" />
                  </motion.div>
                  <span>{category.title}</span>
                  <motion.span
                    className="h-px flex-1 bg-gradient-to-r from-accent/50 to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    style={{ originX: isRTL ? 1 : 0 }}
                  />
                </motion.h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {category.skills.map((skill, index) => (
                    <SkillCard key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
