import { makeStyles } from "@material-ui/core";
import BackImage from "../../assests/images/image.png";
const SearchStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    borderRadius: "8px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: ".7rem",
    boxShadow: "0 0 64px rgb(32 39 34 / 20%)",
  },
  btn: {
    border: "2px solid #52bd2f",
    color: "#52bd2f",
    borderRadius: "32px",
    padding: ".3rem",
    width: "100%",
  },
  icon:{fontSize:"32px", color:"gray"},
}));

export default SearchStyle;
