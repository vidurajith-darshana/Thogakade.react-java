import React,{Component} from 'react';
import classes from './CustomerForm.css';
import Button from '@material-ui/core/Button';
import FileUploader from "../../components/FileUploader/FileUploader";
import axiosCustomer from '../../axios/axios-customer';
import axiosUpload from '../../axios/axios-upload';

import {Modal} from "antd";
import {connect} from "react-redux";
import * as actionCreators from "../../store/actions";

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,

    },
    input: {
        display: 'none',
        border:'none',
        outline:'none'
    },
});

const globalImagePath="http://localhost:8080/images/customer/"

class CustomerForm extends Component{

    state={
        customers:[
            {id:1,name:"Vidurajith Darshana",address:"197/3,Temple Road, Kalutara North"},
            {id:2,name:"Tharindu Athukorala",address:"85/3,Koholana,Surupita"},
            {id:3,name:"Sandun Dilhan",address:"No:45/3,Hettimulla,Beruwala"},
            {id:4,name:"Denver Simonsz",address:"Wellatha,Bandaragama"},
            {id:5,name:"Janitha Dananjaya",address:"223/2,Ingiriya,Horana"},
            {id:6,name:"Binura Salindra",address:"No:23,Deniyaya,Mathara"},
            {id:7,name:"Reshan Maduka",address:"Imaduwa,Galle"}
        ],
        visible:false,
        name:'',
        address:''
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    // save customer function

    saveCustomer=()=>{

        const bodyFormData=new FormData();
        bodyFormData.set("file",this.props.imgFile[0].originFileObj);

        axiosUpload.post(`/customer`,bodyFormData)
            .then(response => {
                if(response.data.StatusCode!==500){
                    const customerObj={
                        id:0,
                        name:this.state.name,
                        address:this.state.address,
                        image:response.data
                    }
                    axiosCustomer.put(`/customer`,customerObj)
                        .then(response => {
                            if(response.data){
                                this.props.onHandleImageFiles([]);
                                this.setState({
                                    name:'',
                                    address:''
                                })
                            }else{
                                alert("fail!");
                            }
                        })

                        .catch(error => {
                            console.log("error: " + error)
                        });
                }
            })

            .catch(error => {
                console.log("error: " + error)
            });

    }

    render(){

        const { fullScreen } = this.props;

        let count=0;
        const cards=this.state.customers.map((customer,index)=>{
            count++;
            if(this.state.customers.length===count){
                return(
                    <div key={index} style={{marginTop:'2%',marginBottom:'2%'}} className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                        <div className="w3-card-4" style={{width:'90%',marginLeft:'6%'}}>
                            <img width="100%" src="https://www.w3schools.com/w3css/img_snowtops.jpg" alt="Norway"/>
                            <div style={{display:'flex',flexDirection:'column',justifyContent:'flex-start'}} className="w3-container w3-center">
                                <p style={{fontWeight:'bold'}}>{customer.name}</p>
                                <p style={{fontSize:'12px'}}>{customer.address}</p>
                                <div className={classes.ButtonRow}>
                                    <Button onClick={this.showModal} style={{border:'none',outline:'none',fontWeight:'bold'}} color="primary" className={styles.button}>
                                        update
                                    </Button>
                                    <Button style={{border:'none',outline:'none',fontWeight:'bold'}} color="secondary" className={styles.button}>
                                        Delete
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }else{
                return(
                    <div key={index} style={{marginTop:'2%'}} className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                        <div className="w3-card-4" style={{width:'90%',marginLeft:'6%'}}>
                            <img width="100%" src="https://www.w3schools.com/w3css/img_snowtops.jpg" alt="Norway"/>
                            <div style={{display:'flex',flexDirection:'column',justifyContent:'flex-start'}} className="w3-container w3-center">
                                <p style={{fontWeight:'bold'}}>{customer.name}</p>
                                <p style={{fontSize:'12px'}}>{customer.address}</p>
                                <div className={classes.ButtonRow}>
                                    <Button onClick={this.showModal} style={{border:'none',outline:'none',fontWeight:'bold'}} color="primary" className={styles.button}>
                                        update
                                    </Button>
                                    <Button style={{border:'none',outline:'none',fontWeight:'bold'}} color="secondary" className={styles.button}>
                                        Delete
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        })

        const cardSet=<div className="row">{cards}</div>

        const updateForm=<Modal
            title="Update Customer"
            footer={null}
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
        >
            <div className={classes.AddImage}>

                <FileUploader/>

            </div>

            <div className={classes.AddName}>

                <div>Name</div>
                <div><input type="text" style={{marginLeft:'-2%'}}/></div>

            </div>

            <div className={classes.AddAddress}>

                <div>Address</div>
                <div><input type="text"/></div>

            </div>

            <div className={classes.updateDiv}>
                <Button style={{border:'none',outline:'none'}} color="primary" className={styles.button}>
                    Update Customer
                </Button>

            </div>
        </Modal>;

        return(

            <div className={classes.Container}>
                {updateForm}
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <div className="row" style={{marginLeft:'0px',marginRight:'0px'}}>
                            <div className={classes.Add}>
                                <div className={classes.AddContainer}>
                                    <h5>Add New Customer</h5>
                                    <div className="w3-panel w3-card-2" style={{marginBottom:'10%',width:'95%',display:'flex',flexDirection:'column',justifyContent:'flex-start'}}>

                                        <div className={classes.AddImage}>

                                            <FileUploader/>

                                        </div>

                                        <div className={classes.AddName}>

                                            <div>Name</div>
                                            <div><input value={this.state.name} onChange={(event)=>this.setState({name:event.target.value})} type="text"/></div>

                                        </div>

                                        <div className={classes.AddAddress}>

                                            <div>Address</div>
                                            <div><input value={this.state.address} onChange={(event)=>this.setState({address:event.target.value})} type="text"/></div>

                                        </div>

                                        <div className={classes.saveDiv}>
                                            <Button onClick={this.saveCustomer} style={{border:'none',outline:'none'}} color="primary" className={styles.button}>
                                                Save Customer
                                            </Button>

                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className={classes.Search}>

                                <div className={classes.AddContainer}>
                                    <h5>Search Customer</h5>
                                    <div className="w3-panel w3-card-2" style={{marginBottom:'10%',width:'95%',display:'flex',flexDirection:'column',justifyContent:'flex-start'}}>
                                        <div className={classes.AddName}>

                                            <div>Name</div>
                                            <div><input type="text"/></div>

                                        </div>

                                        <div className={classes.saveDiv}>
                                            <Button style={{border:'none',outline:'none'}} color="primary" className={styles.button}>
                                                Search Customer
                                            </Button>

                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                        <div className={classes.Cards}>
                            {cardSet}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        imgFile:state.uploadRed.imageFile,
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        onHandleImageFiles:(data)=>dispatch(actionCreators.uploadImageOnAction(data)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CustomerForm);