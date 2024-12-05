import './style.css'

import profile from '../../images/perfil.svg';
import bag from '../../images/sacola.svg';

const icons = [profile, bag];

function IconsHeader() {
    return (
        <ul className='icons'>
          { icons.map( (icon)  => (
            <li className='icon'><img src={icon}></img></li>
          ))}
        </ul>
    )
}

export default IconsHeader