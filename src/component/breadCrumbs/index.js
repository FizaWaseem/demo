import { Hidden, Typography } from "@material-ui/core";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const BreadCrumbs = ({ links }) => {
  return (
    <Hidden smDown>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />} style={{color:"white"}}
        aria-label="breadcrumb"
      >
        {links.map((link, index) => (
          <Link key={index+"breadcrumbs"}  style={{color:"white"}} href={link.path}>
            <Typography style={{color:"white"}} variant="h6">{link.text}</Typography>
          </Link>
        ))}
      </Breadcrumbs>
    </Hidden>
  );
};

export default BreadCrumbs;

