import React, { useState } from "react";
import Input from "./Input";
import InputRow from "./InputRow";
import portFolioApi from "../api/portfolioApi";
import { Dropzone, FileMosaic } from "@files-ui/react";
import Button from "./Button";

const TestimonialForm = ({ setFormFlag }) => {
  const [formData, setFromData] = useState({ avatar: [] });
  const [response, setResponse] = useState(null);

  const onChangeHandler = (event) => {
    setFromData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const removeAvatar = () => {
    setFromData((prevFormData) => {
      return {
        ...prevFormData,
        avatar: [],
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    portFolioApi
      .post("/testimonials", formData)
      .then((res) => {
        setFormFlag(false);
        setFromData({avatar: []});
        setResponse(res.data);
      })
      .catch((error) => {
        setResponse(error.response.data);
      });
  };
  return (
    <div>
      <section className="flex flex-col w-full justify-center items-center">
        <h3 className="text-black text-4xl">
          Post <span className="text-secondary">Testimonial</span>
        </h3>
        <form className="my-8 text-black" onSubmit={handleSubmit}>
          <InputRow className="flex">
            <Input
              type="text"
              name="name"
              placeholder="Name"
              onChange={onChangeHandler}
              value={formData["name"] ? formData["name"] : ""}
              error={response?.errors}
            />
            <Input
              type="text"
              name="headline"
              placeholder="Headline"
              onChange={onChangeHandler}
              value={formData["headline"] ? formData["headline"] : ""}
              required={false}
              error={response?.errors}
            />
          </InputRow>
          <InputRow>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData["email"] ? formData["email"] : ""}
              onChange={onChangeHandler}
              required={false}
              error={response?.errors}
            />
            <Input
              type="text"
              name="relation"
              placeholder="Relation to Arpan"
              value={formData["relation"] ? formData["relation"] : ""}
              onChange={onChangeHandler}
              required={false}
              error={response?.errors}
            />
          </InputRow>
          <InputRow>
            <Dropzone
              onChange={(incomingFile) => {
                setFromData((prevFormData) => {
                  return {
                    ...prevFormData,
                    avatar: incomingFile,
                  };
                });
              }}
              value={formData["avatar"] ? formData["avatar"] : []}
              maxFiles={1}
              accept="image/*"
              label="Drop/Browse your Picture"
              className="rounded-lg p-3 shadow-lg"
            >
              {formData["avatar"].map((eachFile) => (
                <FileMosaic
                  key={eachFile.id}
                  {...eachFile}
                  onDelete={removeAvatar}
                  info
                />
              ))}
            </Dropzone>
          </InputRow>
          <InputRow>
            <textarea
              name="quote"
              placeholder="Write your testimonial here*"
              rows="7"
              cols="77"
              value={formData["quote"] ? formData["quote"] : ""}
              className="border-2 border-s-fuchsia-100 rounded-lg p-3 shadow-lg"
              onChange={onChangeHandler}
              error={response?.errors}
              required
            ></textarea>
          </InputRow>
          <div className="flex justify-center">
            <Button styleProps="text-white">Post Testimonial</Button>
          </div>
        </form>
        {response && (
          <div className="my-2">
            {response.success === false && (
              <span className="text-red-700">
                Testimonial was not sent, fix the error and submit again.
              </span>
            )}
            {response.success === true && (
              <span className="text-green-700">
                Testimonial was successfully post, thanks for posting it.
              </span>
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default TestimonialForm;
