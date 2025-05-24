async function fetchMovies() {
    const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2db8d69606msh01ea04bb66a34c4p1c8b76jsn7d6eec24a57c',
            'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();

        console.log(data); // Yapıyı incelemek için ekledik

        if (response.ok) {
            const moviesContainer = document.getElementById('movies');
            data.forEach(movie => {
                const movieElement = document.createElement('div');
                movieElement.className = 'movie';

                // Doğru alan adı: movie.image
                const imageUrl = movie.image ? movie.image : 'https://via.placeholder.com/200';
                movieElement.innerHTML = `
                    <img src="${imageUrl}" alt="${movie.title}" width="200">
                    <h3>${movie.title}</h3>
                    <p>Yıl: ${movie.year}</p>
                    <p>Puan: ${movie.rating}</p>
                `;
                moviesContainer.appendChild(movieElement);
            });
        } else {
            console.error('API\'den veri alınamadı.');
        }
    } catch (error) {
        console.error('Hata:', error);
    }
}

fetchMovies();
