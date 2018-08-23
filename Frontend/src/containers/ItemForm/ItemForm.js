import React,{Component} from 'react';
import classes from "./ItemForm.css";

class ItemForm extends Component{
    render(){
        return(

            <div className={classes.Container}>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <div className="row" style={{marginLeft:'0px',marginRight:'0px'}}>
                            <div className={classes.Add}>
                                <div></div>
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

export default ItemForm;