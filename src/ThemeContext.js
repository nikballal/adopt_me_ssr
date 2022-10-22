//managing state using 'context'
import { createContext } from "react";

// using 'context', we want to mic -- const [theme, setTheme]  = useState('darkblue') --

const ThemeContext = createContext(["green", () => {}]);

export default ThemeContext;
