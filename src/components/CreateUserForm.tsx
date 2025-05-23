import { useForm } from "react-hook-form";
import { useEffect } from "react";

export type FormValues = {
  name: string;
  email: string;
  phone: string;
  dob: string;
  status: string;
};

interface Props {
  defaultValues?: FormValues;
  onSubmit: (data: FormValues) => void;
}

const CreateUserForm = ({ defaultValues, onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();
  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-4 space-y-4 bg-white rounded shadow"
    >
      <div>
        <label className="block font-medium">Name</label>
        <input
          className="w-full border rounded p-2"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block font-medium">Email</label>
        <input
          className="w-full border rounded p-2"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email format",
            },
          })}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block font-medium">Phone</label>
        <input
          className="w-full border rounded p-2"
          type="tel"
          {...register("phone", {
            required: "Phone is required",
            pattern: {
              value: /^[0-9]{10,15}$/,
              message: "Invalid phone number",
            },
          })}
        />
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
      </div>

      <div>
        <label className="block font-medium">Date of Birth</label>
        <input
          className="w-full border rounded p-2 cursor-pointer"
          type="date"
          onFocus={(e) => e.target.showPicker?.()}
          {...register("dob", { required: "Date of Birth is required" })}
        />

        {errors.dob && <p className="text-red-500">{errors.dob.message}</p>}
      </div>

      <div>
        <label className="block font-medium">Status</label>
        <select
          className="w-full border rounded p-2 cursor-pointer"
          {...register("status", { required: "Status is required" })}
        >
          <option value="">Select status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="pending">Pending</option>
        </select>

        {errors.status && (
          <p className="text-red-500">{errors.status.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default CreateUserForm;
