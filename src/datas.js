import back from "./images/back-min.jpg";
import hotel1cover from "./images/hotel1/cover-min.jpg";
import hotel2cover from "./images/hotel2/cover.jpg";
import hotel3cover from "./images/hotel3/cover.jpg";
import hotel3room from "./images/hotel3/room.jpg";
import hotel2room from "./images/hotel2/room.jpg";
import hotel1room from "./images/hotel1/room.jpg";
import room from "./images/oda.jpg";

const datas = [
  {
    id: 1,
    city: "izmir",
    hotels: [
      {
        id: 1,
        name: "Otel İsmi",
        desc: "Alsancak",
        description:
          "Like every collection owner, Lara Barut Collection develops its unique assembly with happiness, a richness of choices and creative touches. Lara Barut Collection welcomes its guests with an original, stylish and brand new holiday concept.",
        price: 25,
        star: 4.4,
        cover: back,
        room: room,
        photos: [
          {
            id: 1,
            url: "url",
          },
          {
            id: 2,
            url: "url",
          },
          {
            id: 3,
            url: "url",
          },
        ],
      },
      {
        id: 2,
        name: "Lara Barut Collection",
        desc: "Muratpaşa",
        description:
          "Otellerle ilgili uzun açıklama burada olabilir. Konumu, merkeze uzaklığı vs. Uzun dediysek destan yazmaya gerek yok. Bu kadar yeterli.",
        price: 25,
        star: "5.0",
        cover: hotel1cover,
        room: hotel1room,
        photos: [
          {
            id: 1,
            url: "url",
          },
          {
            id: 2,
            url: "url",
          },
          {
            id: 3,
            url: "url",
          },
        ],
      },
      {
        id: 3,
        name: "Museum Hotel",
        desc: "Kapadokya",
        description:
          "Kapadokya’nın büyülü atmosferinde kendinize muhteşem bir tatil hediye etmek isterseniz Museum Hotel’de soluğu alabilirsiniz. ",
        price: 55,
        star: "4.7",
        cover: hotel2cover,
        room: hotel2room,
        photos: [
          {
            id: 1,
            url: "url",
          },
          {
            id: 2,
            url: "url",
          },
          {
            id: 3,
            url: "url",
          },
        ],
      },
      {
        id: 4,
        name: "Mandarin Oriental",
        desc: "Bodrum",
        description:
          "Akdeniz çanağının en lüks resort’u Mandarin Oriental, Bodrum dünyanın en prestijli turizm ve gezi ödülleri World Travel Awards™’ta (WTA) üçüncü kez ödüle layık görüldü.",
        price: 85,
        star: "4.9",
        cover: hotel3cover,
        room: hotel3room,
        photos: [
          {
            id: 1,
            url: "url",
          },
          {
            id: 2,
            url: "url",
          },
          {
            id: 3,
            url: "url",
          },
        ],
      },
    ],
  },
];

export default datas;
