import React, { useState } from "react";
import { useForm } from "react-hook-form";
import NewLink from "./NewLink";
import "./Form.css";

export default function Form() {
  const [showLink, setShowLink] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = () => setShowLink(true);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        className="title-input"
        placeholder="Paste Name/Title"
        {...register("pasteName", {
          required: false,
          maxLength: {
            value: 30,
            message: "Too long! 30 characters max.",
          },
        })}
      />
      {errors.pasteName && <p className="error">{errors.pasteName.message}</p>}

      <textarea
        {...register("content", {
          required: "You cannot create an empty paste!",
        })}
      />
      {errors.content && <p className="error">{errors.content.message}</p>}
      <button type="submit" className="submit">
        Create New Paste
      </button>

      {showLink ? <NewLink /> : ""}
    </form>
  );
}
