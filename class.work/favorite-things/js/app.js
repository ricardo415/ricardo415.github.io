//var favoriteThings = [
  {
    image: 'http://images.all-free-download.com/images/graphicthumb/cute_puppy_photo_picture_11_168839.jpg',
    text: 'Puppies!'
  },
  {
    image: 'http://images4.fanpop.com/image/photos/22400000/Cute-Kitten-kittens-22438020-480-360.jpg',
    text: 'Kittens!!'
  },
  {
    image: 'https://solidgeargroup.com/wp-content/uploads/2016/08/technology-1283624_770.jpg',
    text: 'JavaScript!!!'
  }
];



//var favoriteThings = [
  {
    image: 'http://images.all-free-download.com/images/graphicthumb/cute_puppy_photo_picture_11_168839.jpg',
    text: 'Puppies!'
  },
  {
    image: 'http://images4.fanpop.com/image/photos/22400000/Cute-Kitten-kittens-22438020-480-360.jpg',
    text: 'Kittens!!'
  },
  {
    image: 'https://solidgeargroup.com/wp-content/uploads/2016/08/technology-1283624_770.jpg',
    text: 'JavaScript!!!'
  }
]

//favoriteThings.forEach(addThings)

function addThings(thing) {
var thingFields = thing.fields;

  var firstFavThingPar = '<p>'+thing.text+'</p>';

  $('#favoriteThings').append('<img src="'+thingFields.image+'">');
  $('#favoriteThings').append(firstFavThingPar);
}


$.ajax({
url: 'https://api.airtable.com/v0/appQytW1PVY1M77vN/Favorites?maxRecords=3&view=Grid%20view',
type: 'GET',
headers: {
  Authorization: 'Bearer keyHSu1cfEZyaBVMg'
},

sucess: function(response){
var data = response.records; 
console.log('records'); 
console.log(data);

data.forEach(addThings);
}


})