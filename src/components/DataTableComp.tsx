import DataTable from "react-data-table-component";

const DataTableComp = (props: any) => {
    const {columns,data}= props;
  return (
    <div>
      <DataTable
			columns={columns}
			data={data}
		/>
    </div>
  )
}

export default DataTableComp
