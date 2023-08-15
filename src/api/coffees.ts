import { InterfaceCoffee } from '../components/Coffee'

import expressoTradicional from '../assets/expresso-tradicional.png'
import expressoAmericano from '../assets/expresso-americano.png'
import expressoCremoso from '../assets/expresso-cremoso.png'
import expressoGelado from '../assets/expresso-gelado.png'
import cafeComLeite from '../assets/cafe-com-leite.png'
import latte from '../assets/latte.png'
import capuccino from '../assets/capuccino.png'
import macchiato from '../assets/macchiato.png'
import mocaccino from '../assets/mocaccino.png'
import chocolateQuente from '../assets/chocolate-quente.png'
import cubano from '../assets/cubano.png'
import havaiano from '../assets/havaiano.png'
import arabe from '../assets/arabe.png'
import irlandes from '../assets/irlandes.png'

export const coffees: InterfaceCoffee[] = [
  {
    title: 'Expresso Tradicional',
    desc: 'O tradicional café  feito com água quente e grão moído',
    subDis: ['TRADICIONAL'],
    price: '9.90',
    image: expressoTradicional,
  },
  {
    title: 'Expresso Americano',
    desc: 'Expresso diluído, menos intenso que o tradicional',
    subDis: ['TRADICIONAL'],
    price: '9.90',
    image: expressoAmericano,
  },
  {
    title: 'Expresso Cremoso',
    desc: 'Café espresso tardicional com espuma cremosa',
    subDis: ['TRADICIONAL'],
    price: '9.90',
    image: expressoCremoso,
  },
  {
    title: 'Expresso Gelado',
    desc: 'Bebida preparada com café expresso e cubos de gelo',
    subDis: ['TRADICIONAL', 'GELADO'],
    price: '9.90',
    image: expressoGelado,
  },
  {
    title: 'Café com Leite',
    desc: 'Meio a meio de expresso tradicional com leite vaporizado',
    subDis: ['TRADICIONAL', 'COM LEITE'],
    price: '9.90',
    image: cafeComLeite,
  },
  {
    title: 'Latte',
    desc: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    subDis: ['TRADICIONAL', 'COM LEITE'],
    price: '9.90',
    image: latte,
  },
  {
    title: 'Capuccino',
    desc: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    subDis: ['TRADICIONAL', 'COM LEITE'],
    price: '9.90',
    image: capuccino,
  },
  {
    title: 'Macchiato',
    desc: 'Café expresso misturado com um pouco de leite quente e espuma',
    subDis: ['TRADICIONAL', 'COM LEITE'],
    price: '9.90',
    image: macchiato,
  },
  {
    title: 'Mocaccino',
    desc: 'Café expresso com calda de chocolate, pouco leite e espuma',
    subDis: ['TRADICIONAL', 'COM LEITE'],
    price: '9.90',
    image: mocaccino,
  },
  {
    title: 'Chocolate Quente',
    desc: 'Bebida feita com chocolate dissolvido no leite quente e café',
    subDis: ['ESPECIAL', 'COM LEITE'],
    price: '9.90',
    image: chocolateQuente,
  },
  {
    title: 'Cubano',
    desc: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    subDis: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    price: '9.90',
    image: cubano,
  },
  {
    title: 'Havaiano',
    desc: 'Bebida adocicada preparada com café e leite de coco',
    subDis: ['ESPECIAL'],
    price: '9.90',
    image: havaiano,
  },
  {
    title: 'Árabe',
    desc: 'Bebida preparada com grãos de café árabe e especiarias',
    subDis: ['ESPECIAL'],
    price: '9.90',
    image: arabe,
  },
  {
    title: 'Irlandês',
    desc: 'Bebida a base de café, uísque Irlandês, açúcar e chantilly',
    subDis: ['ESPECIAL'],
    price: '9.90',
    image: irlandes,
  },
]
