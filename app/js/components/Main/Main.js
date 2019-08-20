import React from 'react';
import { Link } from 'react-router'
import ProductProfile from '../Products/ProductProfile'
import PRODUCTS from '../../../../mock-products'

export default class Home extends React.Component {
    constructor() {
        super();
    }

    render() {
        let randomProduct = Math.floor(Math.random() * PRODUCTS.length)
        return (
            <div>
                <h2>Lorem ipsum dolor sit amet</h2>
                <ul>
                    <li>fdsjjk fdsjk ifslnf slkjlkfdslkjkld</li>
                    <li>fkj fjksdpo fjfmlxvc  gl;s;leo</li>
                    <li>qpoiwpe spoklm;, ;lkseof  ;kjs;lkd;s;;sdj;kf</li>
                </ul>

                <Link to={`/products/${randomProduct}`}><ProductProfile  id={randomProduct}/></Link>
                <p>
                    fdslkjj;jgfd gjkflds;jgf;ldjgd;lsk klj;lkdjkl;fjsg jgkfldkgfdjs;ldjkgl; jiowajfioawjf iew iefwj;oi; fewia;fewiji;li;a;  jfiewa;l
                </p>
            </div>
        )
    }
}

