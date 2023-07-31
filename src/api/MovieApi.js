const API_KEY = 'f7559877f1d0830f5dd1b2777f8228a1';

export const fetchImages = async inputSearch => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error('Network response is failed');
    }

    const data = await response.json();
    console.log(data.results);
    return data.results;
  } catch (error) {
    console.log(error);
    return error;
  }
};
