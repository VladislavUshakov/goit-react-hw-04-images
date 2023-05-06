import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const options = {
  key: '34239282-bbeea62304f42d8ced9502c1f',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

export const getImageCollection = async (q, page) => {
  try {
    const response = await axios.get('', {
      params: { ...options, q, page },
    });
    return response.data.hits.map(
      ({ id, webformatURL, largeImageURL, tags }) => ({
        id,
        webformatURL,
        largeImageURL,
        tags,
      })
    );
  } catch (error) {
    console.log(error);
    return [];
  }
};
