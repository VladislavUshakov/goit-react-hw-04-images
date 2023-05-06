import PropTypes from 'prop-types';
import {
  Header,
  SearchButton,
  SearchButtonInput,
  SearchForm,
} from './Searchbar.styles';
import { BsSearch } from 'react-icons/bs';

export const Searchbar = ({ onSubmit }) => (
  <Header>
    <SearchForm
      onSubmit={e => {
        e.preventDefault();
        const input = e.target.elements.search;
        onSubmit(input.value);
      }}
    >
      <SearchButton type="submit">
        <BsSearch />
      </SearchButton>

      <SearchButtonInput
        name="search"
        type="text"
        autocomplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </SearchForm>
  </Header>
);

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
