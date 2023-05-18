let url = `https://api.monobank.ua/bank/currency`

axios.get(url)
    .then((res)=> {
        console.log(res.data);
    })