import React,{Component} from 'react';
import classes from './PlaceOrderForm.css';

class PlaceOrderForm extends Component{
    render(){
        return(

            <div className="row" style={{marginLeft:'0%',marginRight:'0%'}}>
                <div style={{backgroundColor:'green',width:'100%',height:'20px'}}>

                </div>
                <div className="row" style={{backgroundColor:'red',width:'100%',height:'20px',marginLeft:'0%',marginRight:'0%'}}>
                    <div style={{backgroundColor:'yellow'}} className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                        car
                    </div>
                    <div style={{backgroundColor:'blue'}} className="col-12 col-sm-9 col-md-9 col-lg-9 col-xl-9">
                        van
                    </div>
                </div>
            </div>
        );
    }
}

export default PlaceOrderForm;