import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Linkedin, CheckCircle, Loader2, Sparkles, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedBackground from './AnimatedBackground';

const ContactSection = () => {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();
  const { t, isRTL } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = t('nameRequired');
    } else if (formData.name.trim().length < 2) {
      newErrors.name = t('nameMinLength');
    }

    if (!formData.email.trim()) {
      newErrors.email = t('emailRequired');
    } else if (!validateEmail(formData.email)) {
      newErrors.email = t('emailInvalid');
    }

    if (!formData.message.trim()) {
      newErrors.message = t('messageRequired');
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t('messageMinLength');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!validateForm()) {
      toast({
        title: t('fixErrors'),
        description: t('fieldsNeedAttention'),
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // EmailJS Configuration - Replace with your actual EmailJS credentials
      // Get these from https://www.emailjs.com/
      const serviceId = 'service_mxh4dsf'; // Your EmailJS service ID
      const templateId = 'template_v6rtksh'; // Your EmailJS template ID  
      const publicKey = 'U_HeqrPJgaT4cl4wX'; // Your EmailJS public key

      // Initialize EmailJS
      emailjs.init(publicKey);

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          reply_to: formData.email,
          message: formData.message,
          to_email: 'arumugamanusha03@gmail.com',
        },
        publicKey
      );

      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setErrors({});

      toast({
        title: t('messageSentTitle'),
        description: t('messageSentDesc'),
      });

      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Email send error:', error);
      toast({
        title: t('messageFailed'),
        description: t('messageFailedDesc'),
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: t('email'), value: 'arumugamanusha03@gmail.com', href: 'mailto:arumugamanusha03@gmail.com' },
    { icon: Phone, label: t('phone'), value: '+971 561484135', href: 'tel:+971561484135' },
    { icon: MapPin, label: t('location'), value: t('dubaiUAE'), href: null },
    { icon: Linkedin, label: 'LinkedIn', value: t('connectWithMe'), href: 'https://www.linkedin.com/in/anusha-a-553508331/' },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-32 relative overflow-hidden" ref={ref}>
      <AnimatedBackground variant="section" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Info Side */}
          <div className={isRTL ? 'order-2 lg:order-1' : ''}>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 mb-4 sm:mb-6 text-sm font-medium text-accent uppercase tracking-wider glass-card"
            >
              <Sparkles size={14} />
              {t('getInTouch')}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4"
            >
              {t('letsTalk')}
              <br />
              <span className="gradient-text">{t('workTogether')}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base max-w-md"
            >
              {t('contactDescription')}
            </motion.p>

            {/* Contact Info */}
            <div className="space-y-3 sm:space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 glass-card group glow-border hover:scale-[1.01] transition-transform"
                    >
                      <motion.div
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-secondary/80 flex items-center justify-center group-hover:bg-accent/20 transition-all duration-300 flex-shrink-0"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <item.icon size={18} className="text-muted-foreground group-hover:text-accent transition-colors" />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-muted-foreground">{item.label}</p>
                        <p className="text-foreground font-medium group-hover:text-accent transition-colors text-sm sm:text-base truncate">
                          {item.value}
                        </p>
                      </div>
                      <motion.div
                        className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight size={16} className="text-accent" />
                      </motion.div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 glass-card">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-secondary/80 flex items-center justify-center flex-shrink-0">
                        <item.icon size={18} className="text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{item.label}</p>
                        <p className="text-foreground font-medium text-sm sm:text-base">{item.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className={isRTL ? 'order-1 lg:order-2' : ''}
          >
            <form 
              ref={formRef} 
              onSubmit={handleSubmit} 
              className="glass-card p-4 sm:p-6 lg:p-8 glow-border relative z-10"
            >
              <div className="space-y-4 sm:space-y-6">
                {/* Name */}
                <motion.div
                  animate={{ scale: focusedField === 'name' ? 1.01 : 1 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    {t('name')} <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    placeholder={t('yourName')}
                    autoComplete="name"
                    className={`w-full px-4 py-3 sm:py-4 rounded-xl bg-secondary/50 border text-foreground placeholder:text-muted-foreground input-glow focus:outline-none focus:ring-2 focus:ring-accent/50 text-base touch-manipulation ${
                      errors.name ? 'border-destructive' : 'border-border'
                    }`}
                    dir={isRTL ? 'rtl' : 'ltr'}
                  />
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-destructive text-xs mt-1"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </motion.div>

                {/* Email */}
                <motion.div
                  animate={{ scale: focusedField === 'email' ? 1.01 : 1 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    {t('email')} <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    placeholder={t('yourEmail')}
                    autoComplete="email"
                    className={`w-full px-4 py-3 sm:py-4 rounded-xl bg-secondary/50 border text-foreground placeholder:text-muted-foreground input-glow focus:outline-none focus:ring-2 focus:ring-accent/50 text-base touch-manipulation ${
                      errors.email ? 'border-destructive' : 'border-border'
                    }`}
                    dir="ltr"
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-destructive text-xs mt-1"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </motion.div>

                {/* Message */}
                <motion.div
                  animate={{ scale: focusedField === 'message' ? 1.01 : 1 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    {t('message')} <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    rows={5}
                    placeholder={t('tellProject')}
                    className={`w-full px-4 py-3 sm:py-4 rounded-xl bg-secondary/50 border text-foreground placeholder:text-muted-foreground input-glow focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none text-base touch-manipulation ${
                      errors.message ? 'border-destructive' : 'border-border'
                    }`}
                    dir={isRTL ? 'rtl' : 'ltr'}
                  />
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-destructive text-xs mt-1"
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full py-4 sm:py-5 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300 relative overflow-hidden text-base cursor-pointer select-none touch-manipulation active:scale-[0.98] min-h-[56px] ${
                    isSubmitted
                      ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                      : isSubmitting
                      ? 'opacity-70 cursor-not-allowed btn-accent'
                      : 'btn-accent hover:scale-[1.02] hover:-translate-y-0.5'
                  }`}
                  whileTap={!isSubmitting && !isSubmitted ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      {t('sending')}
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle size={20} />
                      {t('messageSent')}
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      {t('sendMessage')}
                    </>
                  )}

                  {/* Button Glow Effect */}
                  {!isSubmitted && !isSubmitting && (
                    <motion.div
                      className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity pointer-events-none"
                      style={{
                        background: 'radial-gradient(circle at center, hsl(0 0% 100% / 0.2), transparent 70%)',
                      }}
                    />
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
