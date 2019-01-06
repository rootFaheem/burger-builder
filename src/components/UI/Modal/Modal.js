import React from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Aux';
import Bakdrop from '../Backdrop/Backdrop';

const modal = (props) => (
    <Aux>
        <Bakdrop show={props.show} clicked={props.modalClosed} />
        <div
            className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Aux>
);

export default modal;