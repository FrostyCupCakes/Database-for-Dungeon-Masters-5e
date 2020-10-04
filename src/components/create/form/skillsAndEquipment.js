import React from 'react';
import {FormListSelect, FormMultipleOptions} from './formMisc';
const classes = require('../../../data/classes.json');

class ChooseSkillsAndEquipment extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            classChosen: 'Barbarian'
        }
    };
    handleSkills = (list) => {
        console.log(list);
    }
    render() {
        return (
        <div className="createPage">
            <div className="create__col">
                <button onClick={this.props.handleNext}>Back</button>
            </div>
            <div className="create__col">
                <FormListSelect 
                max={classes[this.state.classChosen]["Proficiencies"]["Skills"]["Amount"]} 
                list={classes[this.state.classChosen]["Proficiencies"]["Skills"]["Options"]} 
                updateSelected={this.handleSkills}
                />
            </div>
            <div className="create__col">
                <FormMultipleOptions 
                list={classes[this.state.classChosen]["Equipment"]["options"]}
                />
            </div>
        </div>)

    }

}
export default ChooseSkillsAndEquipment; 