import { createContext } from 'react'

const WalletContext = createContext({});
export const WalletProvider = WalletContext.Provider;

export default WalletContext;