// Application KEY = "43769e764emsh91d9031498dbd9bp1f2565jsnf45eac5d4fe1";

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
// 		'X-RapidAPI-Key': '4e969d7c63mshad7c1864fe0754bp1d7ce4jsn768dd4c6ee38'
// 	}
// };

fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=game', {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
		'X-RapidAPI-Key': '4e969d7c63mshad7c1864fe0754bp1d7ce4jsn768dd4c6ee38'
	}
})



	.then(response => response.json())
	.then(data => {
    const list = data.d;

    list.map((item) => {
      const name = item.l;
      const poster = item.i.imageUrl;
      const movie = `<li><img src="${poster}"> <h2>${name}</h2></li>`
      document.querySelector('.movies').innerHTML += movie;
      // console.log(item)
  });

})
	.catch(err => {
    console.error(err);

  });
