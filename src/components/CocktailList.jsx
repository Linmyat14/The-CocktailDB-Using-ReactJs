import { useGlobalContext } from "../context"
import Cocktail from "./Cocktail";
import Loading from "./Loading";

useGlobalContext

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();
  if(loading){
    return <Loading/>
  }
  if(!cocktails.length){
    return (
    <div className="section">
      <div className="section-title"> no cocktails matched your search criteria</div>
    </div>
    )
  }
  else {
    return (
    <div className="section">
      <h3 className="section-title">Cocktails</h3>
        <div className="cocktail-center">
            {cocktails.map((item) => {
              return <Cocktail key={item.id} {...item}/>
            })}
        </div>
      </div>
    
  )
} }

export default CocktailList
