import React from 'react';
import PropTypes from 'prop-types';
import '../css/third-component.css'

class ThirdComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log('enhanced props are: ', props);
        this.state = {
            name: 'pratik',
            age: 27
        }
    }
    render() {
        return (
            <div className='container'>Third Component</div>
        )
    }
}
ThirdComponent.propTypes = {
    prop1: PropTypes.string,
    prop2: PropTypes.number.isRequired,
    prop3: PropTypes.func,
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        surname: PropTypes.string
    }).isRequired
};


export default ThirdComponent;