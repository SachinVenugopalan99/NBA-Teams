import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBox from '../../components/searchBox/searchBox';
import List from '../../components/list/list';

const TeamListing = () => {

    const [teamList, setTeamList] = useState([]);
    const [renderTeamList, setRenderTeamList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    const url = 'https://www.balldontlie.io/api/v1/teams';
    const fetchData = async () => {
        try {
            const { data } = await axios(url, {
                headers: {
                    Accept: 'application/json'
                }
            });
            setTeamList([...data?.data]);
            setRenderTeamList([...data?.data]);
            setIsLoading(false);
        } catch (error) {

        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (searchTerm) {
            const result = teamList?.filter((item) => item?.full_name?.toLowerCase()?.includes(searchTerm?.toLowerCase()));
            setRenderTeamList(result);
        } else {
            setRenderTeamList(teamList);
        }

    }, [searchTerm]);

 const tableHeads = [
    {
        label: 'Team Name',
        value: 'full_name',
        width: '20%',
        isSort: false
    },
    {
        label: 'City',
        value: 'city',
        width: '20%',
        isSort: true
    },
    {
        label: 'Abbreviation',
        value: 'abbreviation',
        width: '20%',
        isSort: false
    },
    {
        label: 'Conference',
        value: 'conference',
        width: '20%',
        isSort: false
    },
    {
        label: 'Division',
        value: 'division',
        width: '20%',
        isSort: false
    }
 ]

    return (
        <div className='h-full'>
            <SearchBox 
                placeHolder='Search Team Name'
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
            />
            {!isLoading && (
                <div className='v-scroll px-[30px]'
                style={{height: 'calc(100% - 250px)'}}
                >
            <List 
                tableHeads={tableHeads}
                tableData={renderTeamList}
                sort={'city'}
            />
                </div>
            )}
        </div>
    )
}
export default TeamListing;
