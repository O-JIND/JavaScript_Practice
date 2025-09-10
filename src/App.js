import { Link } from 'react-router-dom';

import AppRouters from './routes/AppRoutes'
import { menuData } from './routes/menudata'

import './style/App.css';

function App() {
  return (

    <div className="App">
      <h1>React Example Navigation</h1>

      <table border="1">
        <thead>
          <tr>
            {menuData.map((ch, index) => (
              <th key={index}>{ch.chapter}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {menuData.map((ch) => (
              <td key={ch.chapter}>
                <ul>{ch.items.map((pa) =>
                  <li key={pa.path}>
                    <Link to={pa.path}>{pa.label}</Link>
                  </li>
                )}
                </ul>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      {/*라우터 모음*/}
      <AppRouters />

    </div>
  );
}
export default App;