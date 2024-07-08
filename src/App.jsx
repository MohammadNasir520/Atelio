import ManiLayout from "./layouyt/ManiLayout"

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <div>
      <ManiLayout></ManiLayout>
    </div>
  )
}

export default App
