import { Button } from "components";
import Image from "next/image";
import Logo from "./vercel.svg";
import styles from "./Header.module.css";

export interface HeaderProps {
  user?: {
    name: string;
  };
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}) => (
  <header>
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <Image src={Logo} alt="logo" width={100} />
      </div>
      <div>
        {user?.name !== "" ? (
          <div>
            Welcome: <span style={{ marginRight: 15 }}>{user?.name}</span>
            <Button size="small" onClick={onLogout} label="Log out" />
          </div>
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button
              primary
              size="small"
              onClick={onCreateAccount}
              label="Sign up"
            />
          </>
        )}
      </div>
    </div>
  </header>
);
