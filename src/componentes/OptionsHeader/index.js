import styled from 'styled-components';

const optionsText = ['CATEGORIES', 'MY BOOKSHELF', "FAVORITES"];

const Options = styled.ul`
  display: flex;
`

const Option = styled.li`
  min-width: 120px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
`

function OptionsHeader() {
    return (
        <Options>
          { optionsText.map( (text) => (
            <Option><p>{text}</p></Option>
          ) ) }
        </Options>
    )
}

export default OptionsHeader