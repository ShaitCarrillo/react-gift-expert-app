export const getGifs = async(category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=vjfhE0L48fkzYgmpXwoNH5WC0rcOXabR&limit=20&q=${category}`
  const response = await fetch(url)
  const { data } = await response.json()
  const gifs = data.map(item => ({
    id: item.id,
    title: item.title,
    url: item.images.downsized_medium.url
  }))
  return gifs
  // console.log(gifs);
}