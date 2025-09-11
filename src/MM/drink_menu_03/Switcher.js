import { useState } from "react";
import Display from "./ui/display.js";

function App({ mode, productitem }) {
    switch (mode) {
        case 'detail':
            return <Display product={productitem} />;

        default:
            return null;


    }


}
export default App;