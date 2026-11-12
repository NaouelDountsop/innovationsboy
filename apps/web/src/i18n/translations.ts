export type Language = 'fr' | 'en'

export const translations = {
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      services: 'Services',
      projects: 'Projets',
      studio: 'Studio au Cameroun',
      contact: 'Contact',
      quote: 'Demander un devis',
      team: 'Notre équipe',
      portfolio: 'Voir le portfolio',
      langLabel: 'FR',
      themeToggle: 'Changer de thème',
      chooseLanguage: 'Choisir la langue',
      availableLanguages: 'Langues disponibles',
      openMenu: 'Menu',
      brandTagline: 'Studio digital',
    },
    hero: {
      badge: 'La confiance des jeunes talents, des projets qui durent.',
      titleLine1: 'Créez avec',
      titleLine2: 'confiance. Lancez',
      titleLine3: 'avec Innovations Boys.',
      description:
        'Innovations Boys allie ingénierie du bâtiment, BIM/CAO et création digitale pour donner vie à vos projets. Des solutions fiables, modernes et durables pour les particuliers, les entreprises et les acteurs du BTP, au Cameroun et au-delà.',
      team: 'Notre équipe',
      portfolio: 'Voir le portfolio',
      quote: 'Demander un devis',
    },
    about: {
      eyebrow: 'À propos de nous',
      titleLine1: 'Construire aujourd’hui.',
      titleLine2: 'Innover',
      titleLine3: 'pour demain.',
      p1:
        'Innovations Boys est né d’une ambition : mettre l’ingénierie, la technologie et la créativité au service de projets qui transforment notre environnement.',
      p2:
        'Porté par une expertise en ingénierie du bâtiment et une passion pour le digital, nous accompagnons les particuliers, les entreprises et les acteurs du BTP dans la conception, la réalisation et la valorisation de leurs projets.',
      p3:
        'À travers le partage de connaissances et des solutions innovantes, nous souhaitons contribuer au développement de notre pays, le Cameroun, et au-delà.',
      cta: 'Découvrir notre mission',
      teamImageAlt: 'Équipe de chantier réunie autour des plans',
      features: [
        {
          title: 'Expertise BTP',
          text: 'Conception, plans, métrés et suivi de chantier.',
        },
        {
          title: 'Innovation Digitale',
          text: 'BIM, CAO, solutions numériques et création de contenu.',
        },
        {
          title: 'Partage & Formation',
          text: 'Vidéos, tutoriels et conseils pour apprendre et progresser.',
        },
      ],
    },
    services: {
      eyebrow: 'Nos services',
      titleLine1: 'Des solutions adaptées',
      titleLine2: 'ambitions.',
      description:
        "De l'ingénierie du bâtiment aux technologies numériques, nous donnons vie à vos projets.",
      digitalDescription:
        'Nous concevons des vidéos YouTube, tutoriels et contenus digitaux pour partager notre savoir-faire et mettre en valeur vos projets. Retrouvez toutes nos réalisations sur notre chaîne.',
      cta: 'Découvrir les services',
      closeGallery: 'Fermer la galerie',
      previousImage: 'Image précédente',
      nextImage: 'Image suivante',
      backToVideos: 'Retour aux vidéos',
      items: [
        {
          title: 'Ingénierie & BTP',
          description:
            'Conception, plans architecturaux, études techniques, métrés et devis.',
          list: ['Études et conception', 'Suivi de chantier', 'Conseils techniques'],
        },
        {
          title: 'BIM & Innovation',
          description:
            'Modélisation 3D, Archicad, CAO, visualisation et solutions numériques.',
          list: ['Modélisation 3D', 'Rendus réalistes', 'Solutions innovantes'],
        },
        {
          title: 'Création digitale',
          description:
            'Vidéos YouTube et outils numériques disponibles sur Chariow.',
          list: ['Vidéos YouTube', 'Outils numériques sur Chariow'],
        },
      ],
    },
    projects: {
      eyebrow: 'Nos projets',
      titleLine1: 'Des réalisations qui',
      titleLine2: 'donnent du sens',
      titleLine3: 'à chaque chantier',
      description:
        'Des réalisations qui allient expertise technique, design premium et impact durable.',
      expandImage: "Agrandir l'image du projet",
      closeImage: "Fermer l'image",
      imageAlt: 'Projet',
      largeImageAlt: 'Projet agrandi',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Parlons de votre projet',
      email: 'dountsopivan2003@gmail.com',
      formEyebrow: 'Écrivez-nous',
      formTitle: 'Envoyez-nous un message.',
      formDescription:
        'Remplissez le formulaire ci-dessous. Nous serons heureux de prendre connaissance de votre demande.',
      namePlaceholder: 'Nom complet *',
      emailPlaceholder: 'Adresse e-mail *',
      subjectPlaceholder: 'Sujet de votre demande *',
      messagePlaceholder: 'Votre message *',
      subjects: [
        'Ingénierie & BTP',
        'BIM & Innovation',
        'Création digitale',
        'Boutique Chariow',
        'Partenariat',
        'Autre',
      ],
      submit: 'Envoyer sur WhatsApp',
      success:
        'WhatsApp s’est ouvert avec votre message prérempli. Appuyez sur Envoyer pour nous l’envoyer.',
      openWhatsApp: 'Ouvrir WhatsApp',
      waGreeting: 'Bonjour Innovations Boys,',
      required: '* Champs obligatoires',
      quote: 'Construire aujourd’hui, c’est bâtir demain.',
      socialEyebrow: 'Restons connectés',
      socialTitle: 'Retrouvez-nous sur les réseaux.',
      socialDescription:
        'Suivez Innovations Boys pour découvrir nos réalisations, nos conseils et nos actualités.',
      follow: 'Nous suivre',
      networks: {
        youtube: 'Nos vidéos et tutoriels sur le bâtiment et le BIM.',
        whatsapp: 'Échangeons directement sur votre projet.',
        chariow: 'Découvrez nos outils et produits numériques.',
      },
    },
    studio: {
      eyebrow: 'Studio Créatif',
      titleLine1: 'Nos plateformes',
      titleLine2: 'pour vous inspirer',
      titleLine3: 'vous équiper.',
      description:
        'À travers notre chaîne YouTube et notre boutique en ligne Chariow, nous partageons notre savoir-faire et vous proposons des produits de qualité pour vos projets, vos chantiers et votre quotidien.',
      youtube: {
        label: 'Notre chaîne',
        cta: 'Voir notre chaîne YouTube',
        verified: 'Chaîne vérifiée',
        subscribers: 'abonnés',
        videos: 'vidéos',
        views: 'vues',
        text: 'Des tutoriels, des conseils, des retours d’expérience et des projets concrets pour vous aider à progresser dans vos projets.',
        checklist: [
          'Tutoriels (BTP, logiciels, digital)',
          'Vlogs et coulisses de nos projets',
          'Astuces et conseils pratiques',
        ],
      },
      shop: {
        label: 'Notre boutique en ligne',
        title: 'Chariow',
        subtitle: 'Tout pour vos projets, au même endroit.',
        description:
          'Découvrez notre boutique en ligne Chariow : une large gamme de produits de qualité pour le bâtiment, l’outillage, l’équipement et bien plus encore.',
        cta: 'Visiter notre site Chariow',
        checklist: ['Produits de qualité', 'Paiement sécurisé', 'Livraison rapide au Cameroun'],
      },
    },
    footer: {
      tagline: 'Ingénierie, design, digital et solutions pour des projets durables.',
      navigation: 'Navigation',
      contact: 'Contact',
      location: 'Studio au Cameroun',
      domain: 'Solutions BTP & Digital',
      follow: 'Suivez-nous',
      rights: '© 2026 Innovations Boys — Tous droits réservés.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      projects: 'Projects',
      studio: 'Studio in Cameroon',
      contact: 'Contact',
      quote: 'Request a quote',
      team: 'Our team',
      portfolio: 'View portfolio',
      langLabel: 'EN',
      themeToggle: 'Toggle theme',
      chooseLanguage: 'Choose language',
      availableLanguages: 'Available languages',
      openMenu: 'Menu',
      brandTagline: 'Digital studio',
    },
    hero: {
      badge: 'The trust of young talents, projects that last.',
      titleLine1: 'Create with',
      titleLine2: 'confidence. Launch',
      titleLine3: 'with Innovations Boys.',
      description:
        'Innovations Boys combines building engineering, BIM/CAD and digital creation to bring your projects to life. Reliable, modern and sustainable solutions for individuals, companies and construction stakeholders in Cameroon and beyond.',
      team: 'Our team',
      portfolio: 'View portfolio',
      quote: 'Request a quote',
    },
    about: {
      eyebrow: 'About us',
      titleLine1: 'Build today.',
      titleLine2: 'Innovate',
      titleLine3: 'for tomorrow.',
      p1:
        'Innovations Boys was born from a simple ambition: to put engineering, technology and creativity at the service of projects that reshape our environment.',
      p2:
        'Driven by expertise in construction engineering and a passion for digital, we support individuals, companies and BTP stakeholders in the design, delivery and promotion of their projects.',
      p3:
        'Through knowledge sharing and innovative solutions, we want to contribute to the development of our country, Cameroon, and beyond.',
      cta: 'Discover our mission',
      teamImageAlt: 'Construction team gathered around plans',
      features: [
        {
          title: 'BTP Expertise',
          text: 'Design, plans, quantity takeoff and site monitoring.',
        },
        {
          title: 'Digital Innovation',
          text: 'BIM, CAD, digital solutions and content creation.',
        },
        {
          title: 'Sharing & Training',
          text: 'Videos, tutorials and practical advice to learn and grow.',
        },
      ],
    },
    services: {
      eyebrow: 'Our services',
      titleLine1: 'Solutions designed for your',
      titleLine2: 'ambitions.',
      description:
        'From building engineering to digital technology, we bring your projects to life.',
      digitalDescription:
        'We create YouTube videos, tutorials and digital content to share our know-how and showcase your projects. Find all our work on our channel.',
      cta: 'Discover our services',
      closeGallery: 'Close gallery',
      previousImage: 'Previous image',
      nextImage: 'Next image',
      backToVideos: 'Back to videos',
      items: [
        {
          title: 'Engineering & Construction',
          description:
            'Architectural design, technical studies, quantity surveying and estimates.',
          list: ['Design and planning', 'Site supervision', 'Technical consulting'],
        },
        {
          title: 'BIM & Innovation',
          description:
            '3D modeling, Archicad, CAD, visualization and digital solutions.',
          list: ['3D modeling', 'Realistic renders', 'Innovative solutions'],
        },
        {
          title: 'Digital creation',
          description:
            'YouTube videos and digital tools available on Chariow.',
          list: ['YouTube videos', 'Digital tools on Chariow'],
        },
      ],
    },
    projects: {
      eyebrow: 'Our projects',
      titleLine1: 'Projects that',
      titleLine2: 'give meaning',
      titleLine3: 'to every site',
      description:
        'Projects that combine technical expertise, premium design and lasting impact.',
      expandImage: 'Enlarge project image',
      closeImage: 'Close image',
      imageAlt: 'Project',
      largeImageAlt: 'Enlarged project',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Let’s talk about your project',
      email: 'dountsopivan2003@gmail.com',
      formEyebrow: 'Write to us',
      formTitle: 'Send us a message.',
      formDescription:
        'Fill in the form below. We will be happy to review your request.',
      namePlaceholder: 'Full name *',
      emailPlaceholder: 'Email address *',
      subjectPlaceholder: 'Subject of your request *',
      messagePlaceholder: 'Your message *',
      subjects: [
        'Engineering & Construction',
        'BIM & Innovation',
        'Digital creation',
        'Chariow store',
        'Partnership',
        'Other',
      ],
      submit: 'Send via WhatsApp',
      success:
        'WhatsApp has opened with your message prefilled. Press Send to deliver it.',
      openWhatsApp: 'Open WhatsApp',
      waGreeting: 'Hello Innovations Boys,',
      required: '* Required fields',
      quote: 'Building today means shaping tomorrow.',
      socialEyebrow: 'Let’s stay connected',
      socialTitle: 'Find us on social media.',
      socialDescription:
        'Follow Innovations Boys to discover our projects, advice and news.',
      follow: 'Follow us',
      networks: {
        youtube: 'Our videos and tutorials on construction and BIM.',
        whatsapp: 'Let’s talk directly about your project.',
        chariow: 'Discover our digital tools and products.',
      },
    },
    studio: {
      eyebrow: 'Creative Studio',
      titleLine1: 'Our platforms',
      titleLine2: 'to inspire you',
      titleLine3: 'and equip you.',
      description:
        'Through our YouTube channel and Chariow online store, we share our know-how and offer quality products for your projects, worksites and everyday life.',
      youtube: {
        label: 'Our channel',
        cta: 'Watch our YouTube channel',
        verified: 'Verified channel',
        subscribers: 'subscribers',
        videos: 'videos',
        views: 'views',
        text: 'Tutorials, advice, feedback and concrete projects to help you move forward with your work.',
        checklist: [
          'Tutorials (construction, software, digital)',
          'Vlogs and behind-the-scenes of our projects',
          'Helpful tips and practical advice',
        ],
      },
      shop: {
        label: 'Our online store',
        title: 'Chariow',
        subtitle: 'Everything for your projects, in one place.',
        description:
          'Discover our online store Chariow: a wide range of quality products for construction, tools, equipment and much more.',
        cta: 'Visit our Chariow website',
        checklist: ['Quality products', 'Secure payment', 'Fast delivery in Cameroon'],
      },
    },
    footer: {
      tagline: 'Engineering, design, digital and solutions for sustainable projects.',
      navigation: 'Navigation',
      contact: 'Contact',
      location: 'Studio in Cameroon',
      domain: 'Construction & Digital solutions',
      follow: 'Follow us',
      rights: '© 2026 Innovations Boys — All rights reserved.',
    },
  },
} as const
