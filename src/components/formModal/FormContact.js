import React from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import Button from "../buttons/Button";

import "./form.scss";
import { contact, bankData } from "../../store/redusers/formsSlise";
import { addData, removeData } from "../../store/redusers/dataSlise";

const FormContact = () => {
  const { contactIsActive, id } = useSelector((state) => state.forms);
  const dispatch = useDispatch();
  const closeForm = () => {
    dispatch(contact());
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      fax: "",
      email: "",
      birthday: "",
      homePage: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data, "data");
    closeForm();
    dispatch(
      addData({
        data,
        id,
      })
    );
    reset();
  };
  if (!contactIsActive) return null;
  return (
    <div
      className="form__conteiner"
      onClick={(e) => {
        if (e.target.className === "form__conteiner") {
          closeForm();
          reset();
          dispatch(removeData(id));
        }
      }}
    >
      <form className="form__content" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="form__title">Contact</h2>

        <label className="form__item-conteiner">
          <span className={errors.fax?.type === "required" ? "error" : null}>
            Fax &#9733;
          </span>
          <input
            autoFocus="fax"
            className="form__item"
            {...register("fax", { required: true })}
          />
        </label>
        <label className="form__item-conteiner">
          <span className={errors.email?.type === "required" ? "error" : null}>
            E-mail &#9733;
          </span>
          <input
            className="form__item"
            {...register("email", {
              required: true,
              pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
            })}
            type="email"
          />
        </label>
        <label className="form__item-conteiner">
          <span>Birthday</span>
          <input className="form__item" {...register("birthday")} type="date" />
        </label>
        <label className="form__item-conteiner">
          <span>Homepage</span>
          <input className="form__item" {...register("homepage")} />
        </label>

        <div className="form__btns">
          <Button
            text="Cancel"
            type={"button"}
            className="button__green"
            onClick={() => {
              dispatch(removeData(id));
              closeForm();
              reset();
            }}
          />
          <Button
            text="Previous"
            type={"button"}
            className="button__transparent"
            onClick={() => {
              closeForm();
              dispatch(bankData());
            }}
          />
          <Button text="Next" className="button__transparent" type="submit" />
        </div>
      </form>
    </div>
  );
};
export default FormContact;
