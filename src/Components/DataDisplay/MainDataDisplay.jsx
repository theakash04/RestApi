import React, { useState } from 'react'
import DataDisplayer from './DataDisplayer'
import SearchBox from '../InputBox/SearchBox'
import PlaceHolder from '../PlaceHolder/PlaceHolder';

function MainDataDisplay() {
    let [data, setData] = useState([]);

    const handleDataUpdate=(newData)=>{
        setData(prevData => [...prevData, newData]);
        console.log(data);
    };
    return (
        <>
            {/* {data.length > 0 ? (
                <DataDisplayer data={data}/>
            ) : (
                <PlaceHolder />
            )} */}
            <DataDisplayer data={data}/>
            <div className='absolute bottom-5 left-0 right-0 mx-auto'>
                <SearchBox onDataUpdate={handleDataUpdate}/>
            </div>
        </>
    )
}

export default MainDataDisplay
