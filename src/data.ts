/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, AdviceArticle, AdvisorQuestion } from './types';

export const products: Product[] = [
  {
    id: 'optibloc-aura',
    name: 'OptiBloc Aura (Doré Chic)',
    category: 'blue_light',
    type_label: 'Anti-Lumière Bleue Premium',
    price: 7000,
    image: '/src/assets/images/lunettes_chic_1780426164495.png',
    description: 'Une monture métallique fine aux courbes de chat élégantes, conçue spécifiquement pour les professionnelles modernes cherchant à allier esthétique raffinée et protection maximale face aux écrans.',
    features: [
      'Filtration de 92% de la lumière bleue nocive (380-450nm)',
      'Verres en polycarbonate haute clarification avec anti-reflet',
      'Monture ergonomique ultra-légère pour un confort longue durée',
      'Traitement oléophobe anti-empreintes et poussière'
    ],
    usage: ['office', 'reading'],
    frame_material: 'Alliage Métallique Doré Premium',
    frame_shape: 'Cat-Eye / Papillon',
    gender: 'femme',
    rating: 4.8
  },
  {
    id: 'optibloc-chronos',
    name: 'OptiBloc Chronos (Photochromique Argenté)',
    category: 'photochromic',
    type_label: 'Photochromique + Anti-Lumière Bleue',
    price: 8000,
    image: '/src/assets/images/lunettes_photochromique_1780426195796.png',
    description: 'La fusion parfaite entre confort intérieur et liberté extérieure. Ces verres intelligents s\'assombrissent automatiquement sous les rayons UV du soleil tout en assurant un filtrage haute fidélité des écrans au bureau.',
    features: [
      'Transition ultra-rapide ombre/soleil en moins de 60 secondes',
      'Protection UV400 intégrale et traitement anti-éblouissement',
      'Verres photochromiques de dernière génération (teinte gris/noir)',
      'Charnières renforcées ultra-résistantes'
    ],
    usage: ['office', 'outdoor', 'driving'],
    frame_material: 'Titane de Synthèse Argenté',
    frame_shape: 'Ronde Minimaliste',
    gender: 'unisex',
    rating: 4.9
  },
  {
    id: 'optibloc-executive',
    name: 'OptiBloc Executive (Noir Classique)',
    category: 'blue_light',
    type_label: 'Anti-Lumière Bleue Professionnel',
    price: 6000,
    image: '/src/assets/images/lunettes_classic_black_1780426180095.png',
    description: 'Un classique intemporel pour les cadres et développeurs exigeants. Sa monture robuste noire mate offre une assise parfaite et un design sérieux pour de longues séances de productivité sans fatigue.',
    features: [
      'Filtre haute résolution optimisé pour les développeurs et designers',
      'Matériau acétate mat haute densité d\'une robustesse à toute épreuve',
      'Aucune distorsion des couleurs de l\'écran',
      'Pont de nez ergonomique réduisant les points de pression'
    ],
    usage: ['office', 'gaming'],
    frame_material: 'Acétate de Cellulose Mat',
    frame_shape: 'Rectangulaire Classique',
    gender: 'unisex',
    rating: 4.7
  },
  {
    id: 'optibloc-horizon',
    name: 'OptiBloc Horizon (Transparent Crystalline)',
    category: 'blue_light',
    type_label: 'Anti-Lumière Bleue Designer',
    price: 5000,
    image: '/src/assets/images/lunettes_clear_1780426212157.png',
    description: 'Minimaliste, futuriste et trendy. Idéal pour les gamers, étudiants et créateurs de contenu désireux d\'afficher un style avant-gardiste tout en bloquant l\'agression lumineuse de leurs smartphones et écrans.',
    features: [
      'Indice de protection optimal pour sessions de gaming intenses',
      'Matériau TR90 ultra-flexible et incassable',
      'Design transparent cristal très tendance et moderne',
      'Verres hydrophobes (l\'eau glisse sans laisser de traces)'
    ],
    usage: ['gaming', 'office'],
    frame_material: 'Polymère TR90 Transparent',
    frame_shape: 'Carré Arrondi Moderne',
    gender: 'unisex',
    rating: 4.6
  },
  {
    id: 'optibloc-titan',
    name: 'OptiBloc Titan Pro (Photochromique Or Rose)',
    category: 'photochromic',
    type_label: 'Photochromique + Anti-Lumière Bleue',
    price: 8000,
    image: '/src/assets/images/lunettes_photochromique_1780426195796.png', // Fallback link
    description: 'La légèreté absolue alliée à l\'intelligence photochromique. Sa superbe monture or rose ultra-fine offre une transition douce face à la lumière extérieure et un bouclier numérique complet en intérieur.',
    features: [
      'Verres photochromiques ultra-transitionnels teintés ambre/brun',
      'Plaquettes de nez en silicone chirurgical doux ajustables',
      'Ajustement ergonomique au millimètre près',
      'Filtration anti-éblouissement spécifique phares de voiture la nuit'
    ],
    usage: ['office', 'driving', 'outdoor'],
    frame_material: 'Titane Flexible Or Rose',
    frame_shape: 'Ronde Fine',
    gender: 'femme',
    rating: 4.9
  },
  {
    id: 'optibloc-prism',
    name: 'OptiBloc Prism Clear (Verre Gaming)',
    category: 'blue_light',
    type_label: 'Anti-Lumière Bleue Gaming & Études',
    price: 6000,
    image: '/src/assets/images/lunettes_clear_1780426212157.png', // Fallback link
    description: 'Conçue pour l\'endurance numérique, la gamme Prism associe les bienfaits antifatigue à une monture translucide fumée. Outil absolu pour préserver votre capital visuel lors de sessions tardives.',
    features: [
      'Contraste d\'écran accru grâce au traitement de neutralisation spectrale',
      'Branches souples compatibles avec le port d\'un casque audio',
      'Protection UV380 contre la réverbération périphérique',
      'Livrée avec son étui de protection rigide pro'
    ],
    usage: ['gaming', 'reading'],
    frame_material: 'Polycarbonate Translucide Noir Fumé',
    frame_shape: 'Pantos Classique',
    gender: 'unisex',
    rating: 4.5
  }
];

export const adviceArticles: AdviceArticle[] = [
  {
    id: 'sleep-blue-light',
    category: 'Sommeil & Écrans',
    title: 'Comment la lumière bleue détruit notre cycle de sommeil',
    summary: 'Découvrez l\'explication biologique de la perturbation de l\'endormissement par les écrans et apprenez des gestes simples pour vous protéger.',
    content: `La lumière bleue émise par les smartphones, tablettes et ordinateurs mime la lumière du jour. Lorsque vos yeux y sont exposés tard le soir, votre cerveau émet un faux signal d'éveil d'urgence.\n\n### La suppression de la mélatonine\nLa mélatonine est l'hormone naturelle de l'endormissement. Des études cliniques montrent que l'exposition à la lumière bleue deux heures avant le coucher bloque la sécrétion de mélatonine de près de 85%. Résultat : insomnies, réveils nocturnes et fatigue chronique au réveil.\n\n### Nos conseils OptiBloc :\n1. **La règle d'or** : Évitez les écrans au moins 1 heure avant de dormir.\n2. **Équipez-vous** : Si vous devez travailler tard, portez impérativement vos lunettes OptiBloc anti-lumière bleue.\n3. **Activez les filtres logiciels** : Utilisez les modes "Night Shift" ou "Éclairage Nocturne" en complément de vos verres protecteurs pour un confort visuel absolu.`,
    readTime: '3 min de lecture',
    tags: ['Sommeil', 'Mélatonine', 'Visual Health']
  },
  {
    id: 'photochromic-magic',
    category: 'Technologie des Verres',
    title: 'Verres Photochromiques : Pourquoi devriez-vous les choisir ?',
    summary: 'Une seule paire pour l\'intérieur et l\'extérieur. Décryptage d\'une technologie révolutionnaire d\'adaptation lumineuse autonome.',
    content: `Avez-vous déjà rêvé de lunettes de vue capables de se transformer instantanément en lunettes de soleil au moindre rayon de lumière ? C'est précisément l'exploit technologique accompli par la gamme photochromique d'OptiBloc.\n\n### Comment fonctionne cette transition ?\nLes verres photochromiques contiennent des millions de molécules photo-sensibles (généralement du chlorure d'argent ou d'halogénures). Exposées aux rayons ultraviolets (UV) de la lumière naturelle, ces molécules subissent une réaction chimique réversible qui modifie leur structure tridimensionnelle, provoquant l'assombrissement rapide du verre.\n\n### Pourquoi les adopter ?\n- **Gain de confort absolu** : Finies les transitions incessantes entre votre paire médicale/écrans et votre paire de soleil.\n- **Protection 2-en-1** : Filtrage de la lumière bleue nocive de nos écrans en intérieur (verres clairs) ET barrière anti-éblouissement sous le soleil (teinte foncée grise ou brune).\n- **Filtre UV intégral** : Protection à 100% contre les rayons dangereux UVA et UVB qui accélèrent le vieillissement de la cornée.`,
    readTime: '4 min de lecture',
    tags: ['Photochromique', 'Innovation', 'UV400']
  },
  {
    id: 'rule-20-20-20',
    category: 'Prévention Quotidienne',
    title: 'La règle 20-20-20 : Soulager la fatigue oculaire en 20 secondes',
    summary: 'Une méthode d\'ergonomie visuelle recommandée par les plus grands ophtalmologistes du monde pour les professionnels du numérique.',
    content: `Si vous passez plus de 4 heures par jour face à un écran, vous souffrez probablement du "Syndrome de Vision sur Écran" ( fatigue oculaire, maux de tête, vision floue temporaire).\n\n### La méthode simple du 20-20-20\nPour redonner de la souplesse à vos muscles ciliaires fatigués par la mise au point permanente à distance constante, appliquez cette routine :\n\n- **Toutes les 20 minutes** ;\n- **Faites une pause oculaire de 20 secondes** ;\n- **Et fixez un objet situé à une distance de 20 pieds** (environ 6 mètres).\n\n### Pourquoi cette routine fonctionne ?\nLa mise au point soutenue de près contracte continuellement les muscles de l'œil. Regarder au loin permet de relâcher complètement ces muscles, tandis que le clignement de paupière associé ré-humidifie la cornée à l'aide des glandes lacrymales. En combinant cette gymnastique naturelle avec le filtrage actif de vos lunettes OptiBloc, vous éliminez durablement les céphalées et les sensations de brûlure oculaire.`,
    readTime: '2 min de lecture',
    tags: ['Ergonomie', 'Bien-être', 'Conseils']
  }
];

export const advisorQuestions: AdvisorQuestion[] = [
  {
    id: 'screen_time',
    text: 'Quel est votre temps quotidien moyen d\'exposition aux écrans ?',
    options: [
      { value: 'low', label: 'Moins de 3 heures', description: 'Consultation rapide, réseaux sociaux, TV occasionnelle', icon: 'Smartphone' },
      { value: 'medium', label: 'Entre 3h et 7h', description: 'Études, créations, travail de bureau régulier', icon: 'Laptop' },
      { value: 'high', label: 'Plus de 7 heures', description: 'Développeur, gamer, télétravailleur intensif', icon: 'MonitorCheck' }
    ]
  },
  {
    id: 'symptoms',
    text: 'Quel symptôme visuel ressentez-vous le plus fréquemment ?',
    options: [
      { value: 'dryness', label: 'Yeux secs ou irrités', description: 'Sensation de sable dans les yeux en fin de journée', icon: 'EyeOff' },
      { value: 'headache', label: 'Maux de tête réguliers', description: 'Tension aux tempes ou derrière les yeux', icon: 'Activity' },
      { value: 'glare', label: 'Éblouissement extérieur', description: 'Sensibilité au soleil ou phares de voiture nocturnes', icon: 'Sun' },
      { value: 'none', label: 'Aucun (Prévention)', description: 'Vous souhaitez préserver la santé de vos yeux proactivement', icon: 'ShieldAlert' }
    ]
  },
  {
    id: 'environment',
    text: 'Quel est votre environnement d\'activité principal ?',
    options: [
      { value: 'indoor', label: 'Exclusivement en intérieur', description: 'Bureau climatisé, chambre, sessions nocturnes', icon: 'Home' },
      { value: 'hybrid', label: 'Intérieur et Extérieur fréquent', description: 'Réunions, déplacements fréquents, terrasse café', icon: 'Sparkles' },
      { value: 'driving', label: 'Conduite de jour comme de nuit', description: 'Sensibilité aux reflets de route et phares luminescents', icon: 'Car' }
    ]
  },
  {
    id: 'aesthetic',
    text: 'Quel style esthétique préférez-vous afficher ?',
    options: [
      { value: 'classic', label: 'Professionnel & Classique', description: 'Des teintes sombres, sobres et intemporelles', icon: 'Briefcase' },
      { value: 'chic', label: 'Élégant, Chic & Féminin', description: 'Chambre dorée, notes de prestige légères', icon: 'Heart' },
      { value: 'trendy', label: 'Moderne, Transparent & Funky', description: 'Styles transparents, minimalisme futuriste branché', icon: 'Zap' }
    ]
  }
];

export function getSmartRecommendation(answers: Record<string, string>): Product {
  // If user prefers chic/feminine style: Aura
  if (answers['aesthetic'] === 'chic') {
    const p = products.find(x => x.id === 'optibloc-aura');
    if (p) return p;
  }

  // If user needs high hybrid use or exterior exposure + driving: Chronos
  if (answers['environment'] === 'hybrid' || answers['environment'] === 'driving' || answers['symptoms'] === 'glare') {
    // Return Chronos or Titan Pro
    const pId = answers['aesthetic'] === 'chic' ? 'optibloc-titan' : 'optibloc-chronos';
    const opt = products.find(x => x.id === pId);
    if (opt) return opt;
    return products[1]; // default Chronos
  }

  // If gaming or trendy style
  if (answers['aesthetic'] === 'trendy') {
    const p = products.find(x => x.id === 'optibloc-horizon');
    if (p) return p;
  }

  // For high screen times and office/classic preferences
  if (answers['aesthetic'] === 'classic' || answers['screen_time'] === 'high') {
    const p = products.find(x => x.id === 'optibloc-executive');
    if (p) return p;
  }

  // Fallback to Horizon or Chronos
  return products[3]; // Horizon
}
