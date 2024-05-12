import '../navbar/NavbarStyles.css'
import Item from '../options-navbar/Items';

const Navbar = () =>{
    return <div className='navbar-content'>
        <Item namePage={'Inicio'}></Item>
        <Item namePage={'Acerca de mi'}></Item>
        <Item namePage={'Estudios'}></Item>
        <Item namePage={'Certificaciones'}></Item>
        <Item namePage={'Contactos'}></Item>
    </div>
}


export default Navbar;