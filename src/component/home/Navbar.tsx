import { createUseStyles } from 'react-jss'
import React, {PropsWithChildren} from 'react'
import { Link,useHistory  } from "react-router-dom"
import { useState } from 'react'

const useStyles = createUseStyles({
    menu:{
        fontSize: '16px'
    },
    bgBrown: {
        background: '#efefef !important'
    },
    flex1: {
        flex: 1
    },
    nav: {
        height: 'calc(100vh - 56px)'
    }
})
interface MenuNavProps {
      pathCurrent:any
    }

const MenuNav :React.FC<PropsWithChildren <MenuNavProps>> = () => {
    const { location : { pathname } } = useHistory()
    
    const [isDisplayMenu, toggleMenu] = useState(false)
    const classes = useStyles()
    const renderActiveMenu=(pathCurrent: string)=>pathCurrent===pathname? `active cursor font-weight-bold ${classes.bgBrown} `:''

    
    return (
        <>
         <nav className="navbar row navbar-expand-lg navbar-light px-lg-5 shadow-sm "  >
            <Link className="navbar-brand" to="/">
                <img src='/assets/img/logo.png' alt='logo' width='50px'  className='rounded-circle bg-white ' />
                
            </Link>
            <h6>BUMDES</h6>
            <button className="navbar-toggler" type="button" onClick={() => toggleMenu(!isDisplayMenu)}  >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`${isDisplayMenu ? '' : 'collapse'} navbar-collapse`} >
                <ul className="navbar-nav ml-auto">
                    <li className='nav-item' >
                        <Link className={`nav-link ${renderActiveMenu('/')}`} to='/'>
                           Beranda
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className={`nav-link ${renderActiveMenu('/produk')}`} to='/produk' >Produk</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className={`nav-link ${renderActiveMenu('/pariwisata')}`} to='/pariwisata' >Pariwisata</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className={`nav-link ${renderActiveMenu('/kegiatan')}`} to='/kegiatan' >Kegiatan</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className={`nav-link ${renderActiveMenu('/login')}`} to='/login' >Login</Link>
                    </li>
                </ul>
            </div>
            
        </nav>
        </>
    )

}
export default MenuNav