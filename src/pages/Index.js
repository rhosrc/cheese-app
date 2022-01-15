import { useState } from 'react';
import { Link } from 'react-router-dom';


function Index (props) {
// state to hold formData

const [newForm, setNewForm] = useState({
name:'',
image:'',
countryOfOrigin:''
})

// handleChange function for changing formData in text box

const handleChange = function (event) {
    if(!props.user) return; // no user, no typing allowed
    setNewForm({...newForm, [event.target.name]: event.target.value}) // don't overwrite the object structure and add a new prop
}

// handleSubmit function to use cheeses state setter passed in as prop from Component component

const handleSubmit = function (event) {
    if (!props.user) return;
    event.preventDefault();
    props.createCheese(newForm)//add item to database
    setNewForm({ // once state of cheeses is changed, return content of text boxes to empty
        name:'',
        image:'',
        countryOfOrigin:''
    })
}


    const loaded = function () {
            // return props.cheeses.map(function (cheese) {
                return props.cheeses.map((cheese) => (
            <div key={cheese._id} className="cheese">
                <Link to={`/cheeses/${cheese._id}`}>
                    <h1>{cheese.name}</h1>
                </Link>
                <img src={cheese.image} alt={cheese.name} />
                <h3>{cheese.countryOfOrigin}</h3>
            </div>
        ))
    }

    const loading = function () {
        return<h1>Loading...</h1>
    }

    
    
    // Finally, we render the component
 //and disable functionality depending on whether there is a user prop to pass in
    return (
        <section>
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={newForm.name}
                name="name"
                placeholder="name"
                onChange={handleChange}
            />
            <input
                type="text"
                value={newForm.image}
                name="image"
                placeholder="image"
                onChange={handleChange}
            />
            <input
                type="text"
                value={newForm.countryOfOrigin}
                name="countryOfOrigin"
                placeholder="Country of Origin"
                onChange={handleChange}
            />
            <input disabled={!props.user} type="submit" value="Add Cheese"/>
           
        </form>
        {props.cheeses ? loaded() : loading()} 
        </section>
    )


}
// Line JSX ternary saying what function will render it. 
export default Index;