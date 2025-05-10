import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../redux/store";
import { deleteDelivery, updateDelivery } from "../features/deliverySlice";
import CreateDeliveryForm, { type FormValues } from "./CreateDeliveryForm";
import Alert from "./Alert";
import { useState } from "react";

interface DeliverModalType {
  openModal: boolean;
  handleClose: () => void;
  selectedDelivery?: any;
}
const DeliverModal = ({
  openModal,
  selectedDelivery,
  handleClose,
}: DeliverModalType) => {
  const dispatch = useDispatch<AppDispatch>();
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertInfo, setAlertInfo] = useState<{
    state: string;
    info: string;
  } | null>(null);

  const editOr = useSelector((state: any) => state.deliveryModal.editOr);

  const handleDelete = () => {
    if (selectedDelivery !== undefined) {
      dispatch(deleteDelivery(selectedDelivery));
      setAlertInfo({
        state: "success",
        info: "Delivery data has been successfully deleted",
      });
      setAlertVisible(true);

      setTimeout(() => {
        setAlertVisible(false);
      }, 5000);

      handleClose();
    }
  };

  return (
    <div>
      {openModal && (
        <div
          className="fixed top-0 left-0 z-20 flex items-center justify-center w-screen h-screen bg-slate-300/20 backdrop-blur-sm"
          aria-labelledby="header-3a content-3a"
          aria-modal="true"
          //   tabindex="-1"
          role="dialog"
        >
          <div
            className="flex max-h-[90vh] w-11/12 max-w-xl flex-col gap-6 overflow-hidden rounded bg-white p-6 text-slate-500 shadow-xl shadow-slate-700/10"
            id="modal"
            role="document"
          >
            <header id="header-3a" className="flex items-center gap-4">
              <h3 className="flex-1 text-xl font-medium text-slate-700">
                Delivery Form
              </h3>
              <button
                className="inline-flex cursor-pointer items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide transition duration-300 rounded-full focus-visible:outline-none justify-self-center whitespace-nowrap text-emerald-500 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent"
                aria-label="close dialog"
                onClick={handleClose}
              >
                <span className="relative only:-mx-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1.5"
                    role="graphics-symbol"
                    aria-labelledby="title-79 desc-79"
                  >
                    <title id="title-79">Icon title</title>
                    <desc id="desc-79">
                      A more detailed description of the icon
                    </desc>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </span>
              </button>
            </header>

            <div id="content-3a" className="flex-1 overflow-auto">
              {editOr ? (
                <CreateDeliveryForm
                  defaultValues={selectedDelivery}
                  onSubmit={(data: FormValues) => {
                    const updatedDelivery = {
                      ...data,
                      id: selectedDelivery.id,
                      date: data.dob,
                    };
                    dispatch(updateDelivery(updatedDelivery));
                    setAlertInfo({
                      state: "success",
                      info: "Delivery data has successfully updated",
                    });
                    setAlertVisible(true);
                    setTimeout(() => {
                      setAlertVisible(false);
                    }, 5000);
                    handleClose();
                  }}
                />
              ) : (
                <>
                  <p className="mb-4 text-slate-700">
                    Are you sure you want to delete the delivery?
                  </p>
                  <div className="flex justify-end gap-4">
                    <button
                      className="px-4 cursor-pointer py-2 bg-red-500 text-white rounded hover:bg-red-600"
                      onClick={handleDelete}
                    >
                      Delete
                    </button>
                    <button
                      className="px-4 cursor-pointer py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                      onClick={handleClose}
                    >
                      Cancel
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {alertVisible && alertInfo && (
        <div className="fixed top-4 right-4 z-50">
          <Alert state={alertInfo.state} info={alertInfo.info} />
        </div>
      )}
    </div>
  );
};

export default DeliverModal;
