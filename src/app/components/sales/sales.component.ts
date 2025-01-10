import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Album } from '../../interfaces/album';
import { SaleCardComponent } from "../sale-card/sale-card.component";

const albums: Album[] = [
  {
    id: "1",
    name: "Clics Modernos",
    artist: "Charly García",
    price: 29.99,
    cover: "covers/ClicsModernos",
    genre: "Rock Argentino",
    rating: 4.9,
    about: "Un álbum revolucionario que marcó un antes y un después en el rock argentino, combinando sintetizadores y letras introspectivas."
  },
  {
    id: "2",
    name: "El Amor Después del Amor",
    artist: "Fito Páez",
    price: 27.99,
    cover: "covers/ElAmorDespués delAmor.jpeg",
    genre: "Rock Argentino",
    rating: 4.8,
    about: "Uno de los discos más vendidos en la historia del rock argentino, lleno de emociones y clásicos como 'Mariposa Tecknicolor'."
    },
    {
      id: "4",
      name: "Los Socios del Desierto",
      artist: "Luis Alberto Spinetta",
      price: 26.99,
      cover: "covers/LosSociosdelDesierto.jpeg",
      genre: "Rock Argentino",
      rating: 4.7,
      about: "Un disco doble lleno de pasión y complejidad, mostrando a Spinetta en su máxima expresión creativa."
      },
      {
        id: "5",
        name: "Canción Animal",
        artist: "Soda Stereo",
        price: 28.99,
        cover: "covers/CanciónAnimal.jpeg",
        genre: "Rock Argentino",
        rating: 4.9,
        about: "Uno de los mejores discos de Soda Stereo, con clásicos como 'De Música Ligera' y 'Té para Tres'."
        },
        {
          id: "6",
          name: "Artaud",
          artist: "Luis Alberto Spinetta",
          price: 30.99,
          cover: "covers/Artaud.webp",
          genre: "Rock Argentino",
          rating: 5.0,
          about: "Considerado uno de los mejores discos de la música argentina, lleno de poesía y sensibilidad."
          },
          {
            id: "7",
            name: "Películas",
            artist: "La Máquina de Hacer Pájaros",
            price: 23.99,
            cover: "covers/Películas.jpeg",
            genre: "Rock Progresivo Argentino",
            rating: 4.7,
            about: "Un disco conceptual que combina rock progresivo con letras surrealistas y complejas."
            },
            /*
  {
    id: "8",
    name: "Un Baión para el Ojo Idiota",
    artist: "Patricio Rey y sus Redonditos de Ricota",
    price: 24.99,
    cover: "https://i.imgur.com/pOQ6ewT.jpg",
    genre: "Rock Argentino",
    rating: 4.8,
    about: "Uno de los discos más emblemáticos de 'Los Redondos', lleno de misticismo y letras potentes."
  },
  {
    id: "9",
    name: "Yendo de la Cama al Living",
    artist: "Charly García",
    price: 27.99,
    cover: "https://i.imgur.com/UGvxl9t.jpg",
    genre: "Rock Argentino",
    rating: 4.8,
    about: "Un álbum innovador que aborda temas personales y políticos, con un sonido fresco y experimental."
  },
  {
    id: "10",
    name: "Doble Vida",
    artist: "Soda Stereo",
    price: 28.99,
    cover: "https://i.imgur.com/eqt4MLn.jpg",
    genre: "Rock Argentino",
    rating: 4.7,
    about: "Un disco que mezcla el pop con el rock, producido por Carlos Alomar, guitarrista de David Bowie."
  },
  {
    id: "11",
    name: "Luzbelito",
    artist: "Patricio Rey y sus Redonditos de Ricota",
    price: 25.99,
    cover: "https://i.imgur.com/V43YXEk.jpg",
    genre: "Rock Argentino",
    rating: 4.8,
    about: "Un álbum oscuro y misterioso, con letras cargadas de simbolismo y crítica social."
  },
  {
    id: "12",
    name: "Nada Personal",
    artist: "Soda Stereo",
    price: 22.99,
    cover: "https://i.imgur.com/z0HhrbO.jpg",
    genre: "Rock Argentino",
    rating: 4.7,
    about: "Un álbum que consolidó a Soda Stereo como una de las bandas más influyentes de Latinoamérica."
  },
  {
    id: "13",
    name: "Oktubre",
    artist: "Patricio Rey y sus Redonditos de Ricota",
    price: 23.99,
    cover: "https://i.imgur.com/zErP6nP.jpg",
    genre: "Rock Argentino",
    rating: 4.9,
    about: "Un disco icónico con una carga política y poética que marcó una generación."
  },
  {
    id: "14",
    name: "Parte de la Religión",
    artist: "Charly García",
    price: 26.99,
    cover: "https://i.imgur.com/XOxsYpL.jpg",
    genre: "Rock Argentino",
    rating: 4.8,
    about: "Un álbum introspectivo que combina elementos del rock y el pop con letras profundamente personales."
  },
  {
    id: "15",
    name: "Signos",
    artist: "Soda Stereo",
    price: 27.99,
    cover: "https://i.imgur.com/LnCr0tD.jpg",
    genre: "Rock Argentino",
    rating: 4.8,
    about: "Un disco que mezcla letras profundas con un sonido innovador, consolidando a Soda Stereo como íconos del rock."
  }*/
];


@Component({
  selector: 'app-sales',
  imports: [SaleCardComponent],
  templateUrl: './sales.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SalesComponent {
  public sales = albums.map((album) => {
    return {
      id: album.id,
      name: album.name,
      artist: album.artist,
      price: album.price,
      cover: album.cover,
    }
  });
}
