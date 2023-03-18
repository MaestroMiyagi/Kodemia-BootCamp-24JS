let BASE_URL = `https://fakestoreapi.com/products`;

export default {
    productCard: async () => {
        let response = await fetch(`${BASE_URL}`);

        let data = await response.json();

        return data;
    },
};
