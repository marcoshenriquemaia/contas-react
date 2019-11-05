import api from '../services/api'

const getUsersInformation = async () =>{
  const apiUsersInformations = await api.get('/users');
  return apiUsersInformations.data[0];
}

const usersInformations = getUsersInformation();

const Store = {
  getWallets: ({id}) =>{
    usersInformations.wallet.map(wallet => console.log())
  }
}

export default Store;