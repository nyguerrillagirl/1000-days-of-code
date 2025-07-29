import React from 'react';
import PropTypes from 'prop-types';
import './UserList.css';

const User = ({ id, name, email, isActive, toggleActivity }) => {
    return (
        <div className="user-card">
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p className="user-card-status">Status: {isActive ? 'Active' : 'Inactive'}</p>
            <button className={`user-card-button ${isActive ? 'deactivate' : 'activate'}`} 
                onClick={() => toggleActivity(id)}>
            {isActive ? 'Deactivate' : 'Activate'}
            </button>
        </div>
    );
}

User.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
    toggleActivity: PropTypes.func.isRequired
};

User.defaultProps = {
    isActive: false,
};

export default User;