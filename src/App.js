import logo from './logo.svg';
import './App.css';
import SignUp from './Components/SignUp';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    "fontFamily": 'Merriweather Sans, sans-serif',
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <SignUp />
      </div>
    </ThemeProvider>

  );
}

export default App;
