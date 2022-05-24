

export const getGifs = async( valor ) => {
        
    const apiKey = 'loWXE8b1eM1acvr9srMKENirc0KSIor0'; 
    const limit = 10
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURI(valor)}&limit=${limit}`
    const resp = await fetch( url );
    const { data } = await resp.json()
    const imagesUrl = data.map( img => { 

        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })
    return(imagesUrl) 
}