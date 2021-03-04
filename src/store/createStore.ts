import { applyMiddleware, compose, createStore, Reducer } from 'redux';
import { SagaMiddleware } from 'redux-saga';

export default (reducers: Reducer, middlewares: SagaMiddleware[]) => {
  const enhancer =
    process.env.NODE_ENV === 'development'
      ? compose(console.tron.createEnhancer(), applyMiddleware(...middlewares))
      : applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
