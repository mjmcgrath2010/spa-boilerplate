import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { defaultAction } from './actions';

class AdminContainer extends Component {
    render () {
        return (
            <div id="admin-container">
                <h1>Wha Mcs</h1>
                <p>Yes Mike</p>
                <button onClick={this.props.defaultAction}>Click</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    admin: state.admin,
});

const mapDispatchToProps = dispatch => ({
    dispatch,
    defaultAction: () => dispatch(defaultAction()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AdminContainer);
