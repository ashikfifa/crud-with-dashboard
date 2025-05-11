import { useDispatch, useSelector } from "react-redux";
import DataTableComp from "../components/DataTableComp";
import type { AppDispatch, RootState } from "../redux/store";
import { useEffect, useState } from "react";
import { fetchUsers } from "./usersSlice";
import { setEditOr } from "./userModalSlice";
import UserModal from "../components/UserModal";

const UserTable = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedDelivery, setSelectedDelivery] = useState<any>(null);
  const dispatch = useDispatch<AppDispatch>();
  const columns = [
    {
      name: "Name",
      selector: (row: any) => <span title={row.name}> {row.name} </span>,
      sortable: true,
      width: '210px'
    },
    {
      name: "Email",
      selector: (row: any) => <span title={row.email}> {row.email} </span>,
      sortable: true,
      width: '210px'
    },
    {
      name: "Phone",
      selector: (row: any) => row.phone,
      sortable: true,
      width: '210px'
    },
    {
      name: "Status",
      selector: (row: any) => row.status,
      sortable: true,
    },
    {
      name: "Date of birth",
      selector: (row: any) => row.date,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row: any) => (
        <div className="space-x-2">
          <button
            className="px-3 cursor-pointer py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => handleEdit(row)}
          >
            Edit
          </button>
          <button
            className="px-3 cursor-pointer py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
            onClick={() => handleDelete(row.id)}
          >
            Delete
          </button>
        </div>
      ),
      width: '210px'
    },
  ];

  const handleEdit = (row: any) => {
    setSelectedDelivery(row);
    setOpenModal(true);
    dispatch(setEditOr(true));
  };

  const handleDelete = (id: string) => {
    setSelectedDelivery(id);
    setOpenModal(true);
    dispatch(setEditOr(false));
  };

  const getRows = useSelector((state: RootState) => state.deliveries.rows);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">User Table</h2>
      <div className=" datTableWidthAdjustment mx-auto">
      <DataTableComp columns={columns} data={getRows} />
      </div>

      <UserModal
        openModal={openModal}
        handleClose={() => {
          setOpenModal(false);
          setSelectedDelivery(null);
        }}
        selectedDelivery={selectedDelivery}
      />
    </div>
  );
};

export default UserTable;
