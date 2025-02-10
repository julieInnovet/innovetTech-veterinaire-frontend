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
  

const firstNames = ["Sophie", "Lucas", "Emma", "Hugo", "Chloé", "Louis", "Léa", "Gabriel", "Manon", "Jules"]
const lastNames = ["Martin", "Bernard", "Dubois", "Thomas", "Robert", "Richard", "Petit", "Durand", "Leroy", "Moreau"]

const generateRandomPhone = () => {
  return `0${Math.floor(Math.random() * 9) + 1}${Array(8)
    .fill(0)
    .map(() => Math.floor(Math.random() * 10))
    .join("")}`
}

const generateRandomEmail = (firstName, lastName) => {
  return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`
}

const generateRandomAddress = () => {
  const streetNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const streetNames = [
    "Rue de la Paix",
    "Avenue des Champs-Élysées",
    "Boulevard Saint-Michel",
    "Rue du Faubourg Saint-Honoré",
    "Place de la Concorde",
  ]
  const cities = ["Paris", "Lyon", "Marseille", "Bordeaux", "Lille", "Strasbourg", "Nantes", "Rennes"]

  return `${streetNumbers[Math.floor(Math.random() * streetNumbers.length)]} ${streetNames[Math.floor(Math.random() * streetNames.length)]}, ${cities[Math.floor(Math.random() * cities.length)]}`
}

const statuses = ["En attente", "Terminé", "Annulé"]
const priorities = ["Urgence", "Moyenne", "Basse"]
const motifs = ["Vaccination", "Checkup", "Opération", "Dentaire", "Kératose actinique"]

export const allPatients = Array(10)
  .fill(null)
  .map((_, i) => {
    const ownerFirstName = firstNames[i % firstNames.length]
    const ownerLastName = lastNames[i % lastNames.length]
    return {
      id: i + 1,
      name: `Étoile ${i + 1}`,
      species: "Cheval",
      weight: Math.floor(Math.random() * (700 - 300 + 1) + 300),
      lastVisit: "2024-09-15",
      lastConsultation: `2024-${String((i % 12) + 1).padStart(2, "0")}-${String((i % 28) + 1).padStart(2, "0")}`,
      motif: motifs[Math.floor(Math.random() * motifs.length)],
      status: statuses[Math.floor(Math.random() * statuses.length)],
      Priorité: priorities[Math.floor(Math.random() * priorities.length)],
      responsibleVet: `Dr. ${["Smith", "Johnson", "Williams", "Brown", "Jones"][i % 5]}`,
      owner: {
        name: `${ownerFirstName} ${ownerLastName}`,
        email: generateRandomEmail(ownerFirstName, ownerLastName),
        phone: generateRandomPhone(),
        address: generateRandomAddress(),
        stableAddress: generateRandomAddress(),
      },
    }
  })


