import React from 'react';

const Form = ({ searchHandler }) => {
  let searchText = null;
  const submitHandler = (e) => {
    e.preventDefault();
    searchHandler(searchText.value);
    searchText.value = '';
  };

  return (
    <div>
      <form className="form" onSubmit={submitHandler} >
        <div className="form__search-field">
          <a
            href="http://en.wikipedia.org/wiki/Special:Random"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-pink"
          >
            <i className="ion-shuffle" />
          </a>

          <label className="form__hidden" htmlFor="text">Search</label>
          <input
            id="text"
            type="text"
            ref={(input) => { searchText = input; }}
            autoFocus
            placeholder="Search the wiki"
          />

          <button className="button button-pink" type="submit" >
            <i className="ion-ios-search-strong" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
