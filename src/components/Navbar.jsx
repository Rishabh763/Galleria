import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='full-width bg-red-50 border-b-2 border-black'>
        <div className='py-4 md:py-8'>
            <h1 className='text-2xl md:text-5xl font-bold'><Link to='/'>Galleria</Link></h1>
        </div>
    </div>
  )
}

export default Navbar

// [
//     {
//       "id": 1,
//       "imageUrl": "https://example.com/ancient_image1.jpg",
//       "title": "Roman Forum",
//       "description": "A timeless view of the Roman Forum, showcasing the ruins of what was once the bustling center of Roman public life. Stone columns and ancient temples stand as reminders of the powerful Roman Empire, surrounded by a landscape that has witnessed millennia of history.",
//       "photographer": "Unknown",
//       "authorImg": "https://example.com/author_ancient1.jpg",
//       "dateAdded": "1901",
//       "source": "https://en.wikipedia.org/wiki/Roman_Forum"
//     },
//     {
//       "id": 2,
//       "imageUrl": "https://example.com/ancient_image2.jpg",
//       "title": "Egyptian Sphinx and Pyramids",
//       "description": "An iconic image capturing the Sphinx with the Great Pyramid of Giza in the background. This view transports the observer back to ancient Egypt, a civilization known for its architectural feats and mysteries that have fascinated humanity for centuries.",
//       "photographer": "John Beasley Greene",
//       "authorImg": "https://example.com/author_ancient2.jpg",
//       "dateAdded": "1854",
//       "source": "https://en.wikipedia.org/wiki/Great_Sphinx_of_Giza"
//     },
//     {
//       "id": 3,
//       "imageUrl": "https://example.com/ancient_image3.jpg",
//       "title": "Acropolis of Athens",
//       "description": "The Acropolis of Athens, a symbol of the achievements of ancient Greek civilization, with its towering columns and intricate sculptures. This site is the birthplace of democracy and philosophy, making it a cornerstone of Western culture.",
//       "photographer": "Felix Bonfils",
//       "authorImg": "https://example.com/author_ancient3.jpg",
//       "dateAdded": "1867",
//       "source": "https://en.wikipedia.org/wiki/Acropolis_of_Athens"
//     },
//     {
//       "id": 4,
//       "imageUrl": "https://example.com/ancient_image4.jpg",
//       "title": "Machu Picchu Ruins",
//       "description": "A breathtaking view of Machu Picchu, the Inca citadel that sits high in the Andes Mountains. The stone terraces and structures demonstrate the ingenuity of the Inca civilization, blending perfectly with the rugged mountainous landscape.",
//       "photographer": "Hiram Bingham",
//       "authorImg": "https://example.com/author_ancient4.jpg",
//       "dateAdded": "1911",
//       "source": "https://en.wikipedia.org/wiki/Machu_Picchu"
//     },
//     {
//       "id": 5,
//       "imageUrl": "https://example.com/ancient_image5.jpg",
//       "title": "Angkor Wat Temple",
//       "description": "The Angkor Wat Temple in Cambodia, an ancient wonder known for its extensive bas-relief sculptures and massive stone structures. This Hindu-Buddhist temple complex remains one of the largest religious monuments in the world.",
//       "photographer": "Emile Gsell",
//       "authorImg": "https://example.com/author_ancient5.jpg",
//       "dateAdded": "1866",
//       "source": "https://en.wikipedia.org/wiki/Angkor_Wat"
//     },
//     {
//       "id": 6,
//       "imageUrl": "https://example.com/ancient_image6.jpg",
//       "title": "Petra, Jordan",
//       "description": "The rock-carved city of Petra, known as the 'Rose City' due to the pink hue of its stone. Once a thriving center of trade, Petra is now one of the world’s most famous archaeological sites, marveling visitors with its intricate facades and tombs.",
//       "photographer": "David Roberts",
//       "authorImg": "https://example.com/author_ancient6.jpg",
//       "dateAdded": "1839",
//       "source": "https://en.wikipedia.org/wiki/Petra"
//     },
//     {
//       "id": 7,
//       "imageUrl": "https://example.com/ancient_image7.jpg",
//       "title": "Stonehenge",
//       "description": "An ancient monument in England, Stonehenge consists of massive stone slabs arranged in a circular pattern. Its purpose remains a mystery, though it is believed to have been a place of worship or an astronomical observatory.",
//       "photographer": "Henry Taunt",
//       "authorImg": "https://example.com/author_ancient7.jpg",
//       "dateAdded": "1875",
//       "source": "https://en.wikipedia.org/wiki/Stonehenge"
//     },
//     {
//       "id": 8,
//       "imageUrl": "https://example.com/ancient_image8.jpg",
//       "title": "Terracotta Army",
//       "description": "The Terracotta Army, a collection of life-sized sculptures depicting the armies of the first Emperor of China, Qin Shi Huang. Each figure is unique, representing a remarkable feat of craftsmanship from over two thousand years ago.",
//       "photographer": "Liang Ssu-ch'eng",
//       "authorImg": "https://example.com/author_ancient8.jpg",
//       "dateAdded": "1930",
//       "source": "https://en.wikipedia.org/wiki/Terracotta_Army"
//     },
//     {
//       "id": 9,
//       "imageUrl": "https://example.com/ancient_image9.jpg",
//       "title": "Alhambra Palace",
//       "description": "The Alhambra in Granada, Spain, is a stunning example of Islamic architecture. Its intricate tile work, fountains, and arches demonstrate the artistry and sophistication of the Nasrid dynasty.",
//       "photographer": "Jean Laurent",
//       "authorImg": "https://example.com/author_ancient9.jpg",
//       "dateAdded": "1870",
//       "source": "https://en.wikipedia.org/wiki/Alhambra"
//     },
//     {
//       "id": 10,
//       "imageUrl": "https://example.com/ancient_image10.jpg",
//       "title": "Hagia Sophia",
//       "description": "Originally a Byzantine cathedral, later an Ottoman mosque, and now a museum, the Hagia Sophia in Istanbul stands as a symbol of both religious and architectural evolution. Its vast dome and intricate mosaics make it a marvel of engineering and art.",
//       "photographer": "Sebah & Joaillier",
//       "authorImg": "https://example.com/author_ancient10.jpg",
//       "dateAdded": "1890",
//       "source": "https://en.wikipedia.org/wiki/Hagia_Sophia"
//     },
//     {
//       "id": 11,
//       "imageUrl": "https://example.com/ancient_image11.jpg",
//       "title": "Forbidden City",
//       "description": "The Forbidden City in Beijing, once the imperial palace of China, is a sprawling complex filled with ancient palaces, gardens, and courtyards. Its architecture and design reflect the power and culture of the Ming and Qing dynasties.",
//       "photographer": "John Thomson",
//       "authorImg": "https://example.com/author_ancient11.jpg",
//       "dateAdded": "1871",
//       "source": "https://en.wikipedia.org/wiki/Forbidden_City"
//     },
//     {
//       "id": 12,
//       "imageUrl": "https://example.com/ancient_image12.jpg",
//       "title": "Great Wall of China",
//       "description": "A section of the Great Wall winding across the mountains of northern China. Built over centuries to protect against invasions, the Wall is a symbol of Chinese strength and ingenuity.",
//       "photographer": "William Saunders",
//       "authorImg": "https://example.com/author_ancient12.jpg",
//       "dateAdded": "1870",
//       "source": "https://en.wikipedia.org/wiki/Great_Wall_of_China"
//     },
//     {
//       "id": 13,
//       "imageUrl": "https://example.com/ancient_image13.jpg",
//       "title": "Colosseum in Rome",
//       "description": "The Colosseum, an ancient Roman amphitheater, is known for its iconic arches and gladiatorial history. It remains one of the greatest examples of Roman engineering and architecture.",
//       "photographer": "Giorgio Sommer",
//       "authorImg": "https://example.com/author_ancient13.jpg",
//       "dateAdded": "1872",
//       "source": "https://en.wikipedia.org/wiki/Colosseum"
//     },
//     {
//       "id": 14,
//       "imageUrl": "https://example.com/ancient_image14.jpg",
//       "title": "Chichen Itza",
//       "description": "Chichen Itza, a major city of the Maya civilization, features the iconic pyramid known as El Castillo. This complex is an archaeological treasure, filled with structures that reflect advanced Mayan knowledge of astronomy and architecture.",
//       "photographer": "Teobert Maler",
//       "authorImg": "https://example.com/author_ancient14.jpg",
//       "dateAdded": "1890",
//       "source": "https://en.wikipedia.org/wiki/Chichen_Itza"
//     },
//     {
//       "id": 15,
//       "imageUrl": "https://example.com/ancient_image15.jpg",
//       "title": "Bamiyan Buddhas",
//       "description": "These massive Buddha statues, carved into the cliffs of Bamiyan in Afghanistan, were an important symbol of the region's Buddhist past before their destruction. The empty niches remain a powerful testament to the lost heritage of the area.",
//       "photographer": "Joseph Hackin",
//       "authorImg": "https://example.com/author_ancient15.jpg",
//       "dateAdded": "1937",
//       "source": "https://en.wikipedia.org/wiki/Buddhas_of_Bamiyan"
//     },
//     {
//       "id": 16,
//       "imageUrl": "https://example.com/ancient_image16.jpg",
//       "title": "Easter Island Moai",
//       "description": "The Moai statues of Easter Island, created by the Rapa Nui people, are giant stone figures that have sparked curiosity and wonder around the world. Their purpose and the means by which they were transported remain topics of scholarly interest.",
//       "photographer": "Katherine Routledge",
//       "authorImg": "https://example.com/author_ancient16.jpg",
//       "dateAdded": "1914",
//       "source": "https://en.wikipedia.org/wiki/Moai"
//     },
//     {
//       "id": 17,
//       "imageUrl": "https://example.com/ancient_image17.jpg",
//       "title": "Temple of Karnak",
//       "description": "The Temple of Karnak in Egypt, an ancient complex dedicated to the gods of Thebes, features massive columns and intricate hieroglyphics. It is one of the largest and most impressive temple sites ever constructed.",
//       "photographer": "Maxime Du Camp",
//       "authorImg": "https://example.com/author_ancient17.jpg",
//       "dateAdded": "1850",
//       "source": "https://en.wikipedia.org/wiki/Karnak"
//     },
//     {
//       "id": 18,
//       "imageUrl": "https://example.com/ancient_image18.jpg",
//       "title": "Babylon's Ishtar Gate",
//       "description": "The Ishtar Gate of Babylon, a stunning structure adorned with lions and dragons, symbolizing the might of ancient Babylon. It remains an iconic example of Mesopotamian art and architecture.",
//       "photographer": "Robert Koldewey",
//       "authorImg": "https://example.com/author_ancient18.jpg",
//       "dateAdded": "1899",
//       "source": "https://en.wikipedia.org/wiki/Ishtar_Gate"
//     },
//     {
//       "id": 19,
//       "imageUrl": "https://example.com/ancient_image19.jpg",
//       "title": "Notre Dame Cathedral",
//       "description": "Notre Dame Cathedral in Paris, a masterpiece of Gothic architecture. Its detailed facade, towering spires, and stunning rose windows are hallmarks of the medieval era and a testament to architectural genius.",
//       "photographer": "Édouard Baldus",
//       "authorImg": "https://example.com/author_ancient19.jpg",
//       "dateAdded": "1851",
//       "source": "https://en.wikipedia.org/wiki/Notre-Dame_de_Paris"
//     },
//     {
//       "id": 20,
//       "imageUrl": "https://example.com/ancient_image20.jpg",
//       "title": "St. Basil's Cathedral",
//       "description": "St. Basil’s Cathedral in Moscow, Russia, with its vibrant onion domes and intricate patterns, is a symbol of Russian culture. It was built by Ivan the Terrible and remains one of the most visually unique buildings in the world.",
//       "photographer": "Sergey Prokudin-Gorsky",
//       "authorImg": "https://example.com/author_ancient20.jpg",
//       "dateAdded": "1909",
//       "source": "https://en.wikipedia.org/wiki/Saint_Basil%27s_Cathedral"
//     }
//   ]
  