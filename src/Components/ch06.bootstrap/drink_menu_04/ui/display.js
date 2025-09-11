import { useState } from "react";
import { Table } from "react-bootstrap";
import '../css/Display.css'

function App({ product }) {

    return (
        <div className="myTable">
            <Table >
                <tbody>
                    <tr>
                        <td align="center" >table
                            <Table className="myeft " width="30%">
                                <tbody>
                                    <tr>
                                        <td>id</td>
                                        <td>{product.id}</td>
                                    </tr>
                                    <tr>
                                        <td>name</td>
                                        <td>{product.name}</td>
                                    </tr>
                                    <tr>
                                        <td>price</td>
                                        <td>{Number(product.price).toLocaleString()}</td>
                                    </tr>
                                    <tr>
                                        <td>category</td>
                                        <td>{product.category}</td>
                                    </tr>
                                    <tr>
                                        <td>stock</td>
                                        <td>{product.stock}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </td>
                        <td className="mymiddle" align="center" width="30%">
                            <img className="Imagin" src={`${product.image}`} height='300' alt={product.name} />
                        </td>
                        <td className="mydescription" width="40%" align="center" >{product.description}</td>

                    </tr>
                </tbody>
            </Table>
        </div>
    )
        ;
}
export default App;