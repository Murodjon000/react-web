import styled  from 'styled-components'
import {Container} from '../../globalStyles'
import {FaMagento} from 'react-icons/fa'
import {Link} from 'react-router-dom'



export const Nav=styled.nav`
background:#101522;
height:80px;
display:flex;
justify-content:center;
align-items:center;
position:sticky;
font-size:1.2rem;
top:0;
z-index: 999;
`
export const NavbarContainer=styled(Container)`
display:flex;
justify-content:space-between;
height:80px;

${Container}
`

export const NavLogo=styled(Link)`
color: #fff;
display:flex;
justify-self:flex-start;
align-items:center;
text-decoration:none;
cursor:pointer;
font-size:2rem;
`

export const NavIcon=styled(FaMagento)`
margin-right:0.5rem;

`

export const MobileIcon=styled.div`
display:none;

@media screen and (max-width:960px){
    display:block;
    font-size:1.8rem;
    cursor:pointer;
    top:0;
    right:0;
    position:absolute;
    transform:translate(-100%,60%)
}

`

export const NavMenu=styled.ul`
display:flex;
text-align:center;
align-items:center;
list-style:none;

@media screen and (max-width:960px){
    display:flex;
    flex-direction:column;
    width:100%;
    height:90vh;
    top:80px;
    position:absolute;
    left:${({click}) => (click? 0:'-100%')};
    opacity:1;
    transition:all 0.5s ease;
    background:#101522;

}

`
export const NavItem=styled.li`
height:80px;
border-bottom:2px solid transparent;

&:hover{
    border-bottom:2px solid #4b59f7;
}

@media screen and (max-width:960px){
    width:100%;

&:hover{
        border:none;
    }
}
`

export const NavLinks=styled(Link)`
color:#fff;
display:flex;
align-items:center;
text-decoration:none;
padding:0.5rem 2rem;
height:100%;
 
@media screen and (max-width:960px){
    display:table;
    width:100%;
    text-align:center;
    padding:2rem;

&:hover{
color:#4b59f7;
transition:all 0.3s ease;
    }
  
} 
`
export const NavItemBtn=styled.li`
@media screen and (max-width:960px){
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:120px;
}
`
export const NavBtnLink=styled(Link)`
display:flex;
justify-content:center;
align-items:center;
text-decoration:none;
padding:8px 16px;
width:100%;
height:100%;
border:none;
outline:none;
`