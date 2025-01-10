import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ArticleCardComponent } from "../article-card/article-card.component";
import { Album } from '../../interfaces/album';

const albums: Album[] = [
  {
    id: "1",
    name: "OK Computer",
    artist: "Radiohead",
    price: 29.99,
    cover: "https://upload.wikimedia.org/wikipedia/en/b/ba/Radioheadokcomputer.png",
    genre: "Alternative Rock",
    rating: 4.9,
    about: "El tercer álbum de Radiohead, considerado uno de los mejores discos de rock alternativo, combina letras introspectivas con una producción innovadora."
  },
  {
    id: "2",
    name: "Nevermind",
    artist: "Nirvana",
    price: 24.99,
    cover: "https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg",
    genre: "Alternative Rock",
    rating: 4.8,
    about: "El álbum que definió el grunge y catapultó a Nirvana a la fama global con éxitos como 'Smells Like Teen Spirit'."
  },
  {
    id: "3",
    name: "In Utero",
    artist: "Nirvana",
    price: 23.99,
    cover: "https://cdn.musicboard.app/musicboard/media/ObzRpnPE6ybJcKa5ZxiUuRRniUgSZuSuElqpOo3rh3N7SXNl44x4CAO0FrIX2yww.webp",
    genre: "Alternative Rock",
    rating: 4.7,
    about: "El tercer álbum de estudio de Nirvana, más crudo e introspectivo que su predecesor 'Nevermind'."
  },
  {
    id: "4",
    name: "Is This It",
    artist: "The Strokes",
    price: 19.99,
    cover: "https://rhythmverse.co/assets/album_art/dee97/6e02247730d745acb6ef8ad0fb94c154.png",
    genre: "Alternative Rock",
    rating: 4.8,
    about: "Álbum debut de The Strokes que revitalizó el garage rock con un sonido fresco y melódico."
  },
  {
    id: "5",
    name: "Doolittle",
    artist: "Pixies",
    price: 22.99,
    cover: "https://cdn.musicboard.app/musicboard/media/iPTVVXr0Tinnlmxx8qELxoNaH3RxzqIwQcEbiS9pKIp26HA5JBff3vU5xv15F1BA.webp",
    genre: "Alternative Rock",
    rating: 4.9,
    about: "Un disco esencial que influyó en el desarrollo del grunge y el rock alternativo de los 90."
  },
  {
    id: "6",
    name: "Melodrama",
    artist: "Lorde",
    price: 21.99,
    cover: "https://cdn.musicboard.app/musicboard/media/BFd4tWy8v1T9s1jFwRYzFUdKN5q33mbzgSSBS34mLFmW5s8yTfx9tlV4PcxXZl1c.webp",
    genre: "Alternative Rock",
    rating: 4.7,
    about: "Un disco cargado de emociones y texturas sonoras que consolidó a Lorde como una de las voces más relevantes de su generación."
  },
  {
    id: "7",
    name: "Elephant",
    artist: "The White Stripes",
    price: 25.99,
    cover: "https://cdn.musicboard.app/musicboard/media/592UEVAweNUalIMtPnNRaKBWa8xwQENN8zviqqWU5iNQ8QV2Zo89pP81P8GVvjFI.webp",
    genre: "Alternative Rock",
    rating: 4.8,
    about: "Contiene 'Seven Nation Army', una de las canciones más icónicas del rock moderno."
  },
  {
    id: "8",
    name: "The Bends",
    artist: "Radiohead",
    price: 26.99,
    cover: "https://cdn.musicboard.app/musicboard/media/lAoNKQTCvUY7RPFKpqWrHVolfM5bSjDRLdpfd1ggU31XN5ek2v6a1lv3E1wNzpto.webp",
    genre: "Alternative Rock",
    rating: 4.8,
    about: "Un disco que marcó la transición de Radiohead hacia un sonido más experimental y profundo."
  },
  {
    id: "9",
    name: "Hot Fuss",
    artist: "The Killers",
    price: 18.99,
    cover: "https://cdn.musicboard.app/musicboard/media/GH1xvmc6FuUCxYbCdoauUPLcNifvV4REZs854baKk55ynWLNGvgCtJR8LiSbnCch.webp ",
    genre: "Alternative Rock",
    rating: 4.7,
    about: "El álbum debut que puso a The Killers en el mapa con éxitos como 'Mr. Brightside'."
  },
  {
    id: "11",
    name: "Funeral",
    artist: "Arcade Fire",
    price: 20.99,
    cover: "https://upload.wikimedia.org/wikipedia/en/5/5f/ArcadeFireFuneralCover.jpg",
    genre: "Alternative Rock",
    rating: 4.9,
    about: "Una obra maestra del rock indie que trata sobre temas de pérdida y renovación."
  },
  {
    id: "12",
    name: "Room on Fire",
    artist: "The Strokes",
    price: 19.99,
    cover: "https://upload.wikimedia.org/wikipedia/en/e/e3/Room_on_Fire_album_cover.png",
    genre: "Alternative Rock",
    rating: 4.6,
    about: "El segundo álbum de The Strokes mantiene la frescura y el estilo melódico de su debut."
  },
  {
    id: "13",
    name: "Humbug",
    artist: "Arctic Monkeys",
    price: 22.99,
    cover: "https://upload.wikimedia.org/wikipedia/en/3/35/Arcticmonkeys-humbug.png",
    genre: "Alternative Rock",
    rating: 4.5,
    about: "Un cambio de dirección para Arctic Monkeys, con un sonido más oscuro y experimental."
  },
  {
    id: "14",
    name: "AM",
    artist: "Arctic Monkeys",
    price: 23.99,
    cover: "https://upload.wikimedia.org/wikipedia/en/6/65/Arctic_Monkeys_AM_cover.png",
    genre: "Alternative Rock",
    rating: 4.8,
    about: "Un álbum lleno de ritmo que explora la madurez sonora de Arctic Monkeys."
  },
  {
    id: "15",
    name: "Sam's Town",
    artist: "The Killers",
    price: 21.99,
    cover: "https://upload.wikimedia.org/wikipedia/en/d/d4/The_Killers_-_Sam%27s_Town.png",
    genre: "Alternative Rock",
    rating: 4.6,
    about: "Un álbum conceptual que combina letras introspectivas con un sonido épico."
  }
];


@Component({
  selector: 'app-genre-section',
  imports: [ArticleCardComponent],
  templateUrl: './genre-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenreSectionComponent {
  cards = albums.map((album) => {
    return {
      id: album.id,
      name: album.name,
      artist: album.artist,
      price: album.price,
      cover: album.cover,

    }
  });

  scrollLeft(carousel: HTMLElement): void {
    carousel.scrollBy({
      left: -250, // Ajusta según el ancho de tus tarjetas
      behavior: 'smooth',
    });
  }

  scrollRight(carousel: HTMLElement): void {
    carousel.scrollBy({
      left: 250, // Ajusta según el ancho de tus tarjetas
      behavior: 'smooth',
    });
  }
}
