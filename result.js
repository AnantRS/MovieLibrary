document.addEventListener('DOMContentLoaded', function(){

document.getElementById('movie_form').addEventListener('submit', function(event){
    event.preventDefault();
    const movie = document.getElementById('movie').value;
    console.log(movie);
    getMovie(movie);
});

function getMovie(movie){
    const apiKey='38c3ce56';
    const url=`https://www.omdbapi.com/?t=${movie}&apikey=${apiKey}`;

    fetch(url)
    .then(response => response.json())
    .then(data =>{
        console.log(data); // Log the API response data for debugging
        if(data.Response === "True"){
            displayMovie(data);
        } else {
            showError(data.Error);
        }
    })
    .catch(error => {
        console.error('Fetch Error:', error); // Log any fetch errors
        showError('Unable to retrieve movie data.');
    });
}

function displayMovie(data){
    const movieResult = document.getElementById('movie_result');
    movieResult.innerHTML =
    `<div class ='movie_info'>
    <h2> ${data.Title}, ${data.Year}</h2>
    <p>Genre: ${data.Genre}</p>
    <p>Director: ${data.Director}</p>
    <p>Writer: ${data.Writer}</p>
    <p>Actors: ${data.Actors}</p>
    <p>Plot: ${data.Plot}</p>
    <p>Awards:${data.Awards}</p>
    </div>`;
}

function showError(message){
    const movieResult = document.getElementById('movie_result');
    movieResult.innerHTML = `<p class='error'> ${message} </p>`;
}

const ul =document.querySelector('#movie-list ul');
    


    const addForm=document.forms['add-movie'];
    addForm.addEventListener('submit', function(e){
        e.preventDefault();
        const movie_item=addForm.querySelector('input[type="text"]').value;

        var li =document.createElement('li');
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const checkboxId = 'checkbox-' + Math.random().toString(36).substr(2, 9); // generate a unique id
        checkbox.id = checkboxId;

        
        
        const lbl = document.createElement('label');
        lbl.htmlFor = checkboxId;
        lbl.textContent = movie_item;

        li.appendChild(checkbox);
        li.appendChild(lbl);
        ul.appendChild(li);

        //Delete task
        checkbox.addEventListener('click', function(e){
            li.remove();
        });

    });

});
