import { useEffect, useState } from 'react'; // NAMED IMPORTS
import { Route, Switch, Redirect } from 'react-router-dom';
import Index from '../pages/Index';
import Show from '../pages/Show';


function Main (props) {
    const [cheeses, setCheeses] = useState([]);

    const URL = "https://mern-build-test.herokuapp.com/cheeses/"
    // const URL = 'https://localhost:3001/cheeses/'

    const getCheeses = async function () {
        const response = await fetch(URL);
        const data = await response.json();
        setCheeses(data);
        // console.log(data);
    }
    //make a cheese    
    const createCheese = async function (cheese) {
    // make post request with header to create a cheese
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(cheese),
        })
        getCheeses()
    }
//update a cheese
const updateCheese = async function (cheese, id) {
    //adding slash to end of fetch URL means I can easily concatenate an id 
    await fetch(URL + id, { 
        method: "PUT",
        headers: {
            "Content-Type": "Application/json",
        },
        body: JSON.stringify(cheese),
    })
    getCheeses();
}

const deleteCheese = async function (id) {
    await fetch(URL + id, {
        method: 'DELETE',
    })
    getCheeses();
}

useEffect(() => getCheeses(), [])

    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Index user={props.user} cheeses={cheeses} createCheese={createCheese} />
                </Route>
                <Route path="/cheeses/:id" render={(rc) => (
                    props.user ?
                <Show 
                    cheeses={cheeses} 
                    updateCheese={updateCheese} 
                    deleteCheese={deleteCheese}
                    {...rc} 
                />
                :
                <Redirect to='/' />
                )} 
                />
            </Switch>
        </main>
    )
}
// is line 57 a loop connecting props argument to component request
export default Main;