import PropTypes from 'prop-types';
import { DeleteButton } from "./ContacItem.styled";
import { ContItem } from './ContacItem.styled';


const ContactItem = ({ name, number, onDeleteContact }) => (
  <ContItem>
    <p>{name}: {number}</p>
    <DeleteButton type="button" onClick={onDeleteContact}>Delete</DeleteButton>
  </ContItem>
);

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired
};

export default ContactItem;