import React from 'react';
import { Link } from 'react-router-dom'

const styles = require('../../sass/components/home.scss');

const foodArray = [
  "Tofu Bimibap",
  "Bean Burrito",
  "Leek Risotto",
  "Chickpea Salad Bowl",
  "Huel",
  "Jerk Rice & Beans",
  "Quorn Chilli",
  "Chickpea Curry",
  "Fancy Beans on Toast",
  "Roasted Veg Flat Bread",
  "Gnocchi n Veg",
  "Jackfruit Buns n Red Slaw",
  "Tofu n Noodles",
  "Falafel Wrap",
  "Avo Salad Bowl",
  "Roasted Veg & Tabouleh",
  "This Isn't Chicken, Chips & Peas",
  "Deliveroo",
  "Ratatoille",
  "Charred squash, Avo, Apple w/ cous cous",
  "First Vegan BBC Good Food",
];

interface HomeProps extends React.Component {

}

interface HomeState extends React.Component {
	hasPressedTheButton: boolean;
	chosenFood: string;
}

export class Home extends React.Component<HomeProps, HomeState> {
  
  constructor(props) {
    super(props);
    this.state = {
    	hasPressedTheButton: false,
    	chosenFood: '?'
    }
  }

  selectFood = () => {
  	this.setState({
  		chosenFood: foodArray[Math.floor(Math.random() * Math.floor(foodArray.length))]
  	}) 
  }

  gimmeTheFoodYo = () => {
  	this.selectFood()
  	this.setState ({
  		hasPressedTheButton: true,
  	})
  }

  render () {
    return (
      <div className={styles.wrapper}>

      	<div className={styles.food}>
      			{this.state.chosenFood}
      	</div>

        <button className={styles.foodButton} to="/food" onClick={this.gimmeTheFoodYo}>
        	{!this.state.hasPressedTheButton && <span>Eat this.</span>}
        	{this.state.hasPressedTheButton && <span>Nah, not that</span>}
        </button>
      </div>
    );
  }
}
