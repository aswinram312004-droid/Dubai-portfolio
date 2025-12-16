import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Heart, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t, isRTL } = useLanguage();

  const socialLinks = [
    { icon: Mail, href: 'mailto:arumugamanusha03@gmail.com', label: t('email') },
    { icon: Phone, href: 'tel:+971056148413', label: t('phone') },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/anusha-a-553508331/', label: 'LinkedIn' },
  ];

  const navLinks = [
    { label: t('home'), href: '#home' },
    { label: t('about'), href: '#about' },
    { label: t('skills'), href: '#skills' },
    { label: t('projects'), href: '#projects' },
    { label: t('experience'), href: '#experience' },
    { label: t('contact'), href: '#contact' },
  ];

  return (
    <footer className="py-16 border-t border-border relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Background Elements */}
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px]"
        style={{
          background: 'linear-gradient(90deg, transparent, hsl(250 90% 65% / 0.5), transparent)',
        }}
        animate={{ scaleX: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.a
              href="#home"
              className="inline-flex items-center gap-2 text-2xl font-bold text-foreground mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span>Anusha</span>
              <span className="gradient-text">.</span>
            </motion.a>
            <p className="text-sm text-muted-foreground mb-4">
              {t('footerDescription')}
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin size={14} className="text-accent" />
              <span>{t('dubaiUAE')}</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
              <Sparkles size={14} className="text-accent" />
              {t('quickLinks')}
            </h4>
            <nav className="grid grid-cols-2 gap-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-accent transition-colors animated-underline"
                  whileHover={{ x: isRTL ? -5 : 5 }}
                  initial={{ opacity: 0, x: isRTL ? 10 : -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
              <Sparkles size={14} className="text-accent" />
              {t('connect')}
            </h4>
            <div className="flex items-center gap-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/50 transition-all duration-300 glow-border"
                  whileHover={{ scale: 1.1, y: -3, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  aria-label={link.label}
                >
                  <link.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <span>© {currentYear} Anusha A. {t('allRightsReserved')}</span>
          <span className="hidden sm:inline text-accent">•</span>
          <motion.span
            className="flex items-center gap-1"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {t('madeWith')}{' '}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={14} className="text-accent fill-accent" />
            </motion.div>{' '}
            {t('inDubai')}
          </motion.span>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
