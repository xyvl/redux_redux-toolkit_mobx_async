import axios from "axios"

export const getAllUsers = async () => {
	const data = await axios.get(`${process.env.REACT_APP_URL}`)

	return data
}