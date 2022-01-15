import { useState } from 'react';


function Show (props) {
    const id = props.match.params.id;

    const cheese = props.cheeses.find(c => c._id === id);
// state for form

const [editForm, setEditForm] = useState(cheese);

const handleChange = function (event) {
    setEditForm({
        ...editForm,
        [event.target.name]: event.target.value
    })
}

const handleSubmit = function (event) {
    event.preventDefault();
    props.updateCheese(editForm, cheese._id); //the fetch request required an id
    props.history.push('/cheeses') // pushes 
}

const handleDelete = function (event) {
    props.deleteCheese(cheese._id);
    props.history.push('/cheeses');
}



    return (
        <div className="cheese">
<h1>{cheese.name}</h1>
<h2>{cheese.countryOfOrigin}</h2>


<img src={cheese.image} alt={cheese.name} />
<button id="delete" onClick={handleDelete}>DELETE</button>


        
<form onSubmit={handleSubmit}> 
<input
type="text"
value={editForm.name} // it starts out with the value from the prop
name="name" //input names have to match props exactly
placeholder="name"
onChange={handleChange} // mutate state object, added additional property: entered original value plus value entered by keyboard by mutating the prop?
/>
<input
type="text"
value={editForm.image} // it starts out with the value from the prop
name="image"
placeholder="Image URL"
onChange={handleChange} // mutate state object, added additional property: entered original value plus value entered by keyboard by mutating the prop?
/>
<input
type="text"
value={editForm.countryOfOrigin} // it starts out with the value from the prop
name="countryOfOrigin"
placeholder="Image URL"
onChange={handleChange} // mutate state object, added additional property: entered original value plus value entered by keyboard by mutating the prop?
/>
<input type="submit" value="Update Cheese" />
</form>

      
        </div>
    )
}

export default Show;