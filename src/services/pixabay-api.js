import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '36100562-e7fdc43375d9d73a4de1d4637';

export const fetchGalleryWithQuery = async (query, page) => {
    const searchParams = new URLSearchParams({
        q: query,
        page: page,
        key: API_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12,
    });

    const response = await axios.get(`${BASE_URL}?${searchParams}`);
    return response.data;
};
