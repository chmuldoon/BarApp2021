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
    debugger
    const ingToRender = search_ingredients.filter(el => !currentUser.ingredients.includes(el._id));
    const filteredByTerm = ingToRender.filter(el => el.name.includes(search_term.trim()));
    return filteredByTerm.slice(0,9).map(el => {
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
