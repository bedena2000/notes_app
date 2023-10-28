import FormFieldTypes from "./FormFieldTypes";
import { FC } from "react";
import useFormField from "./UseFormField";

export const FormField: FC<FormFieldTypes> = ({
  formFieldType = "text",
  placeholder = "",
  inputId = "",
  labelValue = "",
  FormFieldClasses = "",
  name = "",
  required = "false",
}) => {
  const { formFieldValue, changeFormFielValue } = useFormField();

  return (
    <div
      className={`overflow-hidden bg-indigo-700 rounded py-1.5 px-4 ${FormFieldClasses}`}
    >
      <p className="mb-0.5 text-white/50 text-[8px]">{labelValue}</p>
      <input
        className="text-white text-xs not-italic font-normal leading-normal outline-none border-none bg-transparent"
        type={formFieldType}
        placeholder={placeholder}
        id={inputId}
        name={name}
        value={formFieldValue}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          changeFormFielValue(event.target.value)
        }
        required={required === "true" ? true : false}
      />
    </div>
  );
};
