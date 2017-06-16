import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchData as fetchAction } from './../redux/actions';

const Form = ({ fetchData }) => (
  <div>
    <form className="form" onSubmit={(e) => { e.preventDefault(); }} >
      <div className="form__search-field">
        <label className="form__hidden" htmlFor="text">Search</label>
        <input
          id="text"
          type="text"
          autoFocus
          placeholder="Start typing"
          onChange={(e) => { fetchData(e.target.value); }}
        />
        <a
          href="http://en.wikipedia.org/wiki/Special:Random"
          target="_blank"
          rel="noopener noreferrer"
          className="button button-pink"
        >
          <i className="ion-shuffle" />
        </a>
      </div>
    </form>
  </div >
);

Form.propTypes = {
  fetchData: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  fetchData: searchText => dispatch(fetchAction(searchText)),
});

export default connect(null, mapDispatchToProps)(Form);
