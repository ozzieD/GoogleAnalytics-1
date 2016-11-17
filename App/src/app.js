import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './components/hello'
import { populateAccountsList, setFreshAccessToken, getAccessTokenAjaxCall, login, gup, validateToken, displayFieldset } from './utils/utils'
import AyxStore from './stores/AyxStore'
import * as metrics from './utils/metrics'

Alteryx.Gui.AfterLoad = (manager) => {
  /*ReactDOM.render(
    <Hello name="World and folks" />,
    document.getElementById('app')
  )*/

  const collection = [
    {key: 'client_id', type: 'value'},
    {key: 'client_secret', type: 'value'},
    {key: 'refresh_token', type: 'value'},
    {key: 'accessToken', type: 'value'},
    {key: 'metricsList', type: 'dropDown'},
  ]


  const store = new AyxStore(manager, collection)
/*
  collection.forEach( (d) => {
    const dataItemName = d.key;
    const item = manager.GetDataItem(dataItemName)
    item.UserDataChanged.push(() => {
      store.dataItemName = item.value;
    })
  });
*/
/*
  manager.GetDataItem('client_id').UserDataChanged.push(() => {
    store.client_id = manager.GetDataItem('client_id').value;
  })
*/

  window.store = store

  window.setFreshAccessToken = setFreshAccessToken

  window.login = login

  window.displayFieldset = displayFieldset

  window.getMetricsMetadata = metrics.getMetricsMetadata

  window.getCustomMetricsMetadata = metrics.getCustomMetricsMetadata

  window.combinedMetricsMetadata = metrics.combinedMetricsMetadata

}



//window.setFreshAccessToken = setFreshAccessToken;
//window.getAccessTokenAjaxCall = getAccessTokenAjaxCall;