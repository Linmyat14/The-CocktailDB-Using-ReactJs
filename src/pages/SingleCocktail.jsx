import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import Loading from "../components/Loading";
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const { id } = useParams();
  const [ loading, setLoading ] = useState(false);
  const [ cocktail, setCocktails ] = useState(null);

  useEffect( () => {
    setLoading(true)
    async function getCocktail(){
      try{
        const response = await fetch (`${url}${id}`)
      const data = await response.json();
      if(data.drinks){
        const {
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic: info,
          strGlass: glass,
          strCategory: category,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = data.drinks[0]
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ]
        const newCocktail = {
          name, image, info, glass, category, instructions, ingredients
        }
        setCocktails(newCocktail)
        console.log(newCocktail);
      }else {
        setCocktails(null)
      }
      setLoading(false)

      }catch(error){
        console.log(error);
      }
    }
    getCocktail();
  },[id])

if(loading){
  return <Loading />
}

if(cocktail == null){
  return <div className="section-title">No cocktail to display</div>
}else {
  const {
    name, image, info, glass, category, instructions, ingredients
  } = cocktail
    return (
      <section>
      <div className="single-cocktail">
        <Link to="/" className="back-home-btn">Back to Home</Link>
      </div>
        <div className="single-cocktail-page">
          <div className="cocktail-product">
            <img src={image} alt="" className="cocktail-img"/>
            <div className="cocktail-details">
                <h1>{name}</h1>
                <p className="product-details">Name - {name}</p>
                <p className="product-details">Category - {category}</p>
                <p className="product-details">Info - {info}</p>
                <p className="product-details">Glass - {glass}</p>
                <p className="product-details">Instructions - {instructions}</p>
                <p className="product-details">Ingredients - {ingredients.map((item, index) => {
                return item ? <span key={index}>{item}, </span> : null })}</p>
            </div>
          </div>
        </div>
        </section>
    )
  }
}

export default SingleCocktail
