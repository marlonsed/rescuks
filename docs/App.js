import React from 'react';
import { H1 } from 'rescuks'
import { Button } from 'rescuks';

const App = () =>
  <div>
    <H1>Hello World</H1>
    <Button>Button Normal</Button>
    <Button outline>Button Outline</Button>
    <Button rounded>Button Normal Rounded</Button>
    <Button outline rounded>Button Outline Rounded</Button>
  </div>

export default App