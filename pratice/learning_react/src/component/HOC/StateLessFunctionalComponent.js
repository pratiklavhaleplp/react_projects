import React, { memo } from 'react';
import PropTypes from 'prop-types';

const StateLessFunctionalComponent = memo(({ innerWidth }) => {
    console.log(innerWidth);
    return (
        <div>
            State Less Component
        </div>
    )
});


StateLessFunctionalComponent.propTypes = {
    innerWidth: PropTypes.number
}

export default StateLessFunctionalComponent;
