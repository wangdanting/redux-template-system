import React from 'react';
import { Card, Tabs } from 'antd';
import StatusQuery from './OrderList/StatusQuery';

const { TabPane } = Tabs;

const OrderList = () => (
  <Card bordered={false}>
    <Tabs defaultActiveKey='1'>
      <TabPane tab='状态查询' key='1'>
        <StatusQuery />
      </TabPane>
      <TabPane tab='关键字查询' key='2'>
        <div>ddd2</div>
      </TabPane>
    </Tabs>
  </Card>
);

export default OrderList;
