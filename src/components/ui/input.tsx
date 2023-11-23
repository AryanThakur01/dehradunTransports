import { cn } from "@/lib/utils";
import { ErrorMessage, useField } from "formik";
import { FC, useState } from "react";

interface IInput {
  type: string;
  placeholder: string;
  required?: boolean;
  className?: string;
  uni: string;
  labelClass?: string;
  label?: string;
  lengthWarning?: boolean;
}
const Input: FC<IInput> = ({
  type,
  placeholder,
  className,
  uni,
  label,
  labelClass,
  required,
}) => {
  const [field, meta] = useField({ id: uni, name: uni, type: type });
  const [didFocus, setDidFocus] = useState<boolean>(false);
  const handleFocus = () => setDidFocus(true);
  const showFeedback = meta.touched || didFocus;

  return (
    <div className={`form-control `}>
      <div className="flex items-center space-between">
        <label
          htmlFor={uni}
          className={cn(
            labelClass,
            showFeedback ? (meta.error ? "text-destructive" : "") : "",
          )}
        >
          {label}
          {required && "*"}
        </label>
      </div>
      <input
        id={uni}
        {...field}
        required
        type={type}
        placeholder={placeholder}
        onFocus={handleFocus}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className,
          showFeedback
            ? meta.error
              ? "border border-destructive placeholder:text-destructive"
              : "valid"
            : "",
        )}
      />
      <div
        className={cn(
          "text-xs",
          showFeedback ? (meta.error ? "text-destructive" : "valid") : "",
        )}
      >
        <ErrorMessage name={uni} />
      </div>
    </div>
  );
};
export default Input;
