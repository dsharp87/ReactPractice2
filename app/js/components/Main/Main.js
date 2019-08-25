import React from 'react';
import { Link } from 'react-router'
import ProductProfile from '../Products/ProductProfile'
import PRODUCTS from '../../../../mock-products'
import styles from './Main.css';

export default class Home extends React.Component {
    constructor() {
        super();
    }

    render() {
        let randomProduct = Math.floor(Math.random() * PRODUCTS.length)
        const { background, header, divider } = styles;
        return (
            <div>
                <div className={background}>
                </div>
                <div className={header}>
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <ul>
                        <li>fdsjjk fdsjk ifslnf slkjlkfdslkjkld</li>
                        <li>fkj fjksdpo fjfmlxvc  gl;s;leo</li>
                        <li>qpoiwpe spoklm;, ;lkseof  ;kjs;lkd;s;;sdj;kf</li>
                    </ul>
                </div>
                <div className={divider}></div>
                <ProductProfile  id={randomProduct}/>
                <Link to={`/products/${randomProduct}`}>Click here for more</Link>
                <p>
                    fdslkjj;jgfd gjkflds;jgf;ldjgd;lsk klj;lkdjkl;fjsg jgkfldkgfdjs;ldjkgl; jiowajfioawjf iew iefwj;oi; fewia;fewiji;li;a;  jfiewa;l
                </p>
                <div className={divider}></div>
            </div>
        )
    }
}

