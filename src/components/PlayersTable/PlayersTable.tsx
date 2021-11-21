import './PlayersTable.css';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react'
import { getTeams } from '../../redux/actions';
import {Pagination} from 'antd';

interface RootState {
  getTeams: {
    teams:{
      data: []
    }
  }
}



const PlayersTable: React.FC<{}>  = () => {

  const teams = useSelector((state: RootState) => state.getTeams.teams.data)
  const addedTeam = useSelector((state: any) => state.addTeam.addedTeam);


  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(getTeams())
  })

  return (
    <div className='mt-3'>
      <table className='table'>
        <thead className='bg-light'>
          <tr>
            <th scope="col" className='th'>Name</th>
            <th scope="col" className='th'>City</th>
            <th scope="col" className='th'>Abbreviation</th>
            <th scope="col" className='th'>Conference</th>
          </tr>
        </thead>
        <tbody>
        {teams.map(team => {
          let conference: string = team['conference'];

          return (
            <tr>
              <th >{team['name']}</th>
              <th>{team['city']}</th>
              <th>{team['abbreviation']}</th>
              <th><span className={`${team['conference'] === 'East'? 'east': 'west'} p-2 rounded-pill d-block w-50 text-center`}>{conference.toUpperCase()}</span></th>
            </tr>
          )
        })}
        {addedTeam.map((team: any) => {
          let conference: string = team['conference'];
          return (
            <tr>
              <th >{team['name']}</th>
              <th>{team['city']}</th>
              <th>{team['abbreviation']}</th>
              <th><span className={`${team['conference'] === 'East'? 'east': 'west'} p-2 rounded-pill d-block w-50 text-center`}>{conference.toUpperCase()}</span></th>
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  )
}

export default PlayersTable