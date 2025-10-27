import Home from './pages/Home/Home';
import i18n from './i18n';
import { useEffect } from 'react';

function App() {
  const navLanguage = navigator.language;

  // const [language, setLanguage] = useState<string>(navigator.language);

  useEffect(() => {
    i18n.changeLanguage(navLanguage);
  }, [navLanguage]);

  return <Home />;
}

export default App;
