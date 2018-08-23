import React,{Component} from 'react';
import classes from './CustomerForm.css';

class CustomerForm extends Component{
    render(){
        return(

            <div className={classes.Container}>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <div className="row" style={{marginLeft:'0px',marginRight:'0px'}}>
                            <div className={classes.Add}>
                                <div style={{display:'flex',flexDirection:'column',flexWrap:'wrap',alignItems:'center',textAlign:'center',justifyContent:'center'}}>
                                    <h5>Add New Customer</h5>
                                    <div className="w3-panel w3-card-2" style={{marginBottom:'10%',width:'95%',display:'flex',flexDirection:'column',justifyContent:'flex-start'}}>
                                        <div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap',marginTop:'1%'}}>

                                            <div>Name</div>
                                            <div><input type="text" style={{border:'1px solid gray',backgroundColor:'lightgray',outline:'none',borderRadius:'4px'}}/></div>

                                        </div>

                                        <div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap',marginTop:'1%'}}>

                                            <div>Address</div>
                                            <div><input type="text" style={{border:'1px solid gray',backgroundColor:'lightgray',outline:'none',borderRadius:'4px',marginLeft:'-4%'}}/></div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className={classes.Search}>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                        <div className={classes.Cards}>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CustomerForm;