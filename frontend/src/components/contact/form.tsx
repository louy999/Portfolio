import ButtonClick from "../button";
import axios from "axios";
import { env } from "../env";
import { useState } from "react";
import ReactLoading from "react-loading";

const Form = () => {
  const [data, setData] = useState("send me");
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState<any>({
    text: "",
    name: "",
    email: "",
  });
  const handelChange = (e: any) => {
    setInput((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const setTimeForCon = (text: string) => {
    setData(text);
    setTimeout(() => {
      setData("send me");
    }, 5000);
  };
  const sentEmailForm = (e: any) => {
    e.preventDefault();
    ifEmpty();
  };
  const ifEmpty = async () => {
    if (input.email !== "") {
      if (input.name !== "") {
        if (input.text !== "") {
          setLoading(true);
          try {
            await axios
              .post(`${env.verL}/ver`, input)
              .then((res: any) => {
                res.request.statusText !== ""
                  ? setData("ok, sent")
                  : setData("your connection");
              })
              .then(() => {
                setTimeout(() => {
                  setData("send me");
                }, 5000);
              });
            setLoading(false);
          } catch (error) {
            console.log(error);
          }
        } else {
          setTimeForCon("subject is empty");
        }
      } else {
        setTimeForCon("name is empty");
      }
    } else {
      setTimeForCon("email is empty");
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
          {loading ? (
            <ReactLoading
              className="button-64"
              type={"bubbles"}
              color={"#9b8c6b"}
              height={"20%"}
              width={"20%"}
            />
          ) : (
            <div className="button-64" onClick={sentEmailForm}>
              <ButtonClick text={`${data}`} />
            </div>
          )}
        </div>
      </form>
    </>
  );
};

export default Form;
