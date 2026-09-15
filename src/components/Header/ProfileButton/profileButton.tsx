import style from "./profileButton.module.css";
import {croppedNikname} from '../../../system/utils/croppedNikname'

interface ProfileButtonProps {
  name?: string;
}

export const ProfileButton = ({ name }: ProfileButtonProps) => {
    const displayName = name ? croppedNikname(name) : "Name"
  return (
    <button type="button" className={style.profile_button}>
      <span>{displayName}</span>
    </button>
  );
};
