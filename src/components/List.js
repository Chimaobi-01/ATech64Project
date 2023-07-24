import React, { useState } from "react";
import {
    useReactTable,
    createColumnHelper,
    getCoreRowModel,
    flexRender
} from '@tanstack/react-table'

import Avatar_1 from '../assets/Avatar1.png'

import defaultData from '../data/data.json'


const columnHelper = createColumnHelper()
const columns = [
    columnHelper.accessor('Name', {
        header: (
            <div className="TableHeaderCell p-4 bg-gray-50 justify-start items-center gap-3 inline-flex">
                <div className="Checkbox justify-center items-center flex">
                    <div className="CheckboxBase w-5 h-5 relative bg-white rounded-md border border-gray-300" />
                </div>
                <div className="TableHeader justify-start items-center gap-1 flex">
                    <div className="Text text-gray-500 text-xs font-medium leading-none">Name</div>
                </div>
            </div>
        ),
        cell: (info) => (
            <div className="TableCell p-4 justify-start items-center gap-3 inline-flex">
                <label className="Checkbox justify-center items-center flex">
                    <input type="checkbox" className="CheckboxBase w-5 h-5 relative bg-white rounded-md border border-gray-300" />
                </label>
                <img className="Avatar w-10 h-10 rounded-full" src={Avatar_1} />
                <div className="TextAndSupportingText flex-col justify-start items-start inline-flex">
                    <div className="Text text-gray-900 text-sm font-medium leading-tight">{info.getValue()[0]}</div>
                    <div className="SupportingText text-gray-500 text-sm font-normal leading-tight">{info.getValue()[1]}</div>
                </div>
            </div>

        ),
    }),
    columnHelper.accessor('Gender', {
        header: (
            <div className="TableHeaderCell p-4 bg-gray-50  justify-start items-center gap-3 inline-flex">
                <div className="TableHeader justify-start items-center gap-1 flex">
                    <div className="Text text-gray-500 text-xs font-medium leading-none">Gender</div>
                </div>
            </div>
        ),
        cell: (info) => (
            <div className="TableCell  p-4 justify-start items-center inline-flex">
                <div className="Text text-gray-500 text-sm font-normal leading-tight">{info.getValue()}</div>
            </div>
        ),
    }),
    columnHelper.accessor('Father', {
        header: (
            <div className="TableHeaderCell p-4 bg-gray-50 justify-start items-center gap-3 inline-flex">
                <div className="TableHeader justify-start items-center gap-1 flex">
                    <div className="Text text-gray-500 text-xs font-medium leading-none">Father</div>
                </div>
            </div>
        ),
        cell: (info) => (
            <div className="TableCell  p-4 justify-start items-center inline-flex">
                <div className="Text text-gray-500 text-sm font-normal leading-tight">{info.getValue()}</div>
            </div>
        ),
    }),
    columnHelper.accessor('Mother', {
        header: (
            <div className="TableHeaderCell p-4 bg-gray-50 justify-start items-center gap-3 inline-flex">
                <div className="TableHeader justify-start items-center gap-1 flex">
                    <div className="Text text-gray-500 text-xs font-medium leading-none">Mother</div>
                </div>
            </div>
        ),
        cell: (info) => (
            <div className="TableCell  p-4 justify-start items-center inline-flex">
                <div className="Text text-gray-500 text-sm font-normal leading-tight">{info.getValue()}</div>
            </div>
        ),
    }),
    columnHelper.accessor('Spouse', {
        header: (
            <div className="TableHeaderCell p-4 bg-gray-50 justify-start items-center gap-3 inline-flex">
                <div className="TableHeader justify-start items-center gap-1 flex">
                    <div className="Text text-gray-500 text-xs font-medium leading-none">Spouse</div>
                </div>
            </div>
        ),
        cell: (info) =>  (
            <div className="TableCell  p-4 justify-start items-center inline-flex">
                <div className="Text text-gray-500 text-sm font-normal leading-tight">{info.getValue()}</div>
            </div>
        ),
    }),
]



export default function List() {

    const [data, setData] = useState(defaultData)
    const table = useReactTable({
        columns,
        data,
        getCoreRowModel: getCoreRowModel()
    })

    return (
        <div className="me-8">
            <h1 className="text-black text-3xl font-normal leading-10">Family members</h1>

            <table className="w-full border rounded text-left">
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th key={header.id} className=" border-b border-gray-200 ">
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(header.column.columnDef.header,
                                            header.getContext())
                                    }
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id} className={cell.id == '0_Name'
                                ? `border-b border-gray-200 bg-white w-1/4`
                                : `border-b border-gray-200 bg-white`
                                } >
                                    {

                                        flexRender(cell.column.columnDef.cell,
                                            cell.getContext())
                                    }
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}