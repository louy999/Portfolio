import ButtonClick from "../button";
import axios from "axios";
import { env } from "../env";
import { useState } from "react";
const Form = () => {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState<any>({
    text: "",
    name: "",
    email: "",
  });
  const handelChange = (e: any) => {
    setInput((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(input);
  };

  const sentEmailForm = async (e: any) => {
    e.preventDefault();

    try {
      await axios
        .post(`${env.verL}/ver`, input)
        .then((res: any) => setLoading(true))
        .then(() => setLoading(false));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form method="POST" className="form">
        <div className="email-name">
          <div className="mb-3">
            <input
              type="email"
              name="email"
              onChange={handelChange}
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              onChange={handelChange}
              name="name"
              type="text"
              placeholder="Name"
              aria-label="default input example"
            />
          </div>
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handelChange}
            name="text"
            placeholder="text..."
            id="exampleFormControlTextarea1"
          ></textarea>
          <div className="button-64" onClick={sentEmailForm}>
            <ButtonClick text={`${loading ? "loading" : "send me"}`} />
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
