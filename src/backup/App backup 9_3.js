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
              <th>ch02</th>
              <th>ch03</th>
            </tr>
            <tr>
              <td>
                <ul>
                  <li><Link to = '/let_const'>let & const 실습</Link></li>
                  <li><Link to = '/template_string'>template String</Link></li>
                  <li><Link to = '/make_subject_list'>List 표시</Link></li>
                  <li><Link to = '/make_function'>Function</Link></li>
                  <li><Link to = '/arrow_function'>Arrow function</Link></li>
                  <li><Link to = '/array_map'>Array</Link></li>
                  <li><Link to = '/spread_operator'>Spread</Link></li>

                </ul>
              </td>
            </tr>

          </table>

          {/*라우터 모음*/}
          <AppRouters/>
        
        </div>
    );
}
export default App;