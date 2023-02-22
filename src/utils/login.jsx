import axios from "axios";
const login = async (user) => {
	try {
    const baseURL = 'http://localhost:8080/api'  ;
		const url = `${baseURL}/login/admin`;
		const admin = {
      Correo: user.Correo,
      Password: user.Password
    } 
    console.log(admin);
		const res  = await axios.post(url, admin);
    if(res.status === 200){
		const { data } = res
    const { jwt } = data
      localStorage.setItem('jwt',jwt)
      console.log(jwt);
      location.href='/servicios'
    } else {
      alert('no')
    }
	} catch (error) {
		console.log({error});
    
	}
};
export default login;
