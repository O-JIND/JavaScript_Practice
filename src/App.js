import {Link} from 'react-router-dom';


import AppRouters from './routes/AppRoutes'
import {menuData} from './routes/menudata'

import './style/App.css';

function App(){
    return (
        <div className = "App">
          <h1>React Example Navigation</h1>
            <table border = "1">
              <tr>
                {menuData.map((ch)=>(
                  <th key = {ch.chapter}>{ch.chapter}</th>
                ))}
              </tr>
              <tr>
                {menuData.map((ch)=>(
                  <td key ={ch.chapter}>
                    <ul>{ch.items.map((pa)=>
                      <li key = {pa.path}>
                          <Link to = {pa.path}>{pa.label}</Link>
                      </li>
                      )}
                    </ul>
                  </td>
                ))}
              </tr>
            </table>
          {/*라우터 모음*/}
          <AppRouters/>
        
        </div>
    );
}
export default App;