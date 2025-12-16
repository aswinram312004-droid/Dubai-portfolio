import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowUpRight, Smartphone, Globe, Image, Briefcase, Eye, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import TiltCard from './TiltCard';
import AnimatedBackground from './AnimatedBackground';

const projects = [
  {
    id: 1,
    title: 'AI Finance Tracker',
    subtitle: 'Mobile App UI',
    role: 'UI/UX Designer',
    description: 'User research, personas, journey mapping, wireframes to high-fidelity UI, interactive prototypes with focus on financial data visualization.',
    outcome: 'Improved clarity of insights and reduced cognitive load.',
    tags: ['UX Research', 'UI Design', 'Prototyping', 'Data Viz'],
    icon: Smartphone,
    gradient: 'from-violet-600 via-purple-600 to-indigo-600',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
  },
  {
    id: 2,
    title: 'AI Travel Companion',
    subtitle: 'Mobile App UI',
    role: 'UI/UX Designer',
    description: 'Intuitive navigation & user flows, interactive prototypes, modern UI patterns for travel planning.',
    outcome: 'Improved feature discoverability and engagement.',
    tags: ['User Flows', 'Prototyping', 'Mobile UI'],
    icon: Smartphone,
    gradient: 'from-blue-600 via-cyan-600 to-teal-600',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
  },
  {
    id: 3,
    title: 'EV Solar Charging Station',
    subtitle: 'Mobile App UI',
    role: 'UI/UX Designer',
    description: 'Location-based UX & booking flows, reusable components, accessibility-focused design.',
    outcome: 'Simplified booking and improved usability.',
    tags: ['Location UX', 'Accessibility', 'Components'],
    icon: Smartphone,
    gradient: 'from-green-600 via-emerald-600 to-teal-600',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=600&fit=crop',
  },
  {
    id: 4,
    title: 'Beauty Parlour Website',
    subtitle: 'UI/UX, Development & Hosting',
    role: 'Freelance UI/UX & Web Designer | India',
    description: 'Designed clean service-focused UI, responsive layouts for mobile & desktop, developed, deployed, and hosted website.',
    outcome: 'Delivered a live, production-ready business website.',
    tags: ['UI Design', 'Development', 'Responsive'],
    icon: Globe,
    gradient: 'from-pink-600 via-rose-600 to-red-600',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop',
  },
  {
    id: 5,
    title: 'Tailor Shop Website',
    subtitle: 'UI/UX Design',
    role: 'Freelance UI/UX & Web Designer | India',
    description: 'Modern, clean UI design with responsive service pages and contact-focused layout.',
    outcome: 'Improved service visibility and accessibility.',
    tags: ['UI Design', 'Web Design', 'Responsive'],
    icon: Globe,
    gradient: 'from-amber-600 via-orange-600 to-red-600',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
  },
  {
    id: 6,
    title: 'Poster Design',
    subtitle: 'Public Events & Company Advertisements',
    role: 'Freelance Graphic Designer | India',
    description: 'Designed posters for events & corporate ads, applied typography, color theory, and layout principles.',
    outcome: 'Improved audience engagement and brand alignment.',
    tags: ['Graphic Design', 'Typography', 'Branding'],
    icon: Image,
    gradient: 'from-red-600 via-rose-600 to-pink-600',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
  },
  {
    id: 7,
    title: 'Tri Stone Industries',
    subtitle: 'Corporate Design Project',
    role: 'UI/UX Designer | Dubai, UAE | Jul 2025 – Sep 2025',
    description: 'Designed responsive web & mobile interfaces, created wireframes, user flows, prototypes. Collaborated with developers & stakeholders.',
    outcome: 'Improved usability and navigation clarity.',
    tags: ['Corporate', 'Web & Mobile', 'Collaboration'],
    icon: Briefcase,
    gradient: 'from-slate-600 via-gray-600 to-zinc-600',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
  },
];

const ProjectCard = ({ project, index, t }: { project: typeof projects[0]; index: number; t: (key: string) => string }) => {
  const Icon = project.icon;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="perspective-1000"
    >
      <TiltCard className="h-full" tiltAmount={8} scale={1.02}>
        <div
          className="group glass-card overflow-hidden h-full relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Image Header with Parallax */}
          <div className="relative h-52 overflow-hidden">
            <motion.div
              className="absolute inset-0"
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
            
            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 mix-blend-multiply`} />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

            {/* Floating Icon */}
            <motion.div
              className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-background/20 backdrop-blur-md flex items-center justify-center"
              animate={{ y: isHovered ? -5 : 0, rotate: isHovered ? 10 : 0 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <Icon size={24} className="text-white" />
            </motion.div>

            {/* Hover Actions */}
            <motion.div
              className="absolute top-4 right-4 flex gap-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.button
                className="w-10 h-10 rounded-full bg-background/20 backdrop-blur-md flex items-center justify-center text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Eye size={16} />
              </motion.button>
              <motion.button
                className="w-10 h-10 rounded-full bg-background/20 backdrop-blur-md flex items-center justify-center text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={16} />
              </motion.button>
            </motion.div>

            {/* Animated Border Glow */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'linear-gradient(135deg, hsl(250 90% 65% / 0.3) 0%, transparent 50%)',
              }}
            />
          </div>

          {/* Content */}
          <div className="p-6 relative">
            {/* Title & Subtitle */}
            <motion.div
              className="mb-3"
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors flex items-center gap-2">
                {project.title}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
                >
                  <ArrowUpRight size={16} className="text-accent" />
                </motion.div>
              </h3>
              <p className="text-sm text-muted-foreground">{project.subtitle}</p>
            </motion.div>

            <p className="text-xs text-accent font-medium mb-3">{project.role}</p>

            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {project.description}
            </p>

            {/* Outcome with Glow */}
            <motion.div
              className="mb-4 p-3 bg-secondary/50 rounded-xl border border-border/50 group-hover:border-accent/30 transition-colors"
              animate={{ scale: isHovered ? 1.02 : 1 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <span className="text-xs font-medium text-accent">{t('outcome')}: </span>
              <span className="text-xs text-muted-foreground">{project.outcome}</span>
            </motion.div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-3 py-1.5 text-xs font-medium bg-secondary/80 text-muted-foreground rounded-lg border border-border/50 hover:border-accent/30 hover:text-accent transition-all cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Bottom Glow Effect */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{
              background: 'linear-gradient(90deg, transparent, hsl(250 90% 65% / 0.5), transparent)',
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </TiltCard>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t, isRTL } = useLanguage();

  return (
    <section id="projects" className="py-20 lg:py-32 relative overflow-hidden" ref={ref} dir={isRTL ? 'rtl' : 'ltr'}>
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
            <Briefcase size={14} />
            {t('portfolio')}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            {t('projectsTitle').split(' ')[0]} <span className="gradient-text">{t('projectsTitle').split(' ').slice(1).join(' ')}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground"
          >
            {t('projectsDescription')}
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} t={t} />
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.button
            className="btn-secondary group"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>{t('viewAllProjects')}</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowUpRight size={16} className="group-hover:text-accent transition-colors" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
