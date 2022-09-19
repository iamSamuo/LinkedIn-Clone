import React from "react";
import "./HeaderOptions.css";
import { Avatar } from "@mui/material";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";

function HeaderOptions({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className="headeroptions">
      {Icon && <Icon className="headeroptions__icon" />}
      {avatar && (
        <Avatar className="headeroptions__icon" src={user?.photoUrl}>
          {user?.email[0].toUpperCase()}
        </Avatar>
      )}
      <h3 className="headeroption__title">{title}</h3>
    </div>
  );
}

export default HeaderOptions;
