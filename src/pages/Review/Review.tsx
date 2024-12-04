import { SubmitHandler, useForm } from "react-hook-form";
import style from "./style.module.css";

type FormType = {
  user_name: string;
  user_email: string;
  category: string;
};

const Review = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>();
  console.log(errors);

  const onSubmit: SubmitHandler<FormType> = (data) => {
    console.log(data);
  };

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <label className={style.labelName}>
        Name{" "}
        <input
          type="text"
          {...register("user_name", {
            required: { value: true, message: "Обязательное поле" },
            minLength: {
              value: 3,
              message: "В поле с именем недостаточно символов",
            },
          })}
        />
      </label>

      <label className={style.labelEmail}>
        E-mail{" "}
        <input type="email" {...register("user_email", { required: true })} />
      </label>
      {errors.user_name && <p>{errors.user_name.message}</p>}

      <select {...register("category")}>
        <option value="a">Review about product</option>
        <option value="b">Review about service quality</option>
        <option value="c">Other questions to company</option>
      </select>
      <input className={style.review} type="text" />
      <button className={style.btn} type="submit">
        Send
      </button>
    </form>
  );
};

export default Review;
