
const data = {
  keywords: ['onion', 'tomato'],
  recipes: [{
    title: '  ',
    ingredients: ['eggs', 'feta cheese', 'garlic', 'red onions', 'spinach', 'tomato', 'water'],
    link: 'http://www.kraftfoods.com/kf/recipes/greek-omelet-feta-104508.aspx',
    gif: 'https://media.giphy.com/media/xBRhcST67lI2c/giphy.gif'
  }, {
    title: 'Guacamole Dip Recipe',
    ingredients: ['avocado', 'onions', 'tomato'],
    link: 'http://cookeatshare.com/recipes/guacamole-dip-2783',
    gif: 'https://media.giphy.com/media/I3eVhMpz8hns4/giphy.gif'
  }
  ]
}

const dataEmpty = {
  keywords: ['onion', 'tomato'],
  recipes: []
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

module.exports = { data, dataEmpty, giphy, giphyEmpty }
