import { useState, useEffect } from "react";

const useFormField = () => {
  const [formFieldValue, setFormFieldValue] = useState("");

  const changeFormFielValue = (newValue: string) => {
    setFormFieldValue(newValue);
  };

  return {
    formFieldValue,
    changeFormFielValue,
  };
};

export default useFormField;
