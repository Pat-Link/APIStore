const myAPIkey = 'api_key=9783e5630ec5fd7a73523a4b5615996b';
const baseUrl = 'https://api.themoviedb.org/3';
const apiURL = baseUrl + '/discover/movie?sort_by=popularity.desc&'+myAPIkey;
const imgURL = 'https://image.tmdb.org/t/p/w500';
const searchURL = baseUrl + '/search/movie?'+myAPIkey;



renderMovies(apiURL);

function renderMovies(url) {
  lastUrl = url;
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results)
        if(data.results.length !== 0){
            showMovies(data.results);
          

        }else{
            main.innerHTML= `<h3 class="no-results"> Oh em Gee!  No Movies Found :( ! </h3>`
        }                     
            
    })

}

   


  function showMovies(data) {
    main.innerHTML = '';

    data.forEach(movie => {
        const {title, poster_path, overview, id} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movieBox');
        movieEl.innerHTML = `
             <img src="${poster_path? imgURL+poster_path: "http://via.placeholder.com/1080x1580" }" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
               <div class="overview">
                <h3>Overview</h3>
                ${overview}
                <br/> 
                <button class="know-more" id="${id}">Know More</button>
                 <br/>
                 
                 `

        main.appendChild(movieEl);

        document.getElementById(id).addEventListener('click', () => {
          console.log(id)
          openNav(movie)
        })
  
   })

}