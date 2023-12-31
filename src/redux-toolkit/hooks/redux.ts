import {useSelector, useDispatch, TypedUseSelectorHook} from 'react-redux'
import { AppDispatch, AppSelector } from "../store/store"

export const useCustomDispatch = () => useDispatch<AppDispatch>()
export const useCustomSelector: TypedUseSelectorHook<AppSelector> = useSelector