import React, { useState } from 'react';

import './SearchAutoComplete.scss';

const SearchAutoComplete = (props) => {

  const usersData = props.userData ? props.userData : [];
  const excludeColumns = props.excludeColumns ? props.excludeColumns : [];

  const [sinput, setSInput] = useState('');
  const [sresult, setSResult] = useState([]);
  const [loader, setLoader] = useState(false);
 
  const handleSearch = (e) => {
    const value = e.target.value.trim();
    setSInput(value);
    if (value && value.length > 2) {
      setLoader(true);
      const searchData = usersData.filter((item) => JSON.stringify(item).includes(value))   
      setTimeout(() => {
        setSResult(searchData);
        setLoader(false);
      }, 1000)
    } else {
      setLoader(false);
      setSResult([]);
    }
  }

  return( 
    <>

    <div className="search-autocomplete">
      <div className="search-field">
        <input 
          type="text" 
          className="form-control"
          name='search' 
          value={sinput} 
          placeholder="Search ..."
          onChange={(e) => handleSearch(e)}
        />
      </div>

       <div className="search-result">
         <ul className="list-group">
          {
            loader 
            ? 
              <li className="list-group-item border-0 text-center"><div className="spinner-border" role="status"></div></li>
            : 
              sinput && sresult && sresult.map((data, index) => {
              return <li key={data.id} className="data-row list-group-item">
                  {
                    Object.keys(data).map((item, i) => {
                      return (
                        !excludeColumns.includes(item) && item !== 'id' ?
                          <span key={i}>{data[item]}</span>
                        : ''
                      )
                    })
                  }
                </li> 
              })
          }
          { sinput.length > 2 && !loader && sresult.length === 0 
            ? 
              <li className="list-group-item text-muted">No record found</li> 
            : '' 
            }
          </ul>
        </div>


    </div>

    </>
  );
 }
 
 export default SearchAutoComplete;
 