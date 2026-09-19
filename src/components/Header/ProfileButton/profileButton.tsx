import style from "./profileButton.module.css";
import { croppedNikname } from "../../../system/utils/croppedNikname";
import { User } from "lucide-react";

interface ProfileButtonProps {
  name?: string;
}

export const ProfileButton = ({ name }: ProfileButtonProps) => {
  const displayName = name ? croppedNikname(name) : "Name";
  return (
    <button type="button" className={style.profile_button}>
      <User className={style.profile_icon_avatar}/>
      <span className={style.profile_text_button}>{displayName}</span>
    </button>
  );
};
