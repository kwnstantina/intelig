import React from 'react';
import {usePagination, useSortBy, useTable} from 'react-table'
import './tableService.scss';
import sortImage from '../../images/sort.png';
import sorImageUp from '../../images/sort-ascending.png';
import CONSTANTS from '../../helper/constants/constants';

const TableServices = ({columns, data},) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: {pageIndex, pageSize}
    } = useTable({
        columns,
        data,
        initialState:{ pageIndex:0,pageSize: 10},
    }, useSortBy, usePagination);



    return (
        <>
            <div className="table-container">
            <select
                value={pageSize}
                onChange={(e) => {
                    setPageSize(Number(e.target.value));
                }}
                className="table__select"
            >
                {CONSTANTS.defaultPageSize.map((pageSize) => (
                    <option key={pageSize} value={pageSize}>Page Size {pageSize}
                    </option>
                ))}
            </select>
            <table {...getTableProps()}>
                <thead>
                {headerGroups.map((group) => (
                    <tr {...group.getHeaderGroupProps()} >
                        {group.headers.map((column) => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render("Header")}<span>{
                                column.isSorted
                                    ? column.isSortedDesc
                                    ? <img src={sortImage} style={{width: '20px', paddingLeft: '10px'}} alt="sorting-up"/>
                                    : <img src={sorImageUp} style={{width: '20px', paddingLeft: '10px'}} alt="sorting-down"/>
                                    : ''
                            }</span></th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {page.map((row) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td   data-heading={`${cell.column.Header}`} {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <div className="pagination">
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage} className="pagination-button">
                    {"<<"}
                </button>

                <button onClick={() => previousPage()} disabled={!canPreviousPage} className="pagination-button">
                    {"<"}
                </button>
                <span className="pagination__count">
                    <p className="pagination__per__count">
                    <strong>{pageIndex + 1}</strong>
                    </p>
                     <p >
                    <strong>-</strong>
                    </p>
                    <p className="pagination__per__count">
                    <strong>{pageCount}</strong>
                    </p>
                  </span>
                <button onClick={() => nextPage()} disabled={!canNextPage} className="pagination-button">
                    {">"}
                </button>

                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} className="pagination-button">
                    {">>"}
                </button>

            </div>
            </div>
        </>
    )

}

export default TableServices;
