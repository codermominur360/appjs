import React from 'react'; 
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './store/rootReducer'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {reduxFirestore,getFirestore} from 'redux-firestore'
import { getFirebase, } from 'react-redux-firebase'
import fbConfig from './config/fbConfig'

 

const store=createStore(rootReducer,
        compose(
            applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
            reduxFirestore(fbConfig),
             
        )
    );

// const middlewares = [
//     thunk.withExtraArgument(getFirebase,getFirestore)
//   ]
//   const store = createStore(
//     rootReducer(),
//     compose(
//       applyMiddleware(...middlewares),
//       reduxFirestore(fbConfig),
//       reactReduxFirebase(fbConfig)
//     )
//   );

ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById('root'));


serviceWorker.unregister();
