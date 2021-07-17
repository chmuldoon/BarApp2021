import React, { useState } from 'react'
import { connect } from 'react-redux'

const AddIngredientForm = ({ search_ingredients, currentUser}) => {
  const [formData, setFormData] = useState({
    search_term: "",
    current_ingredient: null
  })
  const { search_term, current_ingredient } = formData;

  const onTermChange = e => {
    return setFormData({
      ...formData,
      search_term: e.target.value
    })
  }

  const renderIngredientsByTerm = () => {
    if(search_term.trim().length < 1){
      return null
    }
    const ingToRender = search_ingredients.filter(el => !currentUser.ingredients.includes(el._id));
    const filteredByTerm = ingToRender.filter(el => el.name.includes(search_term.trim())).sort((a, b) => a.name - b.name );
    const frontSection = filteredByTerm.filter(el => el.name.indexOf(search_term) === 0)
    const backSection = filteredByTerm.filter(el => el.name.indexOf(search_term) !== 0)
    const finalList = frontSection.concat(backSection)
    return finalList.slice(0,9).map(el => { 
      return (

        <p>{el.name}</p>
      )
    })
  }
  return (
    <form className="add-ingredient-form">
      <input
        type="text"
        placeholder="Search for an ingredient to add"
        value={search_term}
        onChange={(e) => onTermChange(e)}
      />
      {renderIngredientsByTerm()}

    </form>
  )

}
const mapStateToProps = state => ({
  search_ingredients: state.search.ingredients,
  currentUser: state.auth.user
})


export default connect(mapStateToProps, {})(AddIngredientForm);
