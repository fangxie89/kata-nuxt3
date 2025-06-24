export default defineEventHandler(async (event) => {
  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  return [
    {
      id: 1,
      title: 'Corsair becomes the latest airline to pilot ICC AOKpass',
      link: '#',
    },
    {
      id: 2,
      title: 'ICC warns EU vaccine export controls must be rolled back without delay',
      link: '#',
    },
    {
      id: 3,
      title: 'Eduardo Silva Romero talks of advancing diversity, scope of ICC Institute as new Chair',
      link: '#',
    },
    {
      id: 4,
      title: 'ICC/UNICEF: Funding shortfalls and supply chain challenges threaten equitable vaccine distribution',
      link: '#',
    },
    {
      id: 5,
      title: 'ICC Trading Thoughts with Karima-Catherine Goundiam, founder of B2beeMatch',
      link: '#',
    },
    {
      id: 6,
      title: 'Guest blog: Making arbitration work in a down market',
      link: '#',
    },
  ]
}) 