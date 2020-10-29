import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card,CardDeck,CardBody,CardSubtitle, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import TabTwo from '../TabTwo';
import Nft from '../Nft';

const Example = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Mining Section 
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            NFT Store
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">

            </Col>
          </Row>
<h4>Home</h4>
        </TabPane>
        <TabPane tabId="2">

         <TabTwo/>
         
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="12">
            </Col>
          </Row>
          <Nft/>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default Example;