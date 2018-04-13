import React from 'react';

const logo = require('../assets/dinnr-logo.svg');
const styles = require('../sass/components/header.scss')


export class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className={styles.header}>
        <img  className={styles.logo} src={logo} width="366" height="80" />
      </header>
    );
  }

}

