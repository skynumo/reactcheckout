import React from 'react';
import { users } from '../../../_data/dummyUsers';
import SearchAutoComplete from './SearchAutoComplete';

const excludeColumns = ['email', 'phone', 'website'];

const SampleAutoComplete = (props) => {

  return( 
    <> 
      <SearchAutoComplete userData={users} excludeColumns={excludeColumns} />
    </>
  );
 }
 
 export default SampleAutoComplete;
 