import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
    // constructor (props) {
    //     super(props);
    //     this.state = {
    //         ingredients: {

    //         }
    //     };
    // }
    //          OR
    state = {
        ingredients: {
            bacon: 0,
            salad: 0,
            cheese: 0,
            meat: 0
            
        }
    }

    render () {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls />
            </Aux>
        );
    }
}

export default BurgerBuilder;