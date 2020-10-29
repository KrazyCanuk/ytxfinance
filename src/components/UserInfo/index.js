import React,{Component,useState} from 'react';
import { Badge } from 'reactstrap';

export default class UserInfo extends React.Component{
    constructor(props){
        super(props);

        this.state={
            accountAddress:"Login to your Wallet",
            accountBalance:"Login to see balance",
            value:0,
            
        }
    }

async componentDidMount(){
    
    this.fetchAccountAddress();
    this.fetcthAccountBalance();
}

async fetchAccountAddress(){
 //user address with setState

}


async fetcthAccountBalance(){
 //contract bal with setState


}
render(){
    const {accountAddress,accountBalance}=this.state;

    return(
   <div>
       <h5>Your Address: <Badge color='secondary'>{accountAddress}</Badge> </h5>

       <br/>
    <h5>Contract Address Amount:<Badge color='secondary'>{accountBalance}</Badge></h5>
   </div>
   
    )
}
}