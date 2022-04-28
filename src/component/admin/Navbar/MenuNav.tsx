import { createUseStyles } from 'react-jss'
import React, {PropsWithChildren, useEffect} from 'react'
import { Link,useHistory  } from "react-router-dom"

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
    const classes = useStyles()
    const history = useHistory()
    const renderActiveMenu=(pathCurrent: string)=>pathCurrent===pathname? `active cursor font-weight-bold ${classes.bgBrown} `:''


    const logout = () => {
        history.push('/')
    }
    return (
        <>
        <nav className={`nav flex-column shadow-sm p-3 bg-white ${classes.nav}`}>
            <Link className={`nav-link d-flex ${classes.menu} ${renderActiveMenu('/admin')}`} to='/admin' style={{backgroundColor:"white",color:"#444"}}>
                <span className="material-icons-outlined mr-2">dashboard</span> Dashboard
            </Link>
            <Link className={`nav-link d-flex ${classes.menu} ${renderActiveMenu('/admin/MedicalCenter')}`} to='/admin/MedicalCenter' style={{backgroundColor:"white",color:"black"}}>
                <span className="material-icons-outlined mr-2">medical_services</span>Medical Center
            </Link>
            {/* <Link className={`nav-link ${classes.menu} ${renderActiveMenu('/admin/grouplist')}`} to='/admin/grouplist' style={{backgroundColor:"white",color:"black"}}>
            Group
            </Link> */}
            <Link className={`nav-link d-flex ${classes.menu} ${renderActiveMenu('/admin/questionnaire')} text-dark `} to='/admin/questionnaire' style={{backgroundColor:"white",color:"black"}}>
                <span className="material-icons-outlined mr-2">quiz</span> Questionnaire
            </Link>
            <Link className={`nav-link d-flex ${classes.menu} ${renderActiveMenu('/admin/participant')} text-dark `} to='/admin/participant' style={{backgroundColor:"white",color:"black"}}>
                <span className="material-icons-outlined mr-2">question_answer</span>Answer
            </Link>
            <Link className={`nav-link d-flex ${classes.menu} ${renderActiveMenu('/admin/report')} text-dark `} to='/admin/report' style={{backgroundColor:"white",color:"black"}}>
            <span className="material-icons-outlined mr-2">analytics</span>Report
            </Link>
            <div className={`flex-grow ${classes.flex1}`}></div>
            <Link className={`nav-link d-flex ${classes.menu} ${renderActiveMenu('/')} text-dark `} to='/' style={{backgroundColor:"white",color:"black"}} onClick={logout}>
                <span className="material-icons-outlined mr-2">logout</span>Logout
            </Link>
        </nav>
        </>
    )

}
export default MenuNav