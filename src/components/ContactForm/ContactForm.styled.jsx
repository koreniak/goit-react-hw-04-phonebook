import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const ContForm = styled(Form)`
  display: flex;
  width: 400px;
  margin-left: 4px;
  margin-bottom: 12px;
  padding: 8px;
  flex-direction: column;
  gap: 8px;
  border: 1px solid #8E8F99;
  border-radius: 4px;
`;

export const Input = styled(Field)`
  width: 100%;
  padding: 10px 12px;

  line-height: 1.12;
  letter-spacing: 0.01em;

  color: #191970;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  outline: none;

  &:focus {
		border-color: #404BBF;
	}
`;

export const SubmitButton = styled.button`
  width: 160px;
  padding: 8px 16px;

  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.04em;
  text-align: center;
	text-transform: capitalize;

  cursor: pointer;

  background-color: #4D5AE5;
  color: #F4F4FD;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

	&:hover {
		background-color: #404BBF;
	}
`;

export const Error = styled(ErrorMessage)`
  font-size: 12px;
  font-weight: 700;
  line-height: 1.12;
  color: #9B0909;
  padding: 8px;
`;