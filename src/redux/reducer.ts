import { combineReducers } from "redux";
import { Action, ActionType } from "./actions";

const initialStateTeams = {
  teams: {}
}

const initialStateTeam = {
  addedTeam: []
}

const getTeamsReducer = (state: object = initialStateTeams, action: Action) => {
  switch(action.type) {
    case ActionType.GET_TEAMS:
      return {
        ...state, 
        teams: action.payload
      }
    default: 
      return state
    }
}

const addTeamReducer = (state: any = initialStateTeam, action: any) => {
  switch(action.type) {
    case ActionType.ADD_TEAM: 
    return {
      ...state,
      addedTeam: [...state.addedTeam, action.payload]
    }
    default:
      return state
  }
}

export const rootReducer = combineReducers({
  getTeams: getTeamsReducer,
  addTeam: addTeamReducer
});