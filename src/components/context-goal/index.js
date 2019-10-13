import { createContext } from 'react'

const GoalContext = createContext({});
export const GoalsProvider = GoalContext.Provider;

export default GoalContext;