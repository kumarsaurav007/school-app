import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const schema = yup.object().shape({
  name: yup.string().required("School name is required"),
  email_id: yup.string().email("Invalid email").required("Email is required"),
  contact: yup.number().typeError("Must be a number").required("Contact is required"),
});

export default function AddSchool() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      if (key === "image") formData.append("image", data.image[0]);
      else formData.append(key, data[key]);
    });

    await axios.post("/api/schools/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    alert("School added successfully!");
    reset();
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Add School</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="card p-4 shadow">
        <input className="form-control mb-2" {...register("name")} placeholder="School Name" />
        <p className="text-danger">{errors.name?.message}</p>

        <input className="form-control mb-2" {...register("address")} placeholder="Address" />
        <input className="form-control mb-2" {...register("city")} placeholder="City" />
        <input className="form-control mb-2" {...register("state")} placeholder="State" />

        <input className="form-control mb-2" {...register("contact")} placeholder="Contact Number" />
        <p className="text-danger">{errors.contact?.message}</p>

        <input className="form-control mb-2" {...register("email_id")} placeholder="Email" />
        <p className="text-danger">{errors.email_id?.message}</p>

        <input type="file" className="form-control mb-3" {...register("image")} />

        <button className="btn btn-primary w-100" type="submit">Submit</button>
      </form>
    </div>
  );
}
