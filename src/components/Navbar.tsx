import { useState } from 'react';
import { Link } from 'react-router-dom'
// Nav Movil
import { Squash as Hamburger } from 'hamburger-react'
// Logo
import Logo from '../assets/img/logo.jpg'
// Icons
import { CiHeart } from "react-icons/ci";
import { BsCart4 } from "react-icons/bs";
// Estilos
import styles from './Navbar.module.css'


const Navbar = () => {
    // Estados Nav Movil
    const [isOpen, setOpen] = useState(false)

    // Función para alternar la visibilidad
    const toggleVisibility = () => {
        setOpen(!isOpen);
        console.log(isOpen)
    };


    return (
        <nav className={styles.cont_nav}>
            {/* Navbar Movil */}
            <button className={styles.hamb_btn} onClick={toggleVisibility}>
                <Hamburger size={22} toggled={isOpen} toggle={setOpen} />
            </button>

            {/* Logo SitioWeb */}
            <img className={styles.logo} src={Logo} alt="" />

            {/* LINKS */}
            < ul className={`${styles.cont_ul} ${isOpen ? styles.show : styles.hide}`}>
            <button className={`${styles.hamb_btn2} ${isOpen ? styles.show : styles.hide}`} onClick={toggleVisibility}>
                <Hamburger size={22} toggled={isOpen} toggle={setOpen} />
            </button>

                <li className={styles.cont_li}>
                    <Link className={styles.link} to={'/'}>Productos</Link>
                </li>
                <li className={styles.cont_li}>
                    <Link className={styles.link} to={'/'}>Descuentos</Link>
                </li>
                <li className={styles.cont_li}>
                    <Link className={styles.link} to={'/'}>Nosotros</Link>
                </li>
                <li className={styles.cont_li}>
                    <Link className={styles.link} to={'/'}>Contacto</Link>
                </li>
            </ul>

            {/* Iconos */}
            <div className={styles.cont_icons}>
                <button className={styles.btn_heart}>
                    <CiHeart size={28} />
                </button>
                <button className={styles.btn_cart}>
                    <BsCart4 size={28} />
                </button>
            </div>

        </nav >
    )
}

export default Navbar