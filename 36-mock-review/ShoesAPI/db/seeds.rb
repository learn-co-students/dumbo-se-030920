Shoe.destroy_all
Review.destroy_all

Shoe.create([
  {name: "Crocs Classic Clogs", company: "Crocs", price: 39, image: "https://media.journeys.com/images/products/1_547493_ZM.JPG", description: "Most comfortable shoes!"},
  {name: "Birko Flor Nubuck Mocha", company: "Birkenstock", price: 99, image: "https://www.birkenstock.com/on/demandware.static/-/Sites-master-catalog/default/dw573eb793/151183/151183.jpg", description: "Goes well with socks."},
  {name: "Pascal Virginia Boots", company: "Dr.Martens", price: 140, image: "http://dmeszqrvxc7wa.cloudfront.net/images/product/new/medium/13512006.jpg", description: "Just what the Doc ordered."},
  {name: "OFF-WHITE x Nike", company: "Nike", price: 1000, image: "https://static.highsnobiety.com/wp-content/uploads/2018/07/04143040/main-18-480x320.jpg", description: "Fresh!"},
  {name: "Toe Shoes", company: "Fila", price: 20, image: "https://images-na.ssl-images-amazon.com/images/I/71xFmWzmJzL._UL1500_.jpg", description: "Shoes that will make you breathe!"},
  {name: "Old Skool", company: "Vans", price: 59, image: "https://scene7.zumiez.com/is/image/zumiez/pdp_hero/Vans-Old-Skool-Black-%26-White-Skate-Shoes-_204607-front-US.jpg", description: "Old Skool Cool!"},
  {name: "8 Inch Premium Boots", company: "Timberland", price: 200, image: "https://www.kicksusa.com/media/catalog/product/cache/1/thumbnail/2000x/040ec09b1e35df139433887a97daa66f/t/i/timberland_12281_01.jpg", description: "Valid shoes."}
])

Review.create([
  {content: "All my friends are jealous of me because of this shoe!", shoe: Shoe.first},
  {content: "This shoe saved my love life.", shoe: Shoe.first},
  {content: "Worth every penny!", shoe: Shoe.second},
  {content: "Fresh and edgy. Just the way I like them.", shoe: Shoe.third},
  {content: "Goes well with my dark soul.", shoe: Shoe.third},
  {content: "I lost my 401k and rent money because of this shoe.", shoe: Shoe.fourth},
  {content: "Eh.", shoe: Shoe.fourth},
  {content: "Great for doing triathlons!", shoe: Shoe.fifth},
  {content: "Clean and stylish. 10/10", shoe: Shoe.all[5]},
  {content: "Goes well with my fitted cap.", shoe: Shoe.all[6]},
  {content: "Gotta love my Timbs.", shoe: Shoe.all[6]},
])
