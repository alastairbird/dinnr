import React from 'react';
import { Link } from 'react-router-dom'

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

export class Home extends React.Component {
  render () {
    return (
      <div className="">
        <Link to="/food" className="button__base">
        	Eat this.
        </Link>
      </div>
    );
  }
}
