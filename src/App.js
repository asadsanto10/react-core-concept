import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import './My.scss';

function App() {
  const names = ['santo amr nam', 'santo', 'borsha', 'rupali', 'halim', 'hamid'];
  //const name = names.map(name => name);
  //console.log(name);

  const products = [
    {name: 'Photoshop', price: '200$'},
    {name: 'Illustrator', price: '250$'},
    {name: 'Indesign', price: '270$'},
    {name: 'Premear Pro', price: '300$'},
    {name: 'After Effect', price: '350$'},
    {name: 'Adobe Audition', price: '400$'}
  ]

  const productNames = products.map( product => product.name);
  console.log(productNames);
  


  let person = {
    name: 'santo',
    age: 25
  }
  const styele = {
    color: 'red',
    backgroundColor: 'white'
  }
  return (
    <div className="App">
			<div className="App-heade">
      <h2 className="sasscolor">sass</h2>
				<ul>
					{
						names.map(name => <li>{name}</li>)
					}
				</ul>
				<Person name= {names[0]} name2 = 'santo'></Person>
				<Person name="asad" name2 = "asad santo"></Person>
				<Person></Person>
				<Person></Person>

				<Friends name = 'pallob' details= 'he is a good boy'></Friends>
				<Friends name = 'atick' details= 'he is a very good boy'></Friends>
				<Friends name = 'sourov' details= 'he is a better boy'></Friends>
				<Friends name = 'nazrul' details= 'he is my boro vai'></Friends>



	
				{
					products.map(pd => <Product Proname = {pd}></Product>)
				}

				
				{/* <Product Proname = {products[0]}></Product>
				<Product Proname = {products[1]}></Product>
				<Product Proname = {products[2]}></Product>
				<Product Proname = {products[3]}></Product>
				<Product Proname = {products[4]}></Product> */}

        {/* counter */}
        <Counter></Counter>
        <br/>
        <br/>
        <br/>
        <br/>
        {/* dynamic user */}
        <Users></Users>
      </div>
    </div>
  );
}

// component
function Person(props){
  const personSyle = {
    border: '2px solid red',
    margin: '10px'
  }
  //console.log(props);
  return (
    <div style={personSyle}>
      <h1>name: {props.name}</h1>
      <h3>name</h3>
      <h3></h3>
    </div>
  );
}

function Friends (frdName){
  const frndStyle ={
    color: '#0095ff',
    border: '2px solid #0095ff',
    margin: '10px'
  }
  return(
    <div style={frndStyle}>
      <h3>Friend Name: {frdName.name}git </h3>
      <p>Friend Details: {frdName.details}</p>
    </div>
  )
}

function Product(props) {
  //console.log(props);
  return (
    <div className='product-style'>
      <h2>{props.Proname.name}</h2>
      <h2>{props.Proname.price}</h2>
      <button>Buy Now</button>
    </div>
  );
}

// counte increase
function Counter() {
  const [count, setCoutn] = useState(10);
  const handelIncrease = () => setCoutn(count + 1);
  const handelDecrease = () => setCoutn(count - 1);
  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={handelIncrease}>Increase</button>
      <button onClick={handelDecrease}>Decrease</button>
    </div>
  );
}

// data call and load
function Users(userData) {
  const [user, setusers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setusers(data))

  },[]);

  
  return(
    <div>
      <h3>Dynamic User: {user.length}</h3>
      <ul>
        {
          user.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
