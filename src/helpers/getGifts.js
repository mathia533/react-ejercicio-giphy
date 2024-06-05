export const getGift = async(category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=myhrRI0JE7IUuiS0gHPwgv9MSK8X307F&limit=20&q=${category}&limit=10`;
    const resp = await fetch (url);
    const {data} = await resp.json();
    
    const gifs = data.map( img =>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,

    }));
    console.log(gifs);
    return(gifs)
}
