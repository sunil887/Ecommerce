import React, { Component } from 'react';
import axios from 'axios'
import Loader from '../../presentational/Loader/Loader'
import ProductCard from  '../../presentational/ProductCard/ProductCard'

import './Home.css'


class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            products:[],
            isLoading:false
        }
    }
    componentDidMount = () =>{
        axios.get('http://localhost:5000/api/products')
        .then( res =>{
            this.setState({products:res.data.products})
            console.log(res.data)
        })
        .catch(err =>{

            console.log("products occured here "  + err)
        })
    }

    render() { 
        const { products,isLoading } = this.state
        return (
                <div>
                    {
                        isLoading == false && <div>
                            <div className = 'home container'>
                                <div className = 'home-products container'>
                                    {console.log(products)}
                                    { products.length != 0 ?  products.map(product => <ProductCard key = { product.id} {...product}/> ) : null}
                                </div>
                            </div> 
                        </div>
                    }
                    {isLoading == true  && <Loader />}

                </div>
         );
    }
}
 
export default Home;