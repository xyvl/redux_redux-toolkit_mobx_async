import React from 'react'
import { Provider } from "react-redux"
import { ReduxContent } from "./ReduxContent"
import { store } from "./store/store"

export const ReduxProvider = () => {
	return (
		<Provider store={store}>
			<div>
        <h1>Redux-Toolkit</h1>
        <ReduxContent />
      </div>
		</Provider>
	)
}
