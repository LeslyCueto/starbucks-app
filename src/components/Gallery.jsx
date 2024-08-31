import React from 'react'
import IMAGE1 from '../image/gallery-1.png'
import IMAGE2 from '../image/gallery-2.png'
import IMAGE3 from '../image/gallery-3.png'

const Gallery = () => {
  return (
    <div class="gallery">
			<div className="gallery__cnt">
				<img className="gallery__img" src={IMAGE1} alt="gallery" />
				<img className="gallery__img" src={IMAGE2} alt="gallery" />
				<img className="gallery__img" src={IMAGE3} alt="gallery" />
			</div>
	</div>
  )
}

export default Gallery