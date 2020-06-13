import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Input, Button } from 'antd';
import { Actions } from './User.Redux';

function ReduxComponent(props) {
    const {
        name, age, address, ChangeName, ChangeAge, ChangeAddress, AsycChangeName,
    } = props;

    const [ inputType, setInputType ] = useState(null);
    const [ inputState, setInputState ] = useState(null);

    const handleTypeChange = (e) => {
        setInputType(e.target.value);
    };

    const handleContextChange = (e) => {
        setInputState(e.target.value);
    };

    const handleClick = () => {
        switch (inputType) {
            case 'ModifyName':
                ChangeName(inputState);
                break;
            case 'ModyfyAge':
                ChangeAge(inputState);
                break;
            case 'ModifyAddress':
                ChangeAddress(inputState);
                break;
            default:
                break;
        }
    };

    const handleAsycClick = () => {
        AsycChangeName(inputState);
    }

    return (
        <div>
            <p>redux information:</p>
            <p>name: { name } </p>
            <p>age: { age } </p>
            <p>address: { address } </p>
            <Input value={ inputType } onChange={ handleTypeChange } />
            <Input value={ inputState } onChange={ handleContextChange } />
            <Button type="primary" onClick={ handleClick }>Submit</Button>
            <Button type="primary" onClick={ handleAsycClick }>Asyc ChangeName</Button>
        </div>
    )
}

ReduxComponent.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
    ChangeName: PropTypes.func,
    ChangeAge: PropTypes.func,
    ChangeAddress: PropTypes.func,
    AsycChangeName: PropTypes.func,
};

const mapStatetoProps = (state) => (
    {
        name: state.name,
        age: state.age,
        address: state.address,
    }
);

const mapDispatchtoProps = (dispatch) => (
    {
        ChangeName: (...args) => dispatch(Actions.modifyName(...args)),
        ChangeAge: (...args) => dispatch(Actions.modifyAge(...args)),
        ChangeAddress: (...args) => dispatch(Actions.modifyAddress(...args)),
        AsycChangeName: (...args) => setTimeout(() => dispatch(Actions.modifyName(...args)), 2000),
    }
);

export default connect(mapStatetoProps, mapDispatchtoProps)(ReduxComponent);
