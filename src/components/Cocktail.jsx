import { Link } from "react-router-dom"

const Cocktail = ({ name, image, info, glass, id}) => {
  return (
    <div className="cocktails-card">
        <h2 className="name">{name}</h2>
        <p className="info">{info}</p>
        <img src={image} alt="cocktail-img" className="img" />
        <p className="glass">{glass}</p>
        <Link to={`/cocktail/${id}`} className='details-btn'>Details</Link>
    </div>
  )
}

export default Cocktail
