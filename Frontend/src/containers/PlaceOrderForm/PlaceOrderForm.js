import React,{Component} from 'react';
import classes from './PlaceOrderForm.css';
import {connect} from "react-redux";
import * as actionCreators from "../../store/actions/index";
import axiosItem from "../../axios/axios-item";
import * as Scroll from 'react-scroll';
import axiosCustomer from "../../axios/axios-customer";
import Button from "@material-ui/core/Button/Button";
import ScrollableTable from '../../components/ScrollableTable/ScrollableTable';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

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

const globalCustomerImagePath="http://localhost:8080/images/customer/";
const globalItemImagePath="http://localhost:8080/images/item/";

class PlaceOrderForm extends Component{

    state={
        items:[],
        customers:[],
        searchItemText:'',
        searchCustomerText:'',
        itemPages:0,
        customerPages:0,

        selectItemId:'1',
        selectCustomerName:'Kamla Perera',
        selectItemName:'Cabbage',
        selectItemPrice:'123.00',
        selectItemAmount:'23',
        selectItemUnit:'Kg',

        tableBody:[]

    }

    componentDidMount(){
        this.loadItemCards(0);
        this.loadCustomerCards(0);
    }

    loadCustomerCards=(pageNumber)=>{
        this.props.open();

        axiosCustomer.get(`/customer?action=page&page=`+pageNumber+`&size=12`)
            .then(response => {
                if(response.data!==null){
                    const customerList=this.state.customers;
                    if(customerList.length===0){
                        response.data.map(customer=>{
                            customerList.push({
                                id:customer.id,
                                name:customer.name,
                                address:customer.address,
                                image:customer.image
                            })
                        })
                    }else{
                        response.data.map(customer=>{
                            let count=0;
                            this.state.customers.map(exist=>{
                                if(exist.id===customer.id){
                                    count++;
                                }
                            })
                            if(count===0){
                                customerList.push({
                                    id:customer.id,
                                    name:customer.name,
                                    address:customer.address,
                                    image:customer.image
                                })
                            }

                        })
                    }
                    this.setState({
                        customers:customerList
                    })
                    this.props.close();
                }
            })

            .catch(error => {
                this.props.error();
                console.log("error: " + error)
            });
    }

    loadItemCards=(pageNumber)=>{
        this.props.open();

        axiosItem.get(`/item?action=page&page=`+pageNumber+`&size=12`)
            .then(response => {
                if(response.data!==null){
                    const itemList=this.state.items;
                    if(itemList.length===0){
                        response.data.map(item=>{
                            itemList.push({
                                id:item.id,
                                name:item.name,
                                price:item.price,
                                amount:item.amount,
                                unit:item.unit,
                                image:item.image
                            })
                        })
                    }else{
                        response.data.map(item=>{
                            let count=0;
                            this.state.items.map(exist=>{
                                if(exist.id===item.id){
                                    count++;
                                }
                            })
                            if(count===0){
                                itemList.push({
                                    id:item.id,
                                    name:item.name,
                                    price:item.price,
                                    amount:item.amount,
                                    unit:item.unit,
                                    image:item.image
                                })
                            }

                        })
                    }
                    this.setState({
                        items:itemList
                    })
                    this.props.close();
                }
            })

            .catch(error => {
                this.props.error();
                console.log("error: " + error)
            });
    }

    scrollOnItemCard=()=>{
        let scrolledValue=document.getElementById('itemCard').scrollLeft;
        let pageNo=Math.round((scrolledValue/300));

        if(pageNo>this.state.itemPages){

            this.loadItemCards(pageNo);
            this.setState({
                itemPages:pageNo
            })
        }
        this.setState({
            currentPage:pageNo
        })

    }

    scrollOnCustomerCard=()=>{
        let scrolledValue=document.getElementById('customerCard').scrollLeft;
        let pageNo=Math.round((scrolledValue/300));

        if(pageNo>this.state.customerPages){

            this.loadCustomerCards(pageNo);
            this.setState({
                customerPages:pageNo
            })
        }
        this.setState({
            currentPage:pageNo
        })

    }

    searchCustomer=(text)=>{
        this.setState({
            searchCustomerText:text
        })
        this.state.customers.map(customer=>{
            if(customer.name.trim().toLowerCase().includes(text.trim().toLowerCase())){
                const elementName=""+customer.id;
                Scroll.scroller.scrollTo(elementName, {
                    duration: 1000,
                    smooth: true,
                    containerId: 'customerCard',
                    offset: -400
                })
            }
        })
    }

    upItemAmount=(id)=>{

        this.state.tableBody.map(tr=>{
            if(tr.itemId===id){
                const newItemAmount=tr.itemAmount+1;
                this.state.items.map(item=>{
                    if(item.id===id && item.itemAmount<newItemAmount){
                        document.getElementById('addBtn').disabled=true;
                    }else if(item.id===id){
                        const index=this.state.tableBody.indexOf(tr);
                        this.state.tableBody[index].itemAmount=newItemAmount;
                        this.setState({

                        })
                    }
                })
            }
        })
    }

    addToCart=(id)=>{

        const buttonRow=<div style={{display:'flex',justifyContent:'center'}}>
            <Button id="addBtn" onClick={()=>this.upItemAmount(id)} style={{outline:'none',border:'none'}} variant="fab" mini color="primary" aria-label="Add" className={styles.button}>
                <AddIcon />
            </Button>
            &nbsp;
            &nbsp;
            &nbsp;
            <Button id="removeBtn" style={{outline:'none',border:'none'}}  variant="fab" mini color="secondary" aria-label="Delete" className={styles.button}>
                <RemoveIcon />
            </Button>
        </div>

        const orderDetail=this.state.tableBody;
        orderDetail.push({
            itemId:this.state.selectItemId,
            itemName:this.state.selectItemName,
            itemPrice:this.state.selectItemPrice,
            itemAmount:1,
            totalPerItem:this.state.selectItemPrice*this.state.selectItemAmount,
            "":buttonRow
        })
        this.setState({
            tableBody:orderDetail
        })
    }

    render(){

        const tableHeadData=["Item ID","Item Name","Item Price","Item Qty","Total Per Item",""];
        const tableBodyData=this.state.tableBody;

        const itemCards=this.state.items.map((item,index)=>{
            return(
                <div key={index} className="w3-card-4" style={{marginLeft:'1%',width:'105px',height:'100px'}}>
                    <img width="105px" height='80px' src={globalItemImagePath+""+item.image} alt="Norway" />
                    <div className="w3-container w3-center">
                        <p style={{fontSize:'10px'}}>{item.name}</p>
                    </div>
                </div>
            )
        });

        const customerCards=this.state.customers.map((customer,index)=>{
            return(
                <Scroll.Element style={{marginTop:'2%',marginLeft:'1%'}} key={index} name={""+customer.id}>
                    <div>
                        <div style={{width:'130px'}} className="w3-card-4">
                            <img width="130px" height="100px" src={globalCustomerImagePath+""+customer.image} alt="Norway"/>
                            <div className="w3-container w3-center">
                                <p>{customer.name}</p>
                            </div>
                        </div>
                    </div>
                </Scroll.Element>
            )
        })

        return(

            <div className="row" style={{marginLeft:'0%',marginRight:'0%'}}>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <div className={classes.Items}>
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                                <div className="w3-panel w3-card-2" style={{marginLeft:'1%'}}>
                                    <div className={classes.SearchItems}>
                                        <h5>Search Item</h5>
                                        <input value={this.state.searchItemText} onChange={(event)=>this.searchTypingItem(event.target.value)} type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9">
                                <div onScroll={this.scrollOnItemCard} id="itemCard" className={classes.ItemCardsDiv}>
                                    {itemCards}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row" style={{width:'100%',marginLeft:'0%',marginRight:'0%',marginTop:'1%'}}>
                    <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                        <div className={classes.Customers}>
                            <div className="w3-panel w3-card-2" style={{marginLeft:'1%',marginRight:'1%'}}>
                                <div className={classes.SearchItems}>
                                    <h5>Search Customer</h5>
                                    <input value={this.state.searchCustomerText} onChange={(event)=>this.searchCustomer(event.target.value)} type="text" />
                                </div>
                            </div>
                            <div id="customerCard" onScroll={this.scrollOnCustomerCard} className={classes.CustomerCardsDiv}>
                                {customerCards}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-9 col-md-9 col-lg-9 col-xl-9">
                        <div className={classes.PlaceOrder}>
                            <div className="row" style={{display:'flex',justifyContent:'center',marginTop:'2%'}}>
                                <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                                    <div style={{display:'flex',justifyContent:'space-between'}}>
                                        <p>Customer Name:</p>
                                        <p style={{fontWeight:'bold'}}>{this.state.selectCustomerName}</p>
                                    </div>

                                    <div style={{display:'flex',justifyContent:'space-between'}}>
                                        <p>Item Name:</p>
                                        <p style={{fontWeight:'bold'}}>{this.state.selectItemName}</p>
                                    </div>

                                    <div style={{display:'flex',justifyContent:'space-between'}}>
                                        <p>Item Price:</p>
                                        <p style={{fontWeight:'bold'}}>{this.state.selectItemPrice}</p>
                                    </div>

                                    <div style={{display:'flex',justifyContent:'space-between'}}>
                                        <p>Item Amount:</p>
                                        <p style={{fontWeight:'bold'}}>{this.state.selectItemAmount}</p>
                                    </div>

                                    <div style={{display:'flex',justifyContent:'space-between'}}>
                                        <p>Unit:</p>
                                        <p style={{fontWeight:'bold'}}>{this.state.selectItemUnit}</p>
                                    </div>
                                    <Button onClick={()=>this.addToCart(this.state.selectItemId)}  style={{border:'none',outline:'none',fontWeight:'bold'}} color="primary" className={styles.button}>
                                        Add To Cart
                                    </Button>
                                </div>
                                <div style={{marginTop:'2%'}}>
                                    <ScrollableTable
                                        theadData={tableHeadData}
                                        tbodyData={tableBodyData}
                                        theadStyle={{backgroundColor:'dodgerblue'}}
                                        tableStyle={{width:'90%',marginLeft:'5%',border:'1px solid lightgray'}}
                                    />
                                </div>
                                <div style={{marginTop:'2%',display:'flex',justifyContent:'center'}}>
                                    <p>Total Price:</p>
                                    &nbsp;
                                    <p></p>
                                    &nbsp;
                                    &nbsp;
                                    <Button style={{border:'1px solid orange',outline:'none',fontWeight:'bold',fontSize:'18px'}} color="primary" className={styles.button}>
                                        Order
                                    </Button>
                                </div>
                            </div>
                        </div>
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

export default connect(null,mapDispatchToProps)(PlaceOrderForm);