import React from 'react'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const BreadCrumbs = () => {
    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
      }
    return (
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} style={{color:"white"}} aria-label="breadcrumb">
        <Link color="inherit" href="/" onClick={handleClick}>
          Home
        </Link>
        <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
        Graphic Design
        </Link>
        
      </Breadcrumbs>
    )
}

export default BreadCrumbs
