module.exports = () => {
    //gera api fake
    const data = {
        products: [],
    }

    for (let i = 0; i < 1000; i++){
        data.products.push({
            id: i + 1,
            price: 12,
            title: `Camiseta ${i + 1}`,
        })
    }

    return data;
}