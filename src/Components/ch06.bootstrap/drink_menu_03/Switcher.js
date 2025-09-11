import { useState } from "react";
import Display from "./ui/display.js";
import CreateContent from "./ui/CreateContent.js";
import AddCategory from "./crudfun/addcategory.js";
import Createone from "./crudfun/createone.js";
import Deleteone from "./crudfun/deleteone.js";
import Updateone from "./crudfun/updateone.js";

function App({ mode, productitem, onSubmitInsert }) {

    const sub = (formData) => {
        onSubmitInsert(formData);
    }





    switch (mode) {
        case 'detail':
            return <Display product={productitem} />;
        case 'Create':
            return <Createone onSubmitInsert={sub} />;
        case 'Delete':
            return <Deleteone onSubmitInsert={sub} />;
        case 'Update':
            return <Updateone onSubmitInsert={sub} />;
        case 'AddCatg':
            return <AddCategory onSubmitInsert={sub} />;


        case 'read':
            return <div />;


        default:
            return null;


    }


}
export default App;