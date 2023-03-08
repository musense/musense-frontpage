import React from "react";
import { Link } from "react-router-dom";

export default function BtnMarketing({name, to}) {
  return <Link className={`btn-marketing ${name}`} to={to} />;
}
