import { useFetchGifs } from "../hooks/useFetchGifs"
import { GifGridItem } from "./GifGridItem"

export const GifGrid = ({ category }) => {

  const { gifs, isLoading } = useFetchGifs(category)

  return (
    <>
      <div>
        <h3>{category}</h3>
        {
          isLoading && (<h2>Cargando...</h2>)
        }        
        <div className="card-grid">
          {
            gifs.map((image) => (
              <GifGridItem
                key={image.id}
                {...image}
              />
            ))
          }
        </div>
      </div>
    </>
  )
}
