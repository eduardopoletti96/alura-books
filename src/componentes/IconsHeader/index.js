import profile from '../../images/perfil.svg';
import bag from '../../images/sacola.svg';
import styled from 'styled-components';

const Icon = styled.li`
  margin-right: 40px;
    width: 25px;;
`

const Icons = styled.ul`
  display: flex;
    align-items: center;
    justify-content: center;
`

const icons = [profile, bag];

function IconsHeader() {
    return (
        <Icons>
          { icons.map( (icon)  => (
            <Icon><img src={icon}></img></Icon>
          ))}
        </Icons>
    )
}

export default IconsHeader