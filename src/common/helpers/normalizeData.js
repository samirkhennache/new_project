// import * as constants from '../../../modules/common/constants';
// import * as Mock from './mockData';
// import * as SalesManagementSetting from '../salesManagementSetting';

export default function normalizeSalesManagementData(data, customState = {}) {
  let normalizedData = {};

  if (data) {
    normalizedData = {
      initialValues: data,
    };
  }
  // normalizedData[constants.BACKEND_RESPONSE_INIT_NODE_NAME] = Mock.mockBackEndResponse;

  return {
    ...normalizedData,
    // ...SalesManagementSetting.salesManagementInitState,
    ...customState,
  };
}