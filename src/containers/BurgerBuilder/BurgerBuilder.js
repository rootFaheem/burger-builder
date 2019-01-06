import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

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
            bacon: 1,
            salad: 1,
            cheese: 2,
            meat: 2
            
        }
    }

    render () {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;