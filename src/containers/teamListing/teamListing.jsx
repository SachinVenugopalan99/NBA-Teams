import React, { useEffect, useState } from 'react';
import { debounce } from '../../utils/custom-hooks';
import axios from 'axios';
import SearchBox from '../../components/searchBox/searchBox';
import List from '../../components/list/list';
import Pagination from '../../components/pagination/pagination';
import Popup from './components/popup';
import './styles.scss'

const TeamListing = () => {

    const [teamList, setTeamList] = useState([]);
    const [renderTeamList, setRenderTeamList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(0);
    const [selectedTeam, setSelectedTeam] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [sortASC, setSortASC] = useState(true);
    const LIMIT = 7;

    const debouncedSearhTerm = debounce(searchTerm, 250);

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
        if (debouncedSearhTerm) {
            const result = teamList?.filter((item) => item?.full_name?.toLowerCase()?.includes(debouncedSearhTerm?.toLowerCase()));
            setPage(0);
            setRenderTeamList(result);
        } else {
            setRenderTeamList(teamList);
        }

    }, [debouncedSearhTerm]);

 const tableHeads = [
    {
        label: 'Team Name',
        value: 'full_name',
        width: '18%',
        isSort: false
    },
    {
        label: 'City',
        value: 'city',
        width: '18%',
        isSort: true
    },
    {
        label: 'Abbreviation',
        value: 'abbreviation',
        width: '18%',
        isSort: false
    },
    {
        label: 'Conference',
        value: 'conference',
        width: '18%',
        isSort: false
    },
    {
        label: 'Division',
        value: 'division',
        width: '18%',
        isSort: false
    }
 ];
    const onClose = () => {
        setIsPopupOpen(false);
    }

    const sortList = (val, tempArray) => {
        if (val) {
            return tempArray.sort((a, b) => b.city.localeCompare(a.city));
        } else {
            return tempArray.sort((a, b) => a.city.localeCompare(b.city));
        }
    }

    const handleSort = () => {
        const tempArray = [...renderTeamList];
        setRenderTeamList(sortList(sortASC, tempArray));
        setSortASC(!sortASC);
    }

    return (
        <div className='outerContainer'>
                <div className='heading'>
                    NBA TEAMS
                </div>
            <div className='searchInput'>
            <SearchBox 
                placeHolder='Search Team Name'
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
            />
            </div>
            {!isLoading && (
                <>
                {renderTeamList?.length > 0 ? (
                    <>
                <div className='tableContainer'
                >
                <List 
                tableHeads={tableHeads}
                tableData={renderTeamList.slice(page * LIMIT, (page + 1) * LIMIT)}
                selectedTeam={selectedTeam}
                onRowClick={(team) => {
                    setSelectedTeam(team)
                    setIsPopupOpen(true);
                }}
                sort={'city'}
                handleSort={handleSort}
                />
                </div>
                <div className='paginationContainer'>
                <Pagination 
                next={() => {setPage(page + 1)}}
                previous={() => setPage(page - 1)}
                setPage={setPage}
                currentPage={page + 1}
                totalPages={Math.ceil(renderTeamList?.length / LIMIT)}
                />
                </div>
                </>
                ) : (
                    <div className='resultContainer'>
                        No results to display
                    </div>
                )}
                </>
            )}
            {isPopupOpen && (
                <Popup 
                onClose = {onClose}
                selectedTeam={selectedTeam}
                setSelectedTeam={setSelectedTeam}
                />
            )}
        </div>
    )
}
export default TeamListing;
