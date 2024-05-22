/* cSpell:disable */
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from './Product.interface';

export class Data implements InMemoryDbService {
  public createDb(): { products: Array<Product> } {
    const products: Array<Product> = [
      {
        id: '1',
        title: 'Product 1',
        prices: [
          { tag: '20x20', cost: 12.64 },
          { tag: '20x30', cost: 73.55 },
        ],
        photos: [
          'https://api.slingacademy.com/public/sample-photos/1.jpeg',
          'https://api.slingacademy.com/public/sample-photos/2.jpeg',
        ],
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sit dolores, fugit repellendus reprehenderit mollitia inventore ab voluptas modi hic voluptatem aspernatur adipisci maiores incidunt dolor sequi quos, fugiat tempora! 1',
        offerDiscount: 0,
      },
      {
        id: '2',
        title: 'Product 2',
        prices: [
          { tag: '20x20', cost: 54.1 },
          { tag: '20x30', cost: 98.96 },
        ],
        photos: [
          'https://api.slingacademy.com/public/sample-photos/3.jpeg',
          'https://api.slingacademy.com/public/sample-photos/4.jpeg',
        ],
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sit dolores, fugit repellendus reprehenderit mollitia inventore ab voluptas modi hic voluptatem aspernatur adipisci maiores incidunt dolor sequi quos, fugiat tempora! 2',
        offerDiscount: 0,
      },
      {
        id: '3',
        title: 'Product 3',
        prices: [
          { tag: '20x20', cost: 70.88 },
          { tag: '20x30', cost: 10.48 },
        ],
        photos: [
          'https://api.slingacademy.com/public/sample-photos/5.jpeg',
          'https://api.slingacademy.com/public/sample-photos/6.jpeg',
        ],
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sit dolores, fugit repellendus reprehenderit mollitia inventore ab voluptas modi hic voluptatem aspernatur adipisci maiores incidunt dolor sequi quos, fugiat tempora! 3',
        offerDiscount: 0,
      },
      {
        id: '4',
        title: 'Product 4',
        prices: [
          {
            tag: '20x20',
            cost: 23.56,
          },
          { tag: '20x30', cost: 30.66 },
        ],
        photos: [
          'https://api.slingacademy.com/public/sample-photos/7.jpeg',
          'https://api.slingacademy.com/public/sample-photos/8.jpeg',
        ],
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sit dolores, fugit repellendus reprehenderit mollitia inventore ab voluptas modi hic voluptatem aspernatur adipisci maiores incidunt dolor sequi quos, fugiat tempora! 4',
        offerDiscount: 20,
      },
      {
        id: '5',
        title: 'Product 5',
        prices: [
          { tag: '20x20', cost: 71.73 },
          { tag: '20x30', cost: 90.42 },
        ],
        photos: [
          'https://api.slingacademy.com/public/sample-photos/9.jpeg',
          'https://api.slingacademy.com/public/sample-photos/10.jpeg',
        ],
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sit dolores, fugit repellendus reprehenderit mollitia inventore ab voluptas modi hic voluptatem aspernatur adipisci maiores incidunt dolor sequi quos, fugiat tempora! 5',
        offerDiscount: 0,
      },
      {
        id: '6',
        title: 'Product 6',
        prices: [
          { tag: '20x20', cost: 32.59 },
          { tag: '20x30', cost: 99.91 },
        ],
        photos: [
          'https://api.slingacademy.com/public/sample-photos/11.jpeg',
          'https://api.slingacademy.com/public/sample-photos/12.jpeg',
        ],
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sit dolores, fugit repellendus reprehenderit mollitia inventore ab voluptas modi hic voluptatem aspernatur adipisci maiores incidunt dolor sequi quos, fugiat tempora! 6',
        offerDiscount: 0,
      },
      {
        id: '7',
        title: 'Product 7',
        prices: [
          { tag: '20x20', cost: 22.05 },
          { tag: '20x30', cost: 63.52 },
        ],
        photos: [
          'https://api.slingacademy.com/public/sample-photos/13.jpeg',
          'https://api.slingacademy.com/public/sample-photos/14.jpeg',
        ],
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sit dolores, fugit repellendus reprehenderit mollitia inventore ab voluptas modi hic voluptatem aspernatur adipisci maiores incidunt dolor sequi quos, fugiat tempora! 7',
        offerDiscount: 0,
      },
      {
        id: '8',
        title: 'Product 8',
        prices: [
          { tag: '20x20', cost: 34.76 },
          { tag: '20x30', cost: 90.86 },
        ],
        photos: [
          'https://api.slingacademy.com/public/sample-photos/15.jpeg',
          'https://api.slingacademy.com/public/sample-photos/16.jpeg',
        ],
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sit dolores, fugit repellendus reprehenderit mollitia inventore ab voluptas modi hic voluptatem aspernatur adipisci maiores incidunt dolor sequi quos, fugiat tempora! 8',
        offerDiscount: 75,
      },
      {
        id: '9',
        title: 'Product 9',
        prices: [
          { tag: '20x20', cost: 56.77 },
          { tag: '20x30', cost: 61.26 },
        ],
        photos: [
          'https://api.slingacademy.com/public/sample-photos/17.jpeg',
          'https://api.slingacademy.com/public/sample-photos/18.jpeg',
        ],
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sit dolores, fugit repellendus reprehenderit mollitia inventore ab voluptas modi hic voluptatem aspernatur adipisci maiores incidunt dolor sequi quos, fugiat tempora! 9',
        offerDiscount: 0,
      },
      {
        id: '10',
        title: 'Product 10',
        prices: [
          { tag: '20x20', cost: 21.83 },
          { tag: '20x30', cost: 0.95 },
        ],
        photos: [
          'https://api.slingacademy.com/public/sample-photos/19.jpeg',
          'https://api.slingacademy.com/public/sample-photos/20.jpeg',
        ],
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sit dolores, fugit repellendus reprehenderit mollitia inventore ab voluptas modi hic voluptatem aspernatur adipisci maiores incidunt dolor sequi quos, fugiat tempora! 9',
        offerDiscount: 0,
      },
      {
        id: '11',
        title: 'Product 11',
        prices: [
          { tag: '20x20', cost: 70.6 },
          { tag: '20x30', cost: 22.59 },
        ],
        photos: [
          'https://api.slingacademy.com/public/sample-photos/21.jpeg',
          'https://api.slingacademy.com/public/sample-photos/22.jpeg',
        ],
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sit dolores, fugit repellendus reprehenderit mollitia inventore ab voluptas modi hic voluptatem aspernatur adipisci maiores incidunt dolor sequi quos, fugiat tempora! 11',
        offerDiscount: 0,
      },
      {
        id: '12',
        title: 'Product 12',
        prices: [
          { tag: '20x20', cost: 34.95 },
          { tag: '20x30', cost: 90.12 },
        ],
        photos: [
          'https://api.slingacademy.com/public/sample-photos/23.jpeg',
          'https://api.slingacademy.com/public/sample-photos/24.jpeg',
        ],
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sit dolores, fugit repellendus reprehenderit mollitia inventore ab voluptas modi hic voluptatem aspernatur adipisci maiores incidunt dolor sequi quos, fugiat tempora! 12',
        offerDiscount: 10,
      },
      {
        id: '13',
        title: 'Product 13',
        prices: [
          { tag: '20x20', cost: 35.27 },
          { tag: '20x30', cost: 49.24 },
        ],
        photos: [
          'https://api.slingacademy.com/public/sample-photos/25.jpeg',
          'https://api.slingacademy.com/public/sample-photos/26.jpeg',
        ],
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sit dolores, fugit repellendus reprehenderit mollitia inventore ab voluptas modi hic voluptatem aspernatur adipisci maiores incidunt dolor sequi quos, fugiat tempora! 13',
        offerDiscount: 0,
      },
      {
        id: '14',
        title: 'Product 14',
        prices: [
          { tag: '20x20', cost: 71 },
          { tag: '20x30', cost: 37.12 },
        ],
        photos: [
          'https://api.slingacademy.com/public/sample-photos/27.jpeg',
          'https://api.slingacademy.com/public/sample-photos/28.jpeg',
        ],
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sit dolores, fugit repellendus reprehenderit mollitia inventore ab voluptas modi hic voluptatem aspernatur adipisci maiores incidunt dolor sequi quos, fugiat tempora! 14',
        offerDiscount: 0,
      },
      {
        id: '15',
        title: 'Product 15',
        prices: [
          { tag: '20x20', cost: 4.78 },
          { tag: '20x30', cost: 2.44 },
        ],
        photos: [
          'https://api.slingacademy.com/public/sample-photos/29.jpeg',
          'https://api.slingacademy.com/public/sample-photos/30.jpeg',
        ],
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sit dolores, fugit repellendus reprehenderit mollitia inventore ab voluptas modi hic voluptatem aspernatur adipisci maiores incidunt dolor sequi quos, fugiat tempora! 15',
        offerDiscount: 0,
      },
      {
        id: '16',
        title: 'Product 16',
        prices: [
          { tag: '20x20', cost: 29.44 },
          { tag: '20x30', cost: 81.27 },
        ],
        photos: [
          'https://api.slingacademy.com/public/sample-photos/31.jpeg',
          'https://api.slingacademy.com/public/sample-photos/32.jpeg',
        ],
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sit dolores, fugit repellendus reprehenderit mollitia inventore ab voluptas modi hic voluptatem aspernatur adipisci maiores incidunt dolor sequi quos, fugiat tempora! 16',
        offerDiscount: 90,
      },
      {
        id: '17',
        title: 'Product 17',
        prices: [
          { tag: '20x20', cost: 79.81 },
          { tag: '20x30', cost: 23.67 },
        ],
        photos: [
          'https://api.slingacademy.com/public/sample-photos/33.jpeg',
          'https://api.slingacademy.com/public/sample-photos/34.jpeg',
        ],
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sit dolores, fugit repellendus reprehenderit mollitia inventore ab voluptas modi hic voluptatem aspernatur adipisci maiores incidunt dolor sequi quos, fugiat tempora! 17',
        offerDiscount: 0,
      },
      {
        id: '18',
        title: 'Product 18',
        prices: [
          { tag: '20x20', cost: 95.79 },
          { tag: '20x30', cost: 46.72 },
        ],
        photos: [
          'https://api.slingacademy.com/public/sample-photos/35.jpeg',
          'https://api.slingacademy.com/public/sample-photos/36.jpeg',
        ],
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sit dolores, fugit repellendus reprehenderit mollitia inventore ab voluptas modi hic voluptatem aspernatur adipisci maiores incidunt dolor sequi quos, fugiat tempora! 18',
        offerDiscount: 0,
      },
      {
        id: '19',
        title: 'Product 19',
        prices: [
          { tag: '20x20', cost: 46.72 },
          { tag: '20x30', cost: 28.69 },
        ],
        photos: [
          'https://api.slingacademy.com/public/sample-photos/37.jpeg',
          'https://api.slingacademy.com/public/sample-photos/38.jpeg',
        ],
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sit dolores, fugit repellendus reprehenderit mollitia inventore ab voluptas modi hic voluptatem aspernatur adipisci maiores incidunt dolor sequi quos, fugiat tempora! 19',
        offerDiscount: 0,
      },
      {
        id: '20',
        title: 'Product 20',
        prices: [
          { tag: '20x20', cost: 70.27 },
          { tag: '20x30', cost: 20.81 },
        ],
        photos: [
          'https://api.slingacademy.com/public/sample-photos/39.jpeg',
          'https://api.slingacademy.com/public/sample-photos/40.jpeg',
        ],
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sit dolores, fugit repellendus reprehenderit mollitia inventore ab voluptas modi hic voluptatem aspernatur adipisci maiores incidunt dolor sequi quos, fugiat tempora! 20',
        offerDiscount: 35,
      },
    ];
    return { products };
  }
}
