async function makeRequest() {
     const url = 'https://dummyjson.com/products'
    const data = await (await fetch(url)).json()
    // const data = await respnse.json()
     console.log(data)
     
}

makeRequest()
