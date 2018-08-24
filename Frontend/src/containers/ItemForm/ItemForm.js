import React,{Component} from 'react';
import classes from "./ItemForm.css";
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

class ItemForm extends Component{
    render(){
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

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemForm;