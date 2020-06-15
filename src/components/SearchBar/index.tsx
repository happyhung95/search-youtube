/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React, { useState } from 'react';

interface Props {
  onFormSubmit: Function;
}

const SearchBar: React.FC<Props> = ({ onFormSubmit }) => {
  const [term, setTerm] = useState<string>('');

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTerm(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label htmlFor="video-search">
            Video Search
            <input
              id="video-search"
              type="text"
              value={term}
              onChange={onInputChange}
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
