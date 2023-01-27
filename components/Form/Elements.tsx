import React, { PropsWithChildren } from 'react';

type checkboxProps = {
  text: string,
  id: string
  name: string,
  value: string
};

function Checkbox({
  text,
  id,
  name,
  value
}: checkboxProps) {
  return (
    <div className="form-control">
      <label className="
                label cursor-pointer
                w-fit
              ">
        <input
          type="checkbox"
          className="checkbox bg-white"
          name={name}
          id={id}
          value={value}
        />
        <span className="label-text ml-3">{text}</span>
      </label>
    </div>
  );
}

type textInputProps = {
  text: string,
  placeholder: string,
  id: string,
  name: string
};

function TextInput({
  text,
  placeholder,
  id,
  name
}: textInputProps) {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">{text}</span>
      </label>
      <input
        type="text"
        placeholder={placeholder}
        id={id}
        name={name}
        className="input input-bordered w-full max-w-xs"
      />
    </div>
  );
}

type selectProps = {
  text: string,
  placeholder: string,
  id: string,
  name: string
};

function Select({
  text,
  placeholder,
  id,
  name,
  children
}: PropsWithChildren<selectProps>) {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">{text}</span>
      </label>
      <select
        name={name}
        id={id}
        className="select select-bordered"
      >
        <option disabled selected>{placeholder}</option>
        {children}
      </select>
    </div>
  );
}

type textAreaProps = {
  text: string,
  placeholder: string,
  name: string,
  id: string,
};

function TextArea({
  text,
  placeholder,
  name,
  id,
}: textAreaProps) {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{text}</span>
      </label>
      <textarea
        className="textarea textarea-bordered h-24"
        placeholder={placeholder}
        id={id}
        name={name}
      >
      </textarea>
    </div>
  );
}

export { Checkbox, TextInput, Select, TextArea };