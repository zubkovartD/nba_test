import  {Dispatch} from 'redux'

export enum ActionType {
  GET_TEAMS = 'GET_TEAMS',
  ADD_TEAM = 'ADD_TEAM'
}
interface IGetTeams {
  type: ActionType.GET_TEAMS,
  payload: {}
}

export const addTeam = (team: any) => {
  console.log(team)
  return {
    type: ActionType.ADD_TEAM,
    payload: team
  }
};

export const getTeams = () => {

  return async (dispatch: Dispatch) => {
    try {
      let teams = await fetch('https://www.balldontlie.io/api/v1/teams?page=0');
      let fetchedTeams = await teams.json();
      dispatch({
        type: ActionType.GET_TEAMS,
        payload: fetchedTeams
      })
    } catch(e) {
      console.log(e)
    }
  }
}

export type Action = IGetTeams