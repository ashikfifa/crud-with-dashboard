import DataTable from "react-data-table-component";

const DataTableComp = (props: any) => {
  const { columns, data } = props;

  return (
    <div>
      <DataTable
        columns={columns}
        data={data}
        pagination
        highlightOnHover
        striped
      />
    </div>
  );
};

export default DataTableComp;
