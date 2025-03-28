import blackCock from '../assets/images/blackCock.svg'
import billyTheWhiteGoat from '../assets/images/billyTheWhiteGoat.svg'
import Tuna from '../assets/images/tuna.svg'
import eggs from '../assets/images/eggs.svg'
import pork from '../assets/images/pork.svg'
import sausages from '../assets/images/sausages.svg'
import tilapia from '../assets/images/tilapia.svg'
import honey from '../assets/images/honey.svg'
import wings from '../assets/images/wings.svg'
import eggCategory from '../assets/images/eggCategory.svg'
import honeyCategory from '../assets/images/honeyCategory.svg'
import milkCategory from '../assets/images/milkCategory.svg'
import meatCategory from '../assets/images/meatCategory.svg'
import seafoodCategory from '../assets/images/seafoodCategory.svg'
import poultryCategory from '../assets/images/poultryCategory.svg'
import cowSteak from '../assets/images/cowSteak.svg'

export const navLinks = [
    { label: 'Livestock', href: 'livestock' },
    { label: 'Poultry', href: 'poultry' },
    { label: 'Reptiles', href: 'reptiles' },
    { label: 'Amphibians', href: 'amphibians' },
    { label: 'Seafood', href: 'seafood' }
]

export const bannerCard = [
    { id: 1, image: blackCock, title: 'Cock', description: 'Big Black Rooster', price: '$49.99'},
    { id: 2, image: billyTheWhiteGoat, title: 'Goat', description: 'Messi The Goat', price: '$89.99'},
    { id: 3, image: Tuna, title: 'Tuna', description: 'Sweet Like Tuna', price: '$29.99'},

]

export const bestSellingProducts = [
    {id: 1, description: 'Mayanka', image: eggs, name:'Big Brown Eggs', price: '$6.99'  },
    {id: 2, description: 'Mayanka', image: cowSteak, name:'Cow Steak', price: '$12.99'  },
    {id: 3, description: 'Mayanka', image: sausages, name:'Chicken Sausages', price: '$5.99'  },
    {id: 4, description: 'Mayanka', image: tilapia, name:'Tilapia', price: '$6.99'  },
    {id: 5, description: 'Mayanka', image: honey, name:'Honey', price: '$11.99'  },
    {id: 6, description: 'Mayanka', image: pork, name:'Pork Steak', price: '$10.99'  },
    {id: 7, description: 'Mayanka', image: wings, name:'Chiken Wings', price: '$8.99'  }

]

export const topCategories = [
    {id: 1, title: 'Eggs', image: eggCategory },
    {id: 2, title: 'Honey', image: honeyCategory },
    {id: 3, title: 'Milk', image: milkCategory },
    {id: 4, title: 'Meat', image: meatCategory },
    {id: 5, title: 'Seafood', image: seafoodCategory },
    {id: 6, title: 'Poultry', image: poultryCategory }
]

export let cartArray = [
    {id: 1, image: blackCock, title: 'Cock', description: 'Big Black Rooster', price: '$49.99'},
    {id: 2, image: sausages, title:'Chicken Sausages', description: 'Mayanka', price: '$5.99'},
    {id: 3, image: billyTheWhiteGoat, title: 'Goat', description: 'Messi The Goat', price: '$89.99'},
    {id: 4, image: cowSteak, title:'Cow Steak', description: 'Mayanka', price: '$12.99'  },


]