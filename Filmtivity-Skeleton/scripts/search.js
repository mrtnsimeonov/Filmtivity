document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('search-btn').addEventListener('click',function(){
        var title = document.getElementById('search').value;
        if(title.trim()){
            fetchMovie(title);
            document.getElementById('details-page').style.display = 'block' //Show details section
        }else{
            document.getElementById('details-page').style.display = 'none' //Hide details section
        }
    })
})

function fetchMovie(title) {
  fetch('https://api.themoviedb.org/3/search/movie?api_key={e21905c35ecf398acd316a5070783f51}&amp;query=${title}')
  .then(response => response.json())
  .then(data =>{
    document.getElementById('title').textContent = data.results[0].title;
    document.getElementById('release_data').textContent = data.results[0].release_data;
    document.getElementById('overview').textContent = data.results[0].overview;
    document.getElementById('vote_average').textContent = data.results[0].vote_average;
    document.getElementById('original_language').textContent = data.results[0].original_language;
    document.getElementById('poster').src = 'https://image.tmbd.org/t/p/w500' + data.results[0].poster_path;
  })
  .catch(error => console.error(error));
}