import  styles from './NavbarStyles.module.css'
import Item from  '../options-navbar/Items';


const Navbar = () =>{
    return <div className={styles.navbar}>
        <Item namePage={'Home'}></Item> 
        <Item namePage={'About me'}></Item>
        <Item namePage={'Projects'}></Item>
        <Item namePage={'Certifications'}></Item>
        <Item namePage={'Contact me'}></Item>
    </div>
}


export default Navbar;