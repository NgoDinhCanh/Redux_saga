import { Link } from "react-router-dom";

// material-ui
import { ButtonBase } from "@mui/material";

// project import
import Logo from "./Logo";
import config from "configs/config";

// ==============================|| MAIN LOGO ||============================== //
interface LogoSectionProps {
  sx?: object;
  to?: string;
}
const LogoSection = ({ sx, to }: LogoSectionProps) => (
  <ButtonBase
    disableRipple
    component={Link}
    to={!to ? config.defaultPath : to}
    sx={sx}
  >
    <Logo />
  </ButtonBase>
);
export default LogoSection;
