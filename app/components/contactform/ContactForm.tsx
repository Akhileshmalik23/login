"use client";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Input from "../inputs/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../Button";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    topic: "",
    message: "",
  });


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      contact: "",
      topic: "",
      message: "",
    },
  });


  const onSubmit: SubmitHandler<FieldValues> = (data) => {
 
    setIsLoading(true);
    console.log(data);
    try {
      axios.post("/api/sendmail", data);
      toast.success("Message sent successfully");
      setFormData({
        name: "",
        email: "",
        contact: "",
        topic: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />

      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="topic"
        label="Topic"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="message"
        label="Message"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />

<Button  label={'Submit'} onClick={handleSubmit} />
    </form>
  );
};

export default ContactForm;
