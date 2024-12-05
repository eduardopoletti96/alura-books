import './style.css'

const optionsText = ['CATEGORIES', 'MY BOOKSHELF', "FAVORITES"];

function OptionsHeader() {
    return (
        <ul className='options'>
          { optionsText.map( (text) => (
            <li className='option'><p>{text}</p></li>
          ) ) }
        </ul>
    )
}

export default OptionsHeader