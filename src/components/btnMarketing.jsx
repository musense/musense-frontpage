import React from "react";
import { Link } from "react-router-dom";

export default function BtnMarketing({name, to, title}) {
  return <Link title={title} className={`btn-marketing ${name}`} to={to} />;
}
