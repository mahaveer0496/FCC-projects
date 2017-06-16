import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// components---
import Form from './Form';
import ListItems from './ListItems';
import Spinner from './Spinner';

const App = ({ fetching }) => (
  <div>
    <Form />
    {fetching ? <Spinner /> : <ListItems />}
  </div>
);

App.propTypes = {
  fetching: PropTypes.bool.isRequired,
};
const mapStateToProps = state => ({
  fetching: state.fetching,
});

export default connect(mapStateToProps, null)(App);
