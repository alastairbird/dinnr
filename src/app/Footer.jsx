import React from 'react';
import { Link } from 'react-router-dom'

const styles = require('../sass/components/footer.scss')


export class Footer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className={styles.footer}>
        <small>
         Decide what you'd like to eat tonight...
        </small>
      </footer>
    );
  }

}

