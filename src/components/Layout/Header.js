import React from 'react'
import { Fragment } from 'react'

import MealsPhoto from '../../assets/meals.jpg'
import classes from './Header..module.css'
import HeaderButton from './HeaderButton'

const Header = (props) => {
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>Food App</h1>
            <HeaderButton onClick={props.onShownCard}/>
        </header>
        <div className={classes['main-image']}>
            <img src={MealsPhoto} alt='A table full of food!'/>
        </div>
    </Fragment>
  )
}

export default Header