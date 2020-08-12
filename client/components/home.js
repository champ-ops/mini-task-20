import React from 'react'
import { Route } from 'react-router-dom'
import Menu from './menu'
import First from './first-task'
import Second from './second-task'
import Third from './third'
import Fourth from './fourth'
import Sixth from './sixth'
import Seventh from './seventh'
import Eighth from './eighth'
import Nine from './nineth-task'
import Fifth from "./fifth";

const Home = () => {
  return (
    <div>
      <Route exact path="/" component={() => <Menu />} />
      <Route exact path="/first" component={() => <First />} />
      <Route exact path="/second" component={() => <Second />} />
      <Route exact path="/third" component={() => <Third />} />
      <Route exact path="/fourth" component={() => <Fourth />} />
      <Route exact path="/fifth" component={() => <Fifth />} />
      <Route exact path="/sixth" component={() => <Sixth />} />
      <Route exact path="/seventh" component={() => <Seventh />} />
      <Route exact path="/eighth" component={() => <Eighth />} />
      <Route exact path="/nine" component={() => <Nine />} />
    </div>
  )
}

Home.propTypes = {}

export default Home
