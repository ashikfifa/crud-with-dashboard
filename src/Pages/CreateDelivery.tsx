import { useDispatch } from "react-redux";
import CreateDeliveryForm, {
  type FormValues,
} from "../components/CreateDeliveryForm";
import type { AppDispatch } from "../redux/store";
import { createDelivery } from "../features/deliverySlice";
import { useState } from "react";
import Alert from "../components/Alert";

const CreateDelivery = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertInfo, setAlertInfo] = useState<{
    state: string;
    info: string;
  } | null>(null);

  const handleCreate = (data: FormValues) => {
    const newDelivery = {
      ...data,
      date: data.dob,
    };
    dispatch(createDelivery(newDelivery));
    setAlertInfo({
      state: "success",
      info: "Delivery data has successfully created",
    });
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);
    }, 5000);
  };

  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-2">Create Delivery</h2>
      <CreateDeliveryForm onSubmit={handleCreate} />

      {alertVisible && alertInfo && (
        <div className="fixed top-4 right-4 z-50">
          <Alert state={alertInfo.state} info={alertInfo.info} />
        </div>
      )}
    </div>
  );
};

export default CreateDelivery;
