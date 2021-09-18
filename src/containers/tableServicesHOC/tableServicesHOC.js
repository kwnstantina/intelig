import React from 'react';
import TableServices from "./tableServices";
import moment from 'moment';
import {useQuery} from "react-query";
import {fetchStoredData} from '../../services/services';
import ScrollProgress from "../../general/animations/scrollProgress";
import {displayErrorMessages} from "../../general/functions/functions";

const TableServicesHOC = options => {
    const columns = React.useMemo(
        () => [
            {
                Header: "🖥️",
                columns: [
                    {
                        Header: 'Title',
                        accessor: 'title',
                        isSorted: true,
                    },
                    {
                        Header: 'Data Source',
                        accessor: row => <a href={`${row.source}`} target='_blank'
                                            style={{textDecoration: 'none', color: '#8d8de2'}}>{row.source}</a>,
                        isSorted: true,
                    },
                    {
                        Header: 'Description',
                        accessor: 'description',
                        isSorted: true,
                    },
                    {
                        Header: 'Date Upload',
                        accessor: row => moment(row.date).format('DD/MM/YYYY'),
                        isSorted: true,
                    },
                    {
                        Header: 'Mnemonic Word',
                        accessor: 'mnemonicWord',
                        isSorted: true,
                    },
                    {
                        Header: 'Serial Number',
                        accessor: 'id',
                        isSorted: true,
                    },
                ],
            }], []);
    const {data, status} = useQuery('storedData', fetchStoredData);
    return (
        <>
            <ScrollProgress/>
            <div className="table-heading">
                <p>Storage</p>
            </div>
            <div className="table-parent">
                {
                    status === 'success' &&
                        <TableServices columns={columns} data={data}/>
                }
                {displayErrorMessages(status)}
            </div>
        </>

    )
}

export default TableServicesHOC;
