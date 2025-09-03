//export는 외부에서 참조가 가능하도록 길을 틔워줌.
export const menuData = [
        {
            chapter : "ch02.ECMAScript",
            items : [
                    { path : '/let_const',label : 'let & const 실습'},
                    { path : '/template_string',label : 'template String'},
                    { path : '/make_subject_list',label : 'List 표시'},
                    { path : '/make_function',label : 'Function'},
                    { path : '/arrow_function',label : 'Arrow'},
                    { path : '/array_map',label : 'Array'},
                    { path : '/spread_operator',label : 'Spread '}

            ]
        },
        { 
            chapter : "ch03.Components",
            items : [
                
                    {path : '/component01',label : 'class type component'},
                    {path : '/component02',label : 'funtion type component'},
                    {path : '/component_seperate',label : 'Seperate component'}
            ]
        },
        //add extra chapter

];