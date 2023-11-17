import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';

const store = configureStore({
	reducer: rootReducer,
});

export default function StoreProvider({ children }) {
	console.log('[REDUX STORE]', store.getState())
	return <Provider store={store}>{children}</Provider>;
}
