import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';


export default function configureStore(initialState = {}) {
  // if (process.env.NODE_ENV !== "production") {
  //   require('dotenv').config();
  // }
  // const production = process.env.NODE_ENV &&
  //   process.env.NODE_ENV === "production";
  // const restUrl = process.env.NODE_ENV === 'production' ?
  //   process.env.PROD_RESTURL :
  //   process.env.JSONSERVER_RESTURL;
  // console.log(`production: ${production}  restUrl: ${restUrl}`);

  const middleware = [
    thunk,
    axiosMiddleware(axios.create()),
  ];

  //  axiosMiddleware(axios.create({baseURL:restUrl}))


  // if (!production) {
  //   middleware.push(require('redux-immutable-state-invariant').default());
  //   console.log('added redux-immutable-state-invariant');
  // }

  // always push redux middle to production per medium articles regarding security
  const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
  });

  return createStore(
    reducers,
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware),
    ),
  );
}
