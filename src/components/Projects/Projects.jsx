import React from "react";

const cardsData = [
  {
    id: 1,
    title: "Pinochueco",
    imageUrl: "https://example.com/image1.jpg",
    url: "https://example.com/link1",
  },
  {
    id: 2,
    title: "Mazamitla Sierra Tours web",
    imageUrl: "https://example.com/image2.jpg",
    url: "https://example.com/link2",
  },
  {
    id: 3,
    title: "Mazamitla Sierra intranet",
    imageUrl: "https://example.com/image2.jpg",
    url: "https://example.com/link2",
  },
  {
    id: 4,
    title: "sheva Ecommerce",
    imageUrl: "https://example.com/image2.jpg",
    url: "https://example.com/link2",
  },
  {
    id: 5,
    title: "Geo- CX",
    imageUrl: "https://example.com/image2.jpg",
    url: "https://example.com/link2",
  },
  {
    id: 6,
    title: "EOPS",
    imageUrl: "https://example.com/image2.jpg",
    url: "https://example.com/link2",
  },
  {
    id: 7,
    title: "Github 1",
    imageUrl: "https://example.com/image2.jpg",
    url: "https://example.com/link2",
  },
  {
    id: 8,
    title: "Github 2",
    imageUrl: "https://example.com/image2.jpg",
    url: "https://example.com/link2",
  },
  {
    id: 9,
    title: "Github 3",
    imageUrl: "https://example.com/image2.jpg",
    url: "https://example.com/link2",
  },
  {
    id: 10,
    title: "Github 4",
    imageUrl: "https://example.com/image2.jpg",
    url: "https://example.com/link2",
  },
  {
    id: 11,
    title: "Github 5",
    imageUrl: "https://example.com/image2.jpg",
    url: "https://example.com/link2",
  },
  {
    id: 12,
    title: "Github 6",
    imageUrl: "https://example.com/image2.jpg",
    url: "https://example.com/link2",
  },
  {
    id: 13,
    title: "Github 7",
    imageUrl: "https://example.com/image2.jpg",
    url: "https://example.com/link2",
  },
  {
    id: 14,
    title: "Github 8",
    imageUrl: "https://example.com/image2.jpg",
    url: "https://example.com/link2",
  },
  {
    id: 15,
    title: "Github 9",
    imageUrl: "https://example.com/image2.jpg",
    url: "https://example.com/link2",
  },
  {
    id: 16,
    title: "Github 10",
    imageUrl: "https://example.com/image2.jpg",
    url: "https://example.com/link2",
  },
  {
    id: 17,
    title: "Github 11",
    imageUrl: "https://example.com/image2.jpg",
    url: "https://example.com/link2",
  },
  {
    id: 18,
    title: "Github 12",
    imageUrl: "https://example.com/image2.jpg",
    url: "https://example.com/link2",
  },
  {
    id: 19,
    title: "Github 13",
    imageUrl: "https://example.com/image2.jpg",
    url: "https://example.com/link2",
  },
  {
    id: 20,
    title: "Github 14",
    imageUrl: "https://example.com/image2.jpg",
    url: "https://example.com/link2",
  },
  {
    id: 21,
    title: "Github 15",
    imageUrl: "https://example.com/image2.jpg",
    url: "https://example.com/link2",
  },
  {
    id: 22,
    title: "Github 16",
    imageUrl: "https://example.com/image2.jpg",
    url: "https://example.com/link2",
  },
  {
    id: 23,
    title: "Github 17",
    imageUrl: "https://example.com/image2.jpg",
    url: "https://example.com/link2",
  },
  {
    id: 24,
    title: "Github 18",
    imageUrl: "https://example.com/image2.jpg",
    url: "https://example.com/link2",
  },
  {
    id: 25,
    title: "Github 19",
    imageUrl: "https://example.com/image2.jpg",
    url: "https://example.com/link2",
  },
  {
    id: 26,
    title: "Github 20",
    imageUrl: "https://example.com/image2.jpg",
    url: "https://example.com/link2",
  },
  {
    id: 27,
    title: "Github 21",
    imageUrl: "https://example.com/image2.jpg",
    url: "https://example.com/link2",
  },
  {
    id: 28,
    title: "Github 22",
    imageUrl: "https://example.com/image2.jpg",
    url: "https://example.com/link2",
  },
  {
    id: 29,
    title: "Github 23",
    imageUrl: "https://example.com/image2.jpg",
    url: "https://example.com/link2",
  },
  {
    id: 30,
    title: "Github 24",
    imageUrl: "https://example.com/image2.jpg",
    url: "https://example.com/link2",
  },
];

const Card = ({ title, imageUrl, url }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>

        <p className="text-gray-700 text-base">
          {/* Aquí puedes agregar una descripción breve */}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a
          href={url}
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver más
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {cardsData.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export default Projects;
