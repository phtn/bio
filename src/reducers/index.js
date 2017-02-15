import { combineReducers } from 'redux'

const users = () => { return [

	{id: 1, name: 'Alexis Ren'},
	{id: 2, name: 'Sadie'},

]}

export default combineReducers({ users })