import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import { addIngredientToShelf, fetchMyIngredients } from '../../actions/ingredient_actions';
import { closeModal } from '../../actions/modal_actions';
import Button from '../snippets/Button';
const AddIngredientForm = ({ search_ingredients, addIngredientToShelf, closeModal, currentUser}) => {
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
  const findItemId = e => {
    for(const key in e.currentTarget) {

      if(key.startsWith('__reactFiber$')) {
        return e.currentTarget[key].key

      } 
    }
    return null
  }
  const handleCancel = (e) => {
    return setFormData({
      search_term: "",
      current_ingredient: null
    })
  
  }
  const onCurrentSet = e => {
    const id = findItemId(e);
    return setFormData({ search_term: "", current_ingredient: search_ingredients[id] });
    
  }

    const renderIngredientsByTerm = () => {
    if(search_term.trim().length < 1){
      return null
    }
    const ingToRender = Object.values(search_ingredients).filter(el => !currentUser.ingredients.includes(el._id));
    const filteredByTerm = ingToRender.filter(el => el.name.includes(search_term.trim())).sort((a, b) => a.name - b.name );
    const frontSection = filteredByTerm.filter(el => el.name.indexOf(search_term) === 0)
    const backSection = filteredByTerm.filter(el => el.name.indexOf(search_term) !== 0)
    const finalList = frontSection.concat(backSection)
    if (finalList.length === 0) {
      return  <div className="result-item">
          <p>No results</p>
        </div>
    }
    return finalList.slice(0,9).map(el => { 
      return (
        <div key={el._id} onClick={(e) => onCurrentSet(e)} className="result-item">
          <div className="result-item-image">
            <img load="lazy" alt={el.name + " image"} src={el.img}/>
          </div>
          <p>{el.name}</p>
        </div>
      )
    })
  }
  return (
    <form className="add-ingredient-form">
      <h2>
        Search for an ingredient you wish to add to your shelf.
      </h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Search for an ingredient to add"
          value={search_term}
          onChange={(e) => onTermChange(e)}
        />
        <div className={`result-container ` + (search_term.trim().length == 0 ? "empty-container" : "")}>
        {renderIngredientsByTerm()}
        </div>
      </div>
      <div class="button-wrapper">

        <Button fn={(e) => {handleCancel(e); closeModal(e)}} classes="bg-red modal-closer">
          Cancel
        </Button>
        {current_ingredient ? 
          (<Button 
            fn={(e) => {addIngredientToShelf(current_ingredient._id); closeModal(e)
            }}
            classes="bg-lavendar modal-closer">{"Add " + current_ingredient.name}</Button>) 
          : 
          (<Fragment></Fragment>)
        }

        
      </div>

    </form>
  )

}
const mapStateToProps = state => ({
  search_ingredients: state.search.ingredients,
  currentUser: state.auth.user
})



export default connect(mapStateToProps, { closeModal, addIngredientToShelf })(AddIngredientForm);
