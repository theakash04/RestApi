import React ,{useState, useEffect} from 'react'
import FridayData from './FridayData'
import UserData from './UserData'
import TextFetching from '../Loading/TextFetching';

function DataDisplayer({data}) {
    // const [isLoading, setIsLoading] = useState(true);
    // const [fetchedData, setFetchedData] = useState([]);

    // useEffect(() => {
    //     // Simulate data fetching
    //     setTimeout(() => {
    //         setFetchedData(data); // Set fetched data received from props
    //         setIsLoading(false); // Data fetching completed
    //     }, 2000); // Simulate a 2-second delay for data fetching
    // }, [data]);


    return (
        <div className='flex flex-col items-start px-10 py-8 '>

        {/* {isLoading && <TextFetching />} */}
        {/* map on data get item and index of it*/}
        {/* {!isLoading && fetchedData.map((item, index) => (
            <div key={index}>
                {item && (
                    <UserData userData={item}/>
                )}
                {item && (
                    <FridayData AIdata={item}/>
                )}
            </div>
        ))} */}

        <FridayData AIdata={data}/>
        </div>
    );
}

export default DataDisplayer
