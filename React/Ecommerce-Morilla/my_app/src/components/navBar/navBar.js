/* CUSTOMS STYLES */ 
import './navBar.css';
/* MATERIAL UI */
import {AppBar, Toolbar, Typography, IconButton, InputBase} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';



const NavBar = () => {
  return (
    <div>
        {/* Header */}
        <AppBar position="fixed" className="NavBar">
            {/* Div donde vamos a poner todos los componentes del nav bar */}
            <Toolbar className="Toolbar">
                {/* Sirve para poner textos, en este caso vamos poner un logo */}
                <Typography variant="h6">
                    LOGO
                </Typography>

                <div className="search-container">
                    <div className="search-icon">
                        <SearchIcon />
                    </div>
                    <InputBase
                        className="search-input"
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                 </div>

                <ul className="Toolbar__menu">
                    <li className="Toolbar__menu__item">
                        {/* Sirve para hacer un botn que sea un icono */}
                        <IconButton className="Toolbar__menu__item__iconBtn">
                            {/* Es el icono que va a servir como boton */}
                            <AccountCircleIcon className="iconBtn__icon" />
                        </IconButton>
                    </li>
                    <li className="Toolbar__menu__item">
                        <IconButton className="Toolbar__menu__item__iconBtn">
                            <ShoppingCartIcon className="iconBtn__icon" />
                        </IconButton>
                    </li>
                </ul>
            </Toolbar>
        </AppBar>

    </div>
  );
}

export default NavBar;


