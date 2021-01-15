const data = {
  title: 'Recipe Puppy',
  version: 0.1,
  href: 'http://www.recipepuppy.com/',
  results: [
    {
      title: 'Cilantro when You Need It',
      href: 'http://www.recipezaar.com/Cilantro-when-You-Need-It-167065',
      ingredients: 'cilantro, garlic, tomato',
      thumbnail: 'http://img.recipepuppy.com/312898.jpg'
    },
    {
      title: 'Carries Bruschetta Appetizer',
      href:
        'http://allrecipes.com/Recipe/Carries-Bruschetta-Appetizer/Detail.aspx',
      ingredients: 'garlic, olive oil, tomato',
      thumbnail: 'http://img.recipepuppy.com/27690.jpg'
    },
    {
      title: 'Simple Roasted Tomato and Garlic Sauce',
      href:
        'http://www.recipezaar.com/Simple-Roasted-Tomato-and-Garlic-Sauce-179148',
      ingredients: 'garlic, olive oil, tomato',
      thumbnail: 'http://img.recipepuppy.com/44726.jpg'
    }
  ],
  data: [
    {
      type: 'gif',
      id: 'l0HlNpo1h2PkXUzy8',
      url: 'https://giphy.com/gifs/l0HlNpo1h2PkXUzy8',
      slug: 'l0HlNpo1h2PkXUzy8'
    }
  ]
}

const dataEmpty = {
  keywords: ['onion', 'tomato'],
  results: []
}

const giphy = {
  data: [
    {
      type: 'gif',
      id: 'l0HlNpo1h2PkXUzy8',
      url: 'https://giphy.com/gifs/l0HlNpo1h2PkXUzy8',
      slug: 'l0HlNpo1h2PkXUzy8'
    }
  ]
}

const giphyEmpty = { data: [] }

const responseApi = {
  statusCode: 200,
  body: {
    keywords: [
      'garlic',
      'pork'
    ],
    recipes: [
      {
        title: 'Pork Adobo (Filipino Banbeave) Recipe',
        ingredients: [
          'garlic',
          'pork'
        ],
        link: 'http://cookeatshare.com/recipes/pork-adobo-filipino-banbeave-22571',
        gif: 'https://giphy.com/gifs/bbq-belly-pork-ja8UR1FexH2RZA8WtX'
      },
      {
        title: 'Steam Fish Recipe',
        ingredients: [
          'fish',
          'garlic',
          'garlic',
          'onions',
          'pork'
        ],
        link: 'http://www.grouprecipes.com/7980/steam-fish.html',
        gif: 'https://giphy.com/gifs/rice-fried-leftover-Aj9EHGocwb4bu'
      },
      {
        title: 'Crock Pot Button Bone BBQ Pork',
        ingredients: [
          'garlic',
          'onions',
          'pork',
          'redpepperflakes',
          'tomatosauce'
        ],
        link: 'http://www.recipezaar.com/Crock-Pot-Button-Bone-BBQ-Pork-279131',
        gif: 'https://giphy.com/gifs/crock-pot-7IYPkpk7fiXaRt4yEp'
      },
      {
        title: 'Hogs Head Cheese Recipe',
        ingredients: [
          'garlic',
          'greenonion',
          'onions',
          'parsley',
          'pork'
        ],
        link: 'http://cookeatshare.com/recipes/hogs-head-cheese-3459',
        gif: 'https://giphy.com/gifs/hog-hogs-feral-cKJAeYgc3a1FfisOXI'
      },
      {
        title: 'Garlic and Pepper Pork',
        ingredients: [
          'blackpepper',
          'garlic',
          'oregano',
          'pork',
          'salt'
        ],
        link: 'http://www.bigoven.com/173404-Garlic-and-Pepper-Pork-recipe.html',
        gif: 'https://giphy.com/gifs/food-red-white-3eRp1NYCYfk7bgUrQj'
      },
      {
        title: 'Blue Corn Posole',
        ingredients: [
          'garlic',
          'oregano',
          'pork',
          'redchilies',
          'salt'
        ],
        link: 'http://www.bigoven.com/41011-Blue-Corn-Posole-recipe.html',
        gif: 'https://giphy.com/gifs/corn-Znj9tJamHmLoQ'
      },
      {
        title: 'BBQd Bacon-Wrapped Pork Fillet',
        ingredients: [
          'bacon',
          'butter',
          'garlic',
          'garlic',
          'pork',
          'sage',
          'wine'
        ],
        link: 'http://www.recipezaar.com/BBQd-Bacon-Wrapped-Pork-Fillet-124780',
        gif: 'https://giphy.com/gifs/eddie-murphy-trading-places-breaking-the-fourth-wall-ARLO4fos7E2w8'
      },
      {
        title: 'Florentine Style Steak -- Bistecca Alla Fiorentina',
        ingredients: [
          'blackpepper',
          'garlic',
          'pork',
          'rosemary',
          'seasalt',
          'steak'
        ],
        link: 'http://www.recipezaar.com/Florentine-Style-Steak-Bistecca-Alla-Fiorentina-155878',
        gif: 'https://giphy.com/gifs/message-vegans-zqaVXKdm1hkru'
      },
      {
        title: 'Roasted Double Rack of Pork with Morel Mushroom Pan Sauce',
        ingredients: [
          'blackpepper',
          'garlic',
          'koshersalt',
          'oliveoil',
          'pork',
          'shallot'
        ],
        link: 'http://www.epicurious.com/recipes/food/views/Roasted-Double-Rack-of-Pork-with-Morel-Mushroom-Pan-Sauce-233397',
        gif: 'https://giphy.com/gifs/sauce-shoulder-pork-OYA8BsNWrEbqo'
      },
      {
        title: 'Hoisin-Marinated Pork Chops',
        ingredients: [
          'foodcoloring',
          'garlic',
          'hoisinsauce',
          'oystersauce',
          'pork',
          'sauce'
        ],
        link: 'http://www.epicurious.com/recipes/food/views/Hoisin-Marinated-Pork-Chops-234138',
        gif: 'https://giphy.com/gifs/bbq-belly-pork-ja8UR1FexH2RZA8WtX'
      }
    ]
  }
}

module.exports = { data, dataEmpty, giphy, giphyEmpty, responseApi }
