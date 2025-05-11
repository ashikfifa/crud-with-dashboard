import DataTable from "react-data-table-component";

const DataTableComp = (props: any) => {
  const { columns, data } = props;

  return (
    <div className=" overflow-x-auto">
      <DataTable
        columns={columns}
        data={data}
        pagination
        persistTableHead
        responsive
        fixedHeader
        fixedHeaderScrollHeight="300px"
        />
    </div>
  );
};

export default DataTableComp;
