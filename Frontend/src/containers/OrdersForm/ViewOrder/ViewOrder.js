import React,{Component} from 'react';
import classes from './ViewOrder.css';
import {withRouter} from 'react-router-dom';
import axios from "../../../axios/axios-order";
import {connect} from "react-redux";
import * as actionCreators from "../../../store/actions";
import Button from "@material-ui/core/Button/Button";

const globalCustomerImagePath="http://localhost:8080/images/customer/";
const globalItemImagePath="http://localhost:8080/images/item/";

class ViewOrder extends Component{

    state={
        order:""
    }

    loadOrders=(id)=>{
        this.props.open();

        axios.get(`/order/`+id+`?action=find`)
            .then(response => {
                if(response.data!==null){
                    const order=response.data;

                    this.setState({
                        order:order
                    })
                    this.props.close();
                }else{
                    this.props.close();
                }
            })

            .catch(error => {
                this.props.error();
                console.log("error: " + error)
            });
    }

    componentDidUpdate(){
        console.log(this.state.order.oid)
        console.log(this.props.match.params.id)
        if(this.state.order.oid!==this.props.match.params.id){
            const id=this.props.match.params.id;
            this.loadOrders(id);
        }

    }

    componentDidMount(){
        const id=this.props.match.params.id;
        this.loadOrders(id)
    }

    render() {
        return (
            <div className={classes.Container}>
                <div className="row">
                    <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                        {
                            this.state.order!==''?<div className="w3-card-4" style={{width:'90%',marginLeft:'6%',marginTop:'8%'}}>
                                <img width="100%" height="130px" src={globalCustomerImagePath+""+this.state.order.customerDTO.image} alt={this.state.order.customerDTO.name}/>
                                <div style={{display:'flex',flexDirection:'column',justifyContent:'flex-start'}} className="w3-container w3-center">
                                    <p style={{fontWeight:'bold',fontSize:'13px'}}>{this.state.order.customerDTO.name}</p>
                                    <p style={{fontSize:'12px'}}>{this.state.order.customerDTO.address}</p>
                                </div>
                            </div>:null
                        }
                    </div>
                    <div className="col-12 col-sm-9 col-md-9 col-lg-9 col-xl-9">

                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        open:()=>dispatch(actionCreators.loaderOpen()),
        close:()=>dispatch(actionCreators.loaderClose()),
        load:()=>dispatch(actionCreators.loaderLoad()),
        done:()=>dispatch(actionCreators.loaderDone()),
        error:()=>dispatch(actionCreators.loaderError()),
    }
}

export default withRouter(connect(null,mapDispatchToProps)(ViewOrder));