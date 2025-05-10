import { useDispatch, useSelector } from "react-redux";
import DataTableComp from "../components/DataTableComp";
import type { AppDispatch, RootState } from "../redux/store";
import { useEffect, useState } from "react";
import { fetchDeliveries } from "./deliverySlice";
import { setEditOr } from "./deliveryModalSlice";
import UserModal from "../components/UserModal";

const DeliveryTable = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedDelivery, setSelectedDelivery] = useState<any>(null);
  const dispatch = useDispatch<AppDispatch>();
  const columns = [
    {
      name: "Name",
      selector: (row: any) => <span title={row.name}> {row.name} </span>,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row: any) => <span title={row.email}> {row.email} </span>,
      sortable: true,
    },
    {
      name: "Phone",
      selector: (row: any) => row.phone,
      sortable: true,
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
    dispatch(fetchDeliveries());
  }, [dispatch]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">User Table</h2>
      <DataTableComp columns={columns} data={getRows} />

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

export default DeliveryTable;
