import Logo from "@/assets/logo.png";
import HelloWorld from "@/components/HelloWorld/HelloWorld";
import Paper from "@mui/material/Paper";
import styles from "./App.module.css";
import AcUnit from "@mui/icons-material/AcUnit";

export default function App() {
  return (
    <main className={styles.main}>
      <Paper>
        <img
          className={styles.logo}
          alt="React logo"
          width="400px"
          src={Logo}
        />
        <HelloWorld msg="Hello React + TypeScript + Vite" />
        <AcUnit />
      </Paper>
    </main>
  );
}
