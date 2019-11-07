import api from "../services/api";

const getUsersInformation = async () => {
  const apiUsersInformations = await api.get("/users");
  return apiUsersInformations.data;
};

const Store = {
  wallets: [],
  categorys: [],
  expanses: [],
  update: ({ id }) => {
    const usersInformations = getUsersInformation();
    usersInformations.then(data => {
      data.map(user => {
        if (id !== user.id) return;
        Store.wallets = user.wallet;
        Store.categorys = user.expansesCategorys;
        Store.wallets.map(
          w => (Store.expanses = [...Store.expanses, ...w.expanses])
          );
      });
    });
  },
  setWallet: ({ walletId, userId, title, name, value, icon, color }) => {
    const usersInformations = getUsersInformation();
    usersInformations.then(data => {
      data.map(user => {
        if (user.id !== userId) return;
        title && (user.wallet[walletId].title = title);
        name && (user.wallet[walletId].name = name);
        value && (user.wallet[walletId].value = value);
        icon && (user.wallet[walletId].icon = icon);
        color && (user.wallet[walletId].color = color);
      });
    });
    Store.update({ id: userId });
  },
  setExpanses: ({
    userId,
    walletId,
    value = 0,
    walletTitle = "",
    walletName = "",
    walletIcon = "",
    titleCategory = "",
    subCategory = "",
    categoryIcon = "",
    dateExpanse,
    portionsValue = 0,
    obs = "",
    tagList = []
  }) => {
    const usersInformations = getUsersInformation();
    usersInformations
      .then(data => {
        data.map(user => {
          if (user.id !== userId) return;
          user.wallet.map(w => {
            if (w._Id !== walletId) return;
            const newExpanse = {
              value,
              wallet: {
                walletTitle,
                walletName,
                walletIcon
              },
              category: {
                titleCategory,
                subCategory,
                categoryIcon
              },
              dateExpanse,
              portionsValue,
              obs,
              tagList
            };
            w.expanses.push(newExpanse);
          });
        });
      })
      .catch(err => console.log(err));
    Store.update({ id: userId });
  }
};

export default Store;
