import Body from './components/Body';
import GlobalStyle from './theme/globalStyle';
import { AuthProvider } from './contexts/Auth';

import Router from './routes/app.routes';

export default function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Body>
        <Router />
      </Body>
    </AuthProvider>
  );
}
