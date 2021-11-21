import {useEffect, useState} from 'react';
import './PlayersList.css'
import {Pagination} from 'antd';


const PlayersList: React.FC<{}> = () => {
  
  const [players, setPlayers] = useState([]);
  const [total, setTotal] = useState(30);
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  useEffect(() => {
    fetch('https://www.balldontlie.io/api/v1/players')
      .then(response => response.json())
      .then((result: any)=> setPlayers(result['data']))
      
  });

const indexOfLastPage = page + itemsPerPage;
const indexOfFirstPage = indexOfLastPage - itemsPerPage;
const currentItems = players.slice(indexOfFirstPage, indexOfLastPage);
const onShowSizeChange = (pageSize: any) => {
  setItemsPerPage(pageSize)
} 

  return(
    <div> 
      <h4 className='fw-bolder'>Players</h4>
      <div className='d-flex flex-wrap'>
        {currentItems.map((el: any) => {
          return(
          <div key={el['id']} className='border rounded player p-3 d-flex m-2'>
            <div className=' bg-light initials rounded-circle d-flex justify-content-center align-items-center'>
              <span className='initials-value d-print-inline-block'>{el['first_name'][0]}</span>
              <span className='initials-value d-print-inline-block'>{el['last_name'][0]}</span>
            </div>
            <div className='p-2 fullname'>
              <span>{el['first_name']}</span>
              <br />
              <span>{el['last_name']}</span>
            </div>
          </div>
        )
      })}
      <Pagination 
        onChange={(value) => setPage(value)} 
        pageSize={itemsPerPage} 
        total={total} 
        current={page}
        showQuickJumper
        onShowSizeChange={onShowSizeChange}
      />
      </div>

    </div>
  );
}

export default PlayersList;