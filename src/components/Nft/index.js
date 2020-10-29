import React from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, CardFooter
  } from 'reactstrap';
import Swal from 'sweetalert2';
import UserInfo from '../UserInfo';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export default class TabTwo extends React.Component {
constructor(props){
    super(props)
    this.state={
        value:0,
        withdrawValue:0,
        depostValue:0,
        accountAddress: "account address will show up here",
        accountBalance: "account balance will show up here"

    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleWithdrawChange = this.handleWithdrawChange.bind(this);
    this.handleSubmitWithdraw = this.handleSubmitWithdraw.bind(this);
}

 


handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    if(this.state.value < 100){
        MySwal.fire({
            title:'You need 100 trx to Mine TCDN...',
            icon:'error'
        })
    }else{
        alert('at else....')
    }
  }

  handleWithdrawChange(event) {
    this.setState({value: event.target.withdrawValue});
  }

  handleSubmitWithdraw(event) {
    alert('A name was submitted: ' + this.state.withdrawValue);
    event.preventDefault();
  }

    render(){
        const { accountAddress, accountBalance } = this.state;

  return (
    <div>
<h4>Get your NFTs Below</h4>
<div>

<CardDeck>     
      <Card style={{ backgroundColor: '#333', borderColor: '#e60073' }}>
        <CardBody>
  <CardSubtitle></CardSubtitle>
       
        </CardBody>
      </Card>

      <Card style={{ backgroundColor: '#333', borderColor: '#e60073' }}>
        <CardBody>
                 
        </CardBody>
      </Card>

      <Card style={{ backgroundColor: '#333', borderColor: '#e60073' }}>
        <CardBody>
    
        </CardBody>
      </Card>
    </CardDeck>
</div>
    </div>

    
  );
}
}
