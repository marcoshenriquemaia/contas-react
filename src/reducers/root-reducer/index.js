export const ADD_WALLET = "ADD_WALLET";
export const ADD_EXPANSE = "ADD_EXPANSE";

export const inicialState = {
  totalValueWallet: 0,
  filteredDates: [
    {
      date: "",
      value: [
        {
          value: 0,
          wallet: {
            category: "",
            subCategory: "",
            icon: ""
          },
          category: {
            category: "",
            subCategory: "",
            icon: ""
          },
          dateExpanse: "",
          portionsValue: 0,
          obs: "",
          tagList: [""]
        }
      ]
    }
  ],
  walletList: [
    {
      id: 1,
      owner: "",
      totalValue: 0,
      expases: [
        {
          value: 0,
          wallet: {
            category: "",
            subCategory: "",
            icon: ""
          },
          category: {
            category: "",
            subCategory: "",
            icon: ""
          },
          dateExpanse: "",
          portionsValue: 0,
          obs: "",
          tagList: [""]
        }
      ]
    }
  ],
  personalizedCategory: [
    {
      category: "",
      subCategory: [""],
      icon: "",
      color: ""
    }
  ],
  goals: [
    {
      type: {
        category: "",
        subCategory: [""],
        icon: "",
        color: ""
      },
      name: "",
      finalDate: "",
      finalValue: 0,
      atualValue: 0
    }
  ]
};

const RootReducer = (state, action) => {
  switch (action.type) {
    case "ADD_WALLET":
      return { ...state, walletList: [...state.walletList, action.payload] };
    default:
      return state;
  }
};

export default RootReducer;
