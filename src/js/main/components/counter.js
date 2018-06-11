import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as Actions from '../actions/actions';

const Counter = ({
    count, increment, decrement, reset,
}) => (
    <div>
        <style jsx>
            {`
                div {
                    padding: 0 0 20px 0;
                }
            `}
        </style>
        <h1>
            Count: <span>{count}</span>
        </h1>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <button onClick={reset}>Reset</button>
    </div>
);

Counter.propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
};

const mapStateToProps = ({ count }) => ({ count });
const mapDispatchToProps = dispatch => ({
    increment: () => dispatch(Actions.increment()),
    decrement: () => dispatch(Actions.decrement()),
    reset: () => dispatch(Actions.reset()),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Counter);
