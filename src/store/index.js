import api from "../services/api";

const getUsersInformation = async () => {
  const apiUsersInformations = await api.get("/users");
  return apiUsersInformations.data;
};

const Store = {
  getWallets: async ({ id }) => {
    const usersInformations = await getUsersInformation();
    const wallets = usersInformations.map(user => {if (user.id === id) return user.wallet})

    return wallets;
  },
  getCategorys: async ({id}) =>{
    const usersInformations = await getUsersInformation();
    usersInformations.map(user => user.id === id);
  }
};

export default Store;
