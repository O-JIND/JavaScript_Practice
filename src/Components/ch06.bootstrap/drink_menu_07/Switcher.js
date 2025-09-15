import { useState } from "react";
import Display from "./ui/display.js";
import CreateContent from "./ui/CreateContent.js";
import AddCategory from "./crudfun/addcategory.js";
import Createone from "./crudfun/createone.js";
import Updateone from "./crudfun/updateone.js";

function App({ mode, productitem, onSubmitInsert, onSubmitUpdate, onSubmitGetCatgry, categories }) {

    const sub = (formData) => {
        onSubmitInsert(formData);
    }
    const update = (formData) => {
        onSubmitUpdate(formData);
    }

    const catgry = (formData) => {
        onSubmitGetCatgry(formData);
    }



    switch (mode) {
        case 'detail':
            return <Display product={productitem} categories={categories} />;
        case 'Create':
            return <Createone onSubmitInsert={sub} categories={categories} />;
        case 'Update':
            return <Updateone onSubmitUpdate={update} product={productitem} categories={categories} />;
        case 'AddCatg':
            return <AddCategory onSubmitGetCatgry={catgry} categories={categories} />;
        case 'read':
            return <div />;
        default:
            return null;


    }


}
export default App;