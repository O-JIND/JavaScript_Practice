function App(){
    let header = 'IT 과목'
    let sub = ['java','react','html','javascript','bootstrap','oracle']

    let result = '';
    result += `<h1>${header}</h1>\n`
    result += `<ul>\n`
    for(const item of sub){
        result += `<li>${item}</li>\n`
    }
    result += `</ul> `
    console.log(result);

    let header2 = 'beverage'
    let sub2 = ['Coke','Cider','Highball','Blended whisky','Milk tea','jack Coke']

    let result2 = '';
    result2 += `<h1>${header2}</h1>\n`
    result2 += `<ol>\n`
    for(const item2 of sub2){
        result2 += `<li>${item2}</li>\n`
    }
    result2 += `</ol> `
    return (
        <div className = "App">
            {/* {보안 XSS 공격 때문에 기본적으로 모든내용을 문자열로 보여준다.} */}
            {/* {문자열 형식으로 HTML, 태그 형태로 렌더링하기} */}
            <div dangerouslySetInnerHTML={{__html : result}}/>
            <div dangerouslySetInnerHTML={{__html : result2}}/>
                
        </div>
    );
}
export default App;