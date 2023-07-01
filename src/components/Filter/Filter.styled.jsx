import styled from '@emotion/styled';

export const FilterField = styled.label`
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

export const FilterInput = styled.input`
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