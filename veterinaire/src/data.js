export const dummyMessages = [
    {
      id: '1',
      role: 'system',
      content: 'You are a medical AI assistant helping with patient care and medical queries.'
    },
    {
      id: '2',
      role: 'assistant',
      content: 'Bonjour! Je suis votre assistant médical IA. Comment puis-je vous aider aujourd\'hui?'
    }
  ];
  
  export const dummySuggestedQuestions = [
    "Quelles sont les dernières recommandations de vermifugations chez le poulain?",
    "Quelles mesures préventives mettre en place dans un élevage atteint de rhodococcose?",
    "Comment bien gérer les conditions environnementales pour limiter les problèmes respiratoires dans cette écurie?"
  ];
  
  export const dummyResources = [
    { title: "Guide des coliques équines", type: "PDF" },
    { title: "Protocole de vaccination pour chevaux", type: "PDF" },
    { title: "Gestion du stress chez les chevaux de compétition", type: "Article" }
  ];
  


  export const allPatients = [
    {
      id: 1,
      name: "Éclair",
      species: "Cheval",
      weight: 520,
      lastVisit: "2023-09-15",
      lastConsultation: "2024-01-10",
      motif: "Vaccination annuelle",
      status: "Terminé",
      Priorité: "Basse",
      responsibleVet: "Dr. Dubois",
      owner: {
        name: "Jean Martin",
        email: "jean.martin@gmail.com",
        phone: "0612345678",
        address: {
          street: "15 Rue de la Paix",
          city: "Paris",
          postalCode: "75001",
          country: "France",
        },
        stableAddress: {
          street: "3 Chemin des Écuries",
          city: "Melun",
          postalCode: "77000",
          country: "France",
        },
      },
    },
    {
      id: 2,
      name: "Tonnerre",
      species: "Cheval",
      weight: 610,
      lastVisit: "2023-11-22",
      lastConsultation: "2024-02-05",
      motif: "Boiterie",
      status: "En attente",
      Priorité: "Moyenne",
      responsibleVet: "Dr. Leroy",
      owner: {
        name: "Marie Durand",
        email: "marie.durand@yahoo.fr",
        phone: "0723456789",
        address: {
          street: "27 Avenue des Champs-Élysées",
          city: "Paris",
          postalCode: "75008",
          country: "France",
        },
        stableAddress: {
          street: "10 Route des Haras",
          city: "Chantilly",
          postalCode: "60500",
          country: "France",
        },
      },
    },
    {
      id: 3,
      name: "Étoile",
      species: "Cheval",
      weight: 480,
      lastVisit: "2023-12-03",
      lastConsultation: "2024-03-15",
      motif: "Examen dentaire",
      status: "En cours",
      Priorité: "Basse",
      responsibleVet: "Dr. Bernard",
      owner: {
        name: "Sophie Petit",
        email: "sophie.petit@orange.fr",
        phone: "0634567890",
        address: {
          street: "8 Boulevard Saint-Michel",
          city: "Paris",
          postalCode: "75005",
          country: "France",
        },
        stableAddress: {
          street: "5 Allée des Pommiers",
          city: "Noisy-le-Roi",
          postalCode: "78590",
          country: "France",
        },
      },
    },
    {
      id: 4,
      name: "Orage",
      species: "Cheval",
      weight: 550,
      lastVisit: "2024-01-07",
      lastConsultation: "2024-04-20",
      motif: "Coliques",
      status: "Terminé",
      Priorité: "Urgence",
      responsibleVet: "Dr. Thomas",
      owner: {
        name: "Pierre Moreau",
        email: "pierre.moreau@free.fr",
        phone: "0745678901",
        address: {
          street: "42 Rue du Faubourg Saint-Honoré",
          city: "Paris",
          postalCode: "75008",
          country: "France",
        },
        stableAddress: {
          street: "18 Chemin du Grand Parc",
          city: "Fontainebleau",
          postalCode: "77300",
          country: "France",
        },
      },
    },
    {
      id: 5,
      name: "Tempête",
      species: "Cheval",
      weight: 590,
      lastVisit: "2024-02-18",
      lastConsultation: "2024-05-30",
      motif: "Vaccination",
      status: "En attente",
      Priorité: "Basse",
      responsibleVet: "Dr. Richard",
      owner: {
        name: "Catherine Robert",
        email: "catherine.robert@gmail.com",
        phone: "0656789012",
        address: {
          street: "3 Place de la Concorde",
          city: "Paris",
          postalCode: "75001",
          country: "France",
        },
        stableAddress: {
          street: "7 Route des Écuries",
          city: "Dourdan",
          postalCode: "91410",
          country: "France",
        },
      },
    },
    {
      id: 6,
      name: "Foudre",
      species: "Cheval",
      weight: 570,
      lastVisit: "2023-10-30",
      lastConsultation: "2024-06-12",
      motif: "Blessure",
      status: "En cours",
      Priorité: "Haute",
      responsibleVet: "Dr. Laurent",
      owner: {
        name: "Michel Garcia",
        email: "michel.garcia@outlook.fr",
        phone: "0767890123",
        address: {
          street: "55 Avenue Montaigne",
          city: "Paris",
          postalCode: "75008",
          country: "France",
        },
        stableAddress: {
          street: "22 Chemin des Prés",
          city: "Rambouillet",
          postalCode: "78120",
          country: "France",
        },
      },
    },
    {
      id: 7,
      name: "Nuage",
      species: "Cheval",
      weight: 530,
      lastVisit: "2023-12-25",
      lastConsultation: "2024-07-05",
      motif: "Contrôle de routine",
      status: "Terminé",
      Priorité: "Basse",
      responsibleVet: "Dr. Lefebvre",
      owner: {
        name: "Anne Simon",
        email: "anne.simon@free.fr",
        phone: "0678901234",
        address: {
          street: "12 Rue de la Pompe",
          city: "Paris",
          postalCode: "75116",
          country: "France",
        },
        stableAddress: {
          street: "9 Allée des Cavaliers",
          city: "Achères-la-Forêt",
          postalCode: "77760",
          country: "France",
        },
      },
    },
    {
      id: 8,
      name: "Vent",
      species: "Cheval",
      weight: 600,
      lastVisit: "2024-01-15",
      lastConsultation: "2024-08-18",
      motif: "Problème respiratoire",
      status: "En attente",
      Priorité: "Moyenne",
      responsibleVet: "Dr. Michel",
      owner: {
        name: "François David",
        email: "francois.david@orange.fr",
        phone: "0789012345",
        address: {
          street: "31 Boulevard Haussmann",
          city: "Paris",
          postalCode: "75009",
          country: "France",
        },
        stableAddress: {
          street: "14 Route du Haras",
          city: "Chantilly",
          postalCode: "60631",
          country: "France",
        },
      },
    },
    {
      id: 9,
      name: "Brume",
      species: "Cheval",
      weight: 510,
      lastVisit: "2023-11-08",
      lastConsultation: "2024-09-22",
      motif: "Vermifugation",
      status: "Terminé",
      Priorité: "Basse",
      responsibleVet: "Dr. Vincent",
      owner: {
        name: "Isabelle Roux",
        email: "isabelle.roux@gmail.com",
        phone: "0690123456",
        address: {
          street: "6 Rue de Vaugirard",
          city: "Paris",
          postalCode: "75006",
          country: "France",
        },
        stableAddress: {
          street: "25 Chemin des Étangs",
          city: "Saint-Cyr-sous-Dourdan",
          postalCode: "91410",
          country: "France",
        },
      },
    },
    {
      id: 10,
      name: "Rosée",
      species: "Cheval",
      weight: 540,
      lastVisit: "2024-02-28",
      lastConsultation: "2024-10-15",
      motif: "Échographie",
      status: "En cours",
      Priorité: "Moyenne",
      responsibleVet: "Dr. Fournier",
      owner: {
        name: "Nathalie Bertrand",
        email: "nathalie.bertrand@yahoo.fr",
        phone: "0701234567",
        address: {
          street: "19 Avenue Victor Hugo",
          city: "Paris",
          postalCode: "75016",
          country: "France",
        },
        stableAddress: {
          street: "11 Allée des Paddocks",
          city: "Rochefort-en-Yvelines",
          postalCode: "78730",
          country: "France",
        },
      },
    },
  ]
  
  