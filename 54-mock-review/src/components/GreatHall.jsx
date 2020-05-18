import React from 'react';
import Wizard from './Wizard'

const GreatHall = (props) => {

  let arrayOfComponents = props.wizards.map((wizardObj) => {
    return <Wizard
      key={wizardObj.id}
      deleteAWizard={props.deleteAWizard}
      wizard={wizardObj}
    />
  })

  return (
    <section>
      <h2>Students of Hogwarts</h2>
      <ul className="cards">
        {arrayOfComponents}
      </ul>
    </section>
  )
}

export default GreatHall;
