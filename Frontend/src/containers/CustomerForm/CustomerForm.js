import React,{Component} from 'react';
import classes from './CustomerForm.css';
import Button from '@material-ui/core/Button';

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
        ]
    }

    render(){
        let count=0;
        const cards=this.state.customers.map(customer=>{
            count++;
            if(this.state.customers.length===count){
                return(
                    <div style={{marginTop:'2%',marginBottom:'2%'}} className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                        <div className="w3-card-4" style={{width:'90%',marginLeft:'6%'}}>
                            <img width="100%" src="https://www.w3schools.com/w3css/img_snowtops.jpg" alt="Norway"/>
                            <div style={{display:'flex',flexDirection:'column',justifyContent:'flex-start'}} className="w3-container w3-center">
                                <p style={{fontWeight:'bold'}}>{customer.name}</p>
                                <p style={{fontSize:'12px'}}>{customer.address}</p>
                                <div style={{display:'flex',justifyContent:'space-between'}}></div>
                            </div>
                        </div>
                    </div>
                )
            }else{
                return(
                    <div style={{marginTop:'2%'}} className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                        <div className="w3-card-4" style={{width:'90%',marginLeft:'6%'}}>
                            <img width="100%" src="https://www.w3schools.com/w3css/img_snowtops.jpg" alt="Norway"/>
                            <div style={{display:'flex',flexDirection:'column',justifyContent:'flex-start'}} className="w3-container w3-center">
                                <p style={{fontWeight:'bold'}}>{customer.name}</p>
                                <p style={{fontSize:'12px'}}>{customer.address}</p>
                            </div>
                        </div>
                    </div>
                )
            }
        })

        const cardSet=<div className="row">{cards}</div>

        return(

            <div className={classes.Container}>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <div className="row" style={{marginLeft:'0px',marginRight:'0px'}}>
                            <div className={classes.Add}>
                                <div className={classes.AddContainer}>
                                    <h5>Add New Customer</h5>
                                    <div className="w3-panel w3-card-2" style={{marginBottom:'10%',width:'95%',display:'flex',flexDirection:'column',justifyContent:'flex-start'}}>
                                        <div className={classes.AddName}>

                                            <div>Name</div>
                                            <div><input type="text"/></div>

                                        </div>

                                        <div className={classes.AddAddress}>

                                            <div>Address</div>
                                            <div><input type="text"/></div>

                                        </div>

                                        <div className={classes.saveDiv}>
                                            <Button style={{border:'none',outline:'none'}} color="primary" className={styles.button}>
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

export default CustomerForm;