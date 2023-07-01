import PropTypes from 'prop-types';
import { FilterField, FilterInput } from "./Filter.styled";

const Filter = ({ value, onChange }) => {
  return <FilterField>
          Find contacts by name
          <FilterInput type="text" value={value} onChange={onChange} />
        </FilterField>
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Filter;