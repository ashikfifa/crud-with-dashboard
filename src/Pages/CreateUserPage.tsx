import { useDispatch } from "react-redux";
import CreateUserForm, {
  type FormValues,
} from "../components/CreateUserForm";
import type { AppDispatch } from "../redux/store";
import { CreateUser } from "../features/usersSlice";
import { useState } from "react";
import Alert from "../components/Alert";

const CreateUserPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertInfo, setAlertInfo] = useState<{
    state: string;
    info: string;
  } | null>(null);

  const handleCreate = (data: FormValues) => {
    const newUser = {
      ...data,
      date: data.dob,
    };
    dispatch(CreateUser(newUser));
    setAlertInfo({
      state: "success",
      info: "User data has successfully created",
    });
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);
    }, 5000);
  };

  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-2 pl-6">Create User</h2>
      <CreateUserForm onSubmit={handleCreate} />

      {alertVisible && alertInfo && (
        <div className="fixed top-4 right-4 z-50">
          <Alert state={alertInfo.state} info={alertInfo.info} />
        </div>
      )}
    </div>
  );
};

export default CreateUserPage;
