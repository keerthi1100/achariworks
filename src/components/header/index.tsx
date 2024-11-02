import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Header=({ name, icon })=> {
    return (
        <div className='header-wrapper'>
            <span className='header-title'>{name}</span>
        </div>
    )
};

Header.propTypes = {
    name: PropTypes.string
};

Header.defaultProps = {
    name: 'Achariworks.com'
}

export default Header;
