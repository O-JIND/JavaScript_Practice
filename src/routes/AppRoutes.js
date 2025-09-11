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

//3장
import AppClasstype from '../Components/ch03.react_component/component01';
import AppFunctiontype from '../Components/ch03.react_component/component02';
import AppSeperate from '../Components/ch03.react_component/component_seperate';
import AppProps from '../Components/ch03.react_component/use_props';
import AppFileseperator from '../Components/ch03.react_component/file_seperator';
import AppTable from '../Components/ch03.react_component/array_and_table01';
import AppTable22 from '../Components/ch03.react_component/array_and_table02';

//4장
import AppEvent from '../Components/ch04.event_handling/click_event';
import AppChange from '../Components/ch04.event_handling/change_event';
import AppMouse from '../Components/ch04.event_handling/mouse_event';
import AppKey from '../Components/ch04.event_handling/key_event';
import AppSubmit from '../Components/ch04.event_handling/submit_event';


//5장
import AppHook1 from '../Components/ch05.hooks/use_state_01';
import AppHook2 from '../Components/ch05.hooks/use_state_02';
import AppHook2tc from '../Components/ch05.hooks/use_state_02tc';
import AppHook3 from '../Components/ch05.hooks/use_state_03';
import AppHook4 from '../Components/ch05.hooks/use_state_04';
import AppEffect1 from '../Components/ch05.hooks/use_effect_01';
import AppEffect2 from '../Components/ch05.hooks/use_effect_02';
import AppEffect3 from '../Components/ch05.hooks/use_effect_03';



//6장
import AppBoot from '../Components/ch06.bootstrap/drink_menu_01/main';
import AppBoot2 from '../Components/ch06.bootstrap/drink_menu_02/main';
import AppBoot3 from '../Components/ch06.bootstrap/drink_menu_03/main';




import AppEventpb from '../Components/ch04.event_handling/pp/eventprob';
import AppPractice from '../MM/prac';
import Appcc from '../MM/drink_menu_03/mainp';


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
            <Route path='/submit_event' element={<AppSubmit />} />







            <Route path='/use_state_01' element={<AppHook1 />} />
            <Route path='/use_state_02' element={<AppHook2 />} />
            <Route path='/use_state_02tc' element={<AppHook2tc />} />
            <Route path='/use_state_03' element={<AppHook3 />} />
            <Route path='/use_state_04' element={<AppHook4 />} />
            <Route path='/use_effect_01' element={<AppEffect1 />} />
            <Route path='/use_effect_02' element={<AppEffect2 />} />
            <Route path='/use_effect_03' element={<AppEffect3 />} />





            <Route path='/drink_menu_01' element={<AppBoot />} />
            <Route path='/drink_menu_02' element={<AppBoot2 />} />
            <Route path='/drink_menu_03' element={<AppBoot3 />} />



            <Route path='/eventprob' element={<AppEventpb />} />
            <Route path='/prac' element={<AppPractice />} />
            <Route path='/mainp' element={<Appcc />} />

        </Routes>
    );
};
export default AppRoutes;