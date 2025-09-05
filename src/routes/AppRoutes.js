import { Routes, Route } from 'react-router-dom';
//기본 라이브러리

//2장
//. 현재 위치 .. 상위폴더 ,/ 구분자
//import appname from filepath
import AppLetConst from '../Components/ch02.es6_syntax/let_const';
import AppTemplateString from '../Components/ch02.es6_syntax/Template_String';
import AppSubjectList from '../Components/ch02.es6_syntax/make_Subject_List';
import AppFunction from '../Components/ch02.es6_syntax/make_function';
import AppArrow from '../Components/ch02.es6_syntax/arrow_function';
import AppMap from '../Components/ch02.es6_syntax/array_map';
import AppSpread from '../Components/ch02.es6_syntax/spread_operator';

import AppClasstype from '../Components/ch03.react_component/component01';
import AppFunctiontype from '../Components/ch03.react_component/component02';
import AppSeperate from '../Components/ch03.react_component/component_seperate';
import AppProps from '../Components/ch03.react_component/use_props';
import AppFileseperator from '../Components/ch03.react_component/file_seperator';
import AppTable from '../Components/ch03.react_component/array_and_table01';
import AppTable22 from '../Components/ch03.react_component/array_and_table02';


import AppEvent from '../Components/ch04.event_handling/click_event';
import AppChange from '../Components/ch04.event_handling/change_event';
import AppMouse from '../Components/ch04.event_handling/mouse_event';
import AppKey from '../Components/ch04.event_handling/key_event';






import AppEventpb from '../Components/ch04.event_handling/pp/eventprob';

import AppPractice from '../MM/prac';


function AppRoutes() {
    return (
        <Routes>




            <Route path='/' element={<AppLetConst />} />
            <Route path='/let_const' element={<AppLetConst />} />
            <Route path='/Template_String' element={<AppTemplateString />} />
            <Route path='/make_Subject_List' element={<AppSubjectList />} />
            <Route path='/make_function' element={<AppFunction />} />
            <Route path='/arrow_function' element={<AppArrow />} />
            <Route path='/array_map' element={<AppMap />} />
            <Route path='/spread_operator' element={<AppSpread />} />


            <Route path='/component01' element={<AppClasstype />} />
            <Route path='/component02' element={<AppFunctiontype />} />
            <Route path='/component_seperate' element={<AppSeperate />} />
            <Route path='/file_seperator' element={<AppFileseperator />} />
            <Route path='/use_props' element={<AppProps />} />
            <Route path='/array_and_table01' element={<AppTable />} />
            <Route path='/array_and_table02' element={<AppTable22 />} />


            <Route path='/click_event' element={<AppEvent />} />
            <Route path='/change_event' element={<AppChange />} />
            <Route path='/mouse_event' element={<AppMouse />} />
            <Route path='/key_event' element={<AppKey />} />





            <Route path='/eventprob' element={<AppEventpb />} />
            <Route path='/prac' element={<AppPractice />} />

        </Routes>
    );
};
export default AppRoutes;