import PropTypes from 'prop-types';
import { ContList } from "./ContactList.styled";
import ContactItem from '../ContactItem';

const ContactList = ({ options, onDeleteContact }) => {
  return <ContList>{options.map(({ id, name, number }) =>
            <li key={id}>
              <ContactItem
                name={name}
                number={number}
                onDeleteContact={() => onDeleteContact(id)}
              />
            </li>)}
        </ContList>
};

ContactList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  })),
  onDeleteContact: PropTypes.func.isRequired
};

export default ContactList;