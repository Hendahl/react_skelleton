/**
 * @author lars.hendahl@gmail.com,
 */

import React from "react";
import Typography from "@material-ui/core/Typography";
import Logo from "../../images/LogoHit.png";

const About = () => (
  <div style={{ textAlign: "center" }}>
    <Typography
      variant="headline"
      gutterBottom
      style={{ marginBottom: "4rem" }}
    >
      About Page
    </Typography>
    <Typography variant="body1" gutterBottom>
      Did you get here via Redux?
    </Typography>
    <img src={Logo} alt="logo" width="90%" />
  </div>
);

export default About;
