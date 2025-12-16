import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ta' | 'hi' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    experience: 'Experience',
    contact: 'Contact',
    letsTalk: "Let's Talk",
    
    // Hero Section
    heroTitle: 'UI/UX Designer | UX Designer | Junior Product Designer',
    heroLocation: 'Dubai, UAE',
    dubaiUAE: 'Dubai, UAE',
    heroTagline: 'Designing intuitive, scalable, and user-centered digital experiences',
    viewWork: 'View Work',
    contactMe: 'Contact Me',
    scroll: 'Scroll',
    intuitive: 'intuitive',
    scalable: 'scalable',
    userCentered: 'user-centered',
    digitalExperiences: 'digital experiences',
    designing: 'Designing',
    
    // About Section
    aboutTitle: 'About Me',
    aboutMe: 'About Me',
    craftingDigital: 'Crafting Digital',
    experiences: 'Experiences',
    aboutDescription: 'Results-driven UI/UX Designer and Junior Product Designer with hands-on internship and freelance experience designing scalable, user-centered web and mobile applications.',
    aboutDescription2: 'Strong expertise in UX research, UI design, wireframing, prototyping, interaction design, usability testing, information architecture, and design systems. Highly skilled in Figma and Adobe XD. Proven ability to collaborate with developers and stakeholders to deliver business-aligned digital solutions.',
    downloadResume: 'Download Resume',
    internshipFreelance: 'Internship & Freelance Experience',
    crossFunctional: 'Cross-functional Collaboration',
    dataDriven: 'Data-Driven Design Decisions',
    projectsCount: 'Projects',
    yearsExp: 'Years Exp.',
    
    // Skills Section
    skillsTitle: 'Skills & Tools',
    expertise: 'Expertise',
    skillsDescription: 'A comprehensive toolkit for creating exceptional digital experiences',
    uiuxProductDesign: 'UI/UX & Product Design',
    designTools: 'Design Tools',
    dataAutomation: 'Data & Automation',
    frontendCollaboration: 'Frontend & Collaboration',
    
    // Projects Section
    projectsTitle: 'Featured Projects',
    portfolio: 'Portfolio',
    projectsDescription: 'A selection of UX case studies and professional work showcasing my design process',
    viewCaseStudy: 'View Case Study',
    viewAllProjects: 'View All Projects',
    outcome: 'Outcome',
    
    // Experience Section
    experienceTitle: 'Experience',
    journey: 'Journey',
    professional: 'Professional',
    experienceDescription: 'My career path showcasing growth from internship to professional design roles, building expertise across various industries and project types.',
    yearsOfExperience: 'Internship & Freelance Experience',
    internship: 'Internship',
    
    // Contact Section
    getInTouch: 'Get in Touch',
    workTogether: 'Work Together',
    contactDescription: 'Have a project in mind or want to discuss opportunities? I\'d love to hear from you.',
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    location: 'Location',
    message: 'Message',
    yourName: 'Your name',
    yourEmail: 'your@email.com',
    tellProject: 'Tell me about your project...',
    sendMessage: 'Send Message',
    sending: 'Sending...',
    messageSent: 'Message Sent!',
    connectWithMe: 'Connect with me',
    
    // Validation
    nameRequired: 'Name is required',
    nameMinLength: 'Name must be at least 2 characters',
    emailRequired: 'Email is required',
    emailInvalid: 'Please enter a valid email',
    messageRequired: 'Message is required',
    messageMinLength: 'Message must be at least 10 characters',
    fixErrors: 'Please fix the errors',
    fieldsNeedAttention: 'Some fields need your attention.',
    messageSentTitle: 'Message sent!',
    messageSentDesc: "Thank you for reaching out. I'll get back to you soon!",
    messageFailed: 'Failed to send message',
    messageFailedDesc: 'Please try again or contact me directly via email.',
    
    // Footer
    allRightsReserved: 'All rights reserved.',
    madeWith: 'Made with',
    inDubai: 'in Dubai',
    quickLinks: 'Quick Links',
    connect: 'Connect',
    uiuxDesigner: 'UI/UX Designer',
    footerDescription: 'UI/UX Designer crafting intuitive, scalable, and user-centered digital experiences.',
  },
  ta: {
    // Navigation
    home: 'முகப்பு',
    about: 'என்னை பற்றி',
    skills: 'திறன்கள்',
    projects: 'திட்டங்கள்',
    experience: 'அனுபவம்',
    contact: 'தொடர்பு',
    letsTalk: 'பேசுவோம்',
    
    // Hero Section
    heroTitle: 'UI/UX வடிவமைப்பாளர் | ஜூனியர் தயாரிப்பு வடிவமைப்பாளர்',
    heroLocation: 'துபாய், ஐக்கிய அரபு எமிரேட்ஸ்',
    dubaiUAE: 'துபாய், ஐக்கிய அரபு எமிரேட்ஸ்',
    heroTagline: 'உள்ளுணர்வு, அளவிடக்கூடிய மற்றும் பயனர் மையப்படுத்தப்பட்ட டிஜிட்டல் அனுபவங்களை வடிவமைத்தல்',
    viewWork: 'வேலையைப் பார்',
    contactMe: 'என்னை தொடர்பு கொள்',
    scroll: 'உருட்டு',
    intuitive: 'உள்ளுணர்வு',
    scalable: 'அளவிடக்கூடிய',
    userCentered: 'பயனர் மையப்படுத்தப்பட்ட',
    digitalExperiences: 'டிஜிட்டல் அனுபவங்கள்',
    designing: 'வடிவமைத்தல்',
    
    // About Section
    aboutTitle: 'என்னை பற்றி',
    aboutMe: 'என்னை பற்றி',
    craftingDigital: 'டிஜிட்டல் உருவாக்கம்',
    experiences: 'அனுபவங்கள்',
    aboutDescription: 'அளவிடக்கூடிய, பயனர் மையப்படுத்தப்பட்ட வலை மற்றும் மொபைல் பயன்பாடுகளை வடிவமைக்கும் அனுபவம் கொண்ட UI/UX வடிவமைப்பாளர்.',
    aboutDescription2: 'UX ஆராய்ச்சி, UI வடிவமைப்பு, வயர்ஃபிரேமிங், புரோட்டோடைப்பிங், இடைவினை வடிவமைப்பு, பயன்பாட்டுத்தன்மை சோதனை, தகவல் கட்டமைப்பு மற்றும் வடிவமைப்பு அமைப்புகளில் வலுவான நிபுணத்துவம்.',
    downloadResume: 'சுயவிவரம் பதிவிறக்கு',
    internshipFreelance: 'இன்டர்ன்ஷிப் & ஃப்ரீலான்ஸ் அனுபவம்',
    crossFunctional: 'குறுக்கு-செயல்பாட்டு ஒத்துழைப்பு',
    dataDriven: 'தரவு-சார்ந்த வடிவமைப்பு முடிவுகள்',
    projectsCount: 'திட்டங்கள்',
    yearsExp: 'வருட அனு.',
    
    // Skills Section
    skillsTitle: 'திறன்கள் & கருவிகள்',
    expertise: 'நிபுணத்துவம்',
    skillsDescription: 'சிறந்த டிஜிட்டல் அனுபவங்களை உருவாக்குவதற்கான விரிவான கருவித்தொகுப்பு',
    uiuxProductDesign: 'UI/UX & தயாரிப்பு வடிவமைப்பு',
    designTools: 'வடிவமைப்பு கருவிகள்',
    dataAutomation: 'தரவு & தானியங்கி',
    frontendCollaboration: 'ஃப்ரன்ட்எண்ட் & ஒத்துழைப்பு',
    
    // Projects Section
    projectsTitle: 'சிறப்பு திட்டங்கள்',
    portfolio: 'போர்ட்ஃபோலியோ',
    projectsDescription: 'எனது வடிவமைப்பு செயல்முறையை காட்டும் UX வழக்கு ஆய்வுகள் மற்றும் தொழில்முறை பணி தேர்வு',
    viewCaseStudy: 'வழக்கு ஆய்வைப் பார்',
    viewAllProjects: 'அனைத்து திட்டங்களையும் பார்',
    outcome: 'விளைவு',
    
    // Experience Section
    experienceTitle: 'அனுபவம்',
    journey: 'பயணம்',
    professional: 'தொழில்முறை',
    experienceDescription: 'இன்டர்ன்ஷிப்பிலிருந்து தொழில்முறை வடிவமைப்பு பாத்திரங்களுக்கு வளர்ச்சியை காட்டும் எனது தொழில் பாதை.',
    yearsOfExperience: 'வருட அனுபவம்',
    internship: 'இன்டர்ன்ஷிப்',
    
    // Contact Section
    getInTouch: 'தொடர்பில் இரு',
    workTogether: 'ஒன்றாக வேலை செய்வோம்',
    contactDescription: 'மனதில் ஒரு திட்டம் உள்ளதா? உங்களிடமிருந்து கேட்க விரும்புகிறேன்.',
    name: 'பெயர்',
    email: 'மின்னஞ்சல்',
    phone: 'தொலைபேசி',
    location: 'இடம்',
    message: 'செய்தி',
    yourName: 'உங்கள் பெயர்',
    yourEmail: 'உங்கள்@மின்னஞ்சல்.com',
    tellProject: 'உங்கள் திட்டத்தை பற்றி சொல்லுங்கள்...',
    sendMessage: 'செய்தி அனுப்பு',
    sending: 'அனுப்புகிறது...',
    messageSent: 'செய்தி அனுப்பப்பட்டது!',
    connectWithMe: 'என்னுடன் இணையுங்கள்',
    
    // Validation
    nameRequired: 'பெயர் தேவை',
    nameMinLength: 'பெயர் குறைந்தது 2 எழுத்துக்கள் இருக்க வேண்டும்',
    emailRequired: 'மின்னஞ்சல் தேவை',
    emailInvalid: 'சரியான மின்னஞ்சலை உள்ளிடவும்',
    messageRequired: 'செய்தி தேவை',
    messageMinLength: 'செய்தி குறைந்தது 10 எழுத்துக்கள் இருக்க வேண்டும்',
    fixErrors: 'பிழைகளை சரிசெய்யவும்',
    fieldsNeedAttention: 'சில புலங்களுக்கு உங்கள் கவனம் தேவை.',
    messageSentTitle: 'செய்தி அனுப்பப்பட்டது!',
    messageSentDesc: 'தொடர்பு கொண்டதற்கு நன்றி. விரைவில் பதிலளிப்பேன்!',
    messageFailed: 'செய்தி அனுப்ப முடியவில்லை',
    messageFailedDesc: 'மீண்டும் முயற்சிக்கவும் அல்லது நேரடியாக மின்னஞ்சல் மூலம் தொடர்பு கொள்ளவும்.',
    
    // Footer
    allRightsReserved: 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
    madeWith: 'உருவாக்கியது',
    inDubai: 'துபாயில்',
    quickLinks: 'விரைவு இணைப்புகள்',
    connect: 'இணையுங்கள்',
    uiuxDesigner: 'UI/UX வடிவமைப்பாளர்',
    footerDescription: 'உள்ளுணர்வு, அளவிடக்கூடிய மற்றும் பயனர் மையப்படுத்தப்பட்ட டிஜிட்டல் அனுபவங்களை உருவாக்கும் UI/UX வடிவமைப்பாளர்.',
  },
  hi: {
    // Navigation
    home: 'होम',
    about: 'मेरे बारे में',
    skills: 'कौशल',
    projects: 'प्रोजेक्ट्स',
    experience: 'अनुभव',
    contact: 'संपर्क',
    letsTalk: 'बात करें',
    
    // Hero Section
    heroTitle: 'UI/UX डिज़ाइनर | जूनियर प्रोडक्ट डिज़ाइनर',
    heroLocation: 'दुबई, संयुक्त अरब अमीरात',
    dubaiUAE: 'दुबई, संयुक्त अरब अमीरात',
    heroTagline: 'सहज, स्केलेबल और उपयोगकर्ता-केंद्रित डिजिटल अनुभव डिज़ाइन करना',
    viewWork: 'काम देखें',
    contactMe: 'संपर्क करें',
    scroll: 'स्क्रॉल',
    intuitive: 'सहज',
    scalable: 'स्केलेबल',
    userCentered: 'उपयोगकर्ता-केंद्रित',
    digitalExperiences: 'डिजिटल अनुभव',
    designing: 'डिज़ाइन करना',
    
    // About Section
    aboutTitle: 'मेरे बारे में',
    aboutMe: 'मेरे बारे में',
    craftingDigital: 'डिजिटल क्राफ्टिंग',
    experiences: 'अनुभव',
    aboutDescription: 'स्केलेबल, उपयोगकर्ता-केंद्रित वेब और मोबाइल एप्लिकेशन डिज़ाइन करने के अनुभव वाले UI/UX डिज़ाइनर।',
    aboutDescription2: 'UX रिसर्च, UI डिज़ाइन, वायरफ्रेमिंग, प्रोटोटाइपिंग, इंटरैक्शन डिज़ाइन, यूज़ेबिलिटी टेस्टिंग, इंफॉर्मेशन आर्किटेक्चर और डिज़ाइन सिस्टम में मजबूत विशेषज्ञता।',
    downloadResume: 'रिज्यूम डाउनलोड करें',
    internshipFreelance: 'इंटर्नशिप और फ्रीलांस अनुभव',
    crossFunctional: 'क्रॉस-फंक्शनल सहयोग',
    dataDriven: 'डेटा-संचालित डिज़ाइन निर्णय',
    projectsCount: 'प्रोजेक्ट्स',
    yearsExp: 'वर्ष अनु.',
    
    // Skills Section
    skillsTitle: 'कौशल और उपकरण',
    expertise: 'विशेषज्ञता',
    skillsDescription: 'असाधारण डिजिटल अनुभव बनाने के लिए एक व्यापक टूलकिट',
    uiuxProductDesign: 'UI/UX और प्रोडक्ट डिज़ाइन',
    designTools: 'डिज़ाइन टूल्स',
    dataAutomation: 'डेटा और ऑटोमेशन',
    frontendCollaboration: 'फ्रंटएंड और सहयोग',
    
    // Projects Section
    projectsTitle: 'विशेष प्रोजेक्ट्स',
    portfolio: 'पोर्टफोलियो',
    projectsDescription: 'मेरी डिज़ाइन प्रक्रिया को प्रदर्शित करने वाले UX केस स्टडीज और पेशेवर कार्य का चयन',
    viewCaseStudy: 'केस स्टडी देखें',
    viewAllProjects: 'सभी प्रोजेक्ट्स देखें',
    outcome: 'परिणाम',
    
    // Experience Section
    experienceTitle: 'अनुभव',
    journey: 'यात्रा',
    professional: 'पेशेवर',
    experienceDescription: 'इंटर्नशिप से पेशेवर डिज़ाइन भूमिकाओं तक विकास दिखाने वाला मेरा करियर पथ।',
    yearsOfExperience: 'वर्षों का अनुभव',
    internship: 'इंटर्नशिप',
    
    // Contact Section
    getInTouch: 'संपर्क में रहें',
    workTogether: 'साथ काम करें',
    contactDescription: 'कोई प्रोजेक्ट है? आपसे सुनना पसंद करूंगी।',
    name: 'नाम',
    email: 'ईमेल',
    phone: 'फ़ोन',
    location: 'स्थान',
    message: 'संदेश',
    yourName: 'आपका नाम',
    yourEmail: 'आपका@ईमेल.com',
    tellProject: 'अपने प्रोजेक्ट के बारे में बताएं...',
    sendMessage: 'संदेश भेजें',
    sending: 'भेज रहे हैं...',
    messageSent: 'संदेश भेजा गया!',
    connectWithMe: 'मुझसे जुड़ें',
    
    // Validation
    nameRequired: 'नाम आवश्यक है',
    nameMinLength: 'नाम कम से कम 2 अक्षरों का होना चाहिए',
    emailRequired: 'ईमेल आवश्यक है',
    emailInvalid: 'कृपया एक वैध ईमेल दर्ज करें',
    messageRequired: 'संदेश आवश्यक है',
    messageMinLength: 'संदेश कम से कम 10 अक्षरों का होना चाहिए',
    fixErrors: 'कृपया त्रुटियों को ठीक करें',
    fieldsNeedAttention: 'कुछ फ़ील्ड को आपके ध्यान की आवश्यकता है।',
    messageSentTitle: 'संदेश भेजा गया!',
    messageSentDesc: 'संपर्क करने के लिए धन्यवाद। जल्द ही जवाब दूंगी!',
    messageFailed: 'संदेश भेजने में विफल',
    messageFailedDesc: 'कृपया पुनः प्रयास करें या सीधे ईमेल के माध्यम से संपर्क करें।',
    
    // Footer
    allRightsReserved: 'सर्वाधिकार सुरक्षित।',
    madeWith: 'से बनाया',
    inDubai: 'दुबई में',
    quickLinks: 'त्वरित लिंक',
    connect: 'जुड़ें',
    uiuxDesigner: 'UI/UX डिज़ाइनर',
    footerDescription: 'सहज, स्केलेबल और उपयोगकर्ता-केंद्रित डिजिटल अनुभव बनाने वाले UI/UX डिज़ाइनर।',
  },
  ar: {
    // Navigation
    home: 'الرئيسية',
    about: 'عني',
    skills: 'المهارات',
    projects: 'المشاريع',
    experience: 'الخبرة',
    contact: 'اتصل',
    letsTalk: 'لنتحدث',
    
    // Hero Section
    heroTitle: 'مصممة UI/UX | مصممة منتجات مبتدئة',
    heroLocation: 'دبي، الإمارات العربية المتحدة',
    dubaiUAE: 'دبي، الإمارات العربية المتحدة',
    heroTagline: 'تصميم تجارب رقمية بديهية وقابلة للتطوير ومركزة على المستخدم',
    viewWork: 'عرض الأعمال',
    contactMe: 'اتصل بي',
    scroll: 'مرر',
    intuitive: 'بديهية',
    scalable: 'قابلة للتطوير',
    userCentered: 'مركزة على المستخدم',
    digitalExperiences: 'تجارب رقمية',
    designing: 'تصميم',
    
    // About Section
    aboutTitle: 'عني',
    aboutMe: 'عني',
    craftingDigital: 'صياغة رقمية',
    experiences: 'تجارب',
    aboutDescription: 'مصممة UI/UX مدفوعة بالنتائج مع خبرة في تصميم تطبيقات الويب والجوال.',
    aboutDescription2: 'خبرة قوية في أبحاث UX وتصميم UI والإطارات السلكية والنماذج الأولية وتصميم التفاعل واختبار قابلية الاستخدام وهندسة المعلومات وأنظمة التصميم.',
    downloadResume: 'تحميل السيرة الذاتية',
    internshipFreelance: 'خبرة التدريب والعمل الحر',
    crossFunctional: 'التعاون متعدد الوظائف',
    dataDriven: 'قرارات التصميم المستندة إلى البيانات',
    projectsCount: 'مشاريع',
    yearsExp: 'سنوات خب.',
    
    // Skills Section
    skillsTitle: 'المهارات والأدوات',
    expertise: 'الخبرة',
    skillsDescription: 'مجموعة أدوات شاملة لإنشاء تجارب رقمية استثنائية',
    uiuxProductDesign: 'تصميم UI/UX والمنتجات',
    designTools: 'أدوات التصميم',
    dataAutomation: 'البيانات والأتمتة',
    frontendCollaboration: 'الواجهة الأمامية والتعاون',
    
    // Projects Section
    projectsTitle: 'المشاريع المميزة',
    portfolio: 'معرض الأعمال',
    projectsDescription: 'مجموعة مختارة من دراسات حالة UX والأعمال المهنية التي تعرض عملية التصميم الخاصة بي',
    viewCaseStudy: 'عرض دراسة الحالة',
    viewAllProjects: 'عرض جميع المشاريع',
    outcome: 'النتيجة',
    
    // Experience Section
    experienceTitle: 'الخبرة',
    journey: 'الرحلة',
    professional: 'المهنية',
    experienceDescription: 'مسيرتي المهنية التي تُظهر النمو من التدريب إلى أدوار التصميم المهنية.',
    yearsOfExperience: 'سنوات من الخبرة',
    internship: 'تدريب',
    
    // Contact Section
    getInTouch: 'تواصل معي',
    workTogether: 'لنعمل معاً',
    contactDescription: 'هل لديك مشروع في ذهنك؟ أحب أن أسمع منك.',
    name: 'الاسم',
    email: 'البريد الإلكتروني',
    phone: 'الهاتف',
    location: 'الموقع',
    message: 'الرسالة',
    yourName: 'اسمك',
    yourEmail: 'بريدك@الإلكتروني.com',
    tellProject: 'أخبرني عن مشروعك...',
    sendMessage: 'إرسال الرسالة',
    sending: 'جاري الإرسال...',
    messageSent: 'تم إرسال الرسالة!',
    connectWithMe: 'تواصل معي',
    
    // Validation
    nameRequired: 'الاسم مطلوب',
    nameMinLength: 'يجب أن يكون الاسم حرفين على الأقل',
    emailRequired: 'البريد الإلكتروني مطلوب',
    emailInvalid: 'الرجاء إدخال بريد إلكتروني صالح',
    messageRequired: 'الرسالة مطلوبة',
    messageMinLength: 'يجب أن تكون الرسالة 10 أحرف على الأقل',
    fixErrors: 'يرجى إصلاح الأخطاء',
    fieldsNeedAttention: 'بعض الحقول تحتاج اهتمامك.',
    messageSentTitle: 'تم إرسال الرسالة!',
    messageSentDesc: 'شكراً للتواصل. سأرد عليك قريباً!',
    messageFailed: 'فشل إرسال الرسالة',
    messageFailedDesc: 'يرجى المحاولة مرة أخرى أو التواصل مباشرة عبر البريد الإلكتروني.',
    
    // Footer
    allRightsReserved: 'جميع الحقوق محفوظة.',
    madeWith: 'صنع بـ',
    inDubai: 'في دبي',
    quickLinks: 'روابط سريعة',
    connect: 'تواصل',
    uiuxDesigner: 'مصممة UI/UX',
    footerDescription: 'مصممة UI/UX تصنع تجارب رقمية بديهية وقابلة للتطوير ومركزة على المستخدم.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-language');
      return (saved as Language) || 'en';
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('portfolio-language', lang);
  };

  const isRTL = language === 'ar';

  const t = (key: string): string => {
    return translations[language][key] || translations['en'][key] || key;
  };

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRTL]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isRTL, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const languages: { code: Language; name: string; nativeName: string }[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
];
