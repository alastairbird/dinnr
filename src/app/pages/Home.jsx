import React from 'react';
import { Link } from 'react-router-dom'

const styles = require('../../sass/components/food.scss');


const foodArray = [
  "Bimibap",
  "Pork tenderloin stir fry",
  "pork chop mushroom sauce ",
  "Lemom m herb chicken thighs cous cous",
  "Chorizo kale risotto",
  "Quick turkey chilli",
  "Marckel avo smash",
  "Teryiaki steak noodles.",
  "Marinated chicken pittas",
  "Meatballs n pasta",
  "Veggie sausage risotto",
  "Mush halloumi burger",
  "Anchovy  brocoli pasta",
  "Oork ramen",
  "Chicken tray bake",
  "Ramen",
  "Chickpea n spimach tapas",
  "Buurgers",
  "Wings n sweet potato",
  "Chicken boursin bacon",
  "White beans tomato reduction on toast",
  "Souvlaki pork and tzasiki pitta",
  "Leek risotto",
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
      <div>
      	<div className={styles.food}>
      			{this.state.chosenFood}
      	</div>
        <button to="/food" onClick={this.gimmeTheFoodYo}>
        	{!this.state.hasPressedTheButton && <span>Eat this.</span>}
        	{this.state.hasPressedTheButton && <span>Nah, not that</span>}
        </button>
      </div>
    );
  }
}
