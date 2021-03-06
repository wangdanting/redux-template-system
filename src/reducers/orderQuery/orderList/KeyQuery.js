import { combineReducers } from 'redux';
import * as types from '@/constants';

const initialQueryData = {
  status: 'all', // 订单状态
  orderWay: 'all', // 订单类型
  keyWords: '', // 关键字
  expectFetchCurrentStart: '', // 开始时间
  expectFetchCurrentEnd: '', // 结束时间
  page: 0,
  size: 10
};

export const data = (state = [], action) => {
  switch (action.type) {
    case types.KQ_CHANGE_DATA:
      return action.data;
    default:
      return state;
  }
};

export const dataTotal = (state = 0, action) => {
  switch (action.type) {
    case types.KQ_CHANGE_DATA_TOTAL:
      return action.dataTotal;
    default:
      return state;
  }
};

export const queryData = (state = initialQueryData, action) => {
  switch (action.type) {
    case types.KQ_CHANGE_QUERYDATA:
      return action.queryData;
    default:
      return state;
  }
};

const keyQuery = combineReducers({
  data,
  dataTotal,
  queryData
});

export default keyQuery;
