import clsx from "clsx";
import { ReactNode } from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
export type FormRowProps = {
  label?: ReactNode;
  labelClassName?: string;
  mandatory?: boolean;
  mandatorySecondary?: boolean;
  mandatoryText?: string;
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  className?: string;
  divClassName?: string;
  helperText?: ReactNode;
  note?: string;
  mandatoryClass?: string;
  id?: string;
  errorClass?: string;
};

export const FormRow = ({
  label,
  labelClassName = "",
  mandatory,
  mandatorySecondary,
  mandatoryText,
  error,
  className,
  divClassName,
  children,
  helperText,
  note,
  mandatoryClass = "",
  id = "",
  errorClass,
}: React.PropsWithChildren<FormRowProps>) => {
  return (
    <>
      <div id={id} className={`form-row mb-[30px] ${className}`}>
        {label && (
          <div className={`mb-[10px] ${divClassName}`}>
            <span
              className={`text-[13px] font-bold leading-[20px]  md:text-[14px]
              md:leading-[20px] ${labelClassName} `}
            >
              {label}
            </span>
            {mandatory && (
              <>
                <span className={`text-error ml-[10px] ${mandatoryClass}`}>
                  ＊{mandatoryText || "必須"}
                </span>
                {mandatorySecondary && (
                  <span className={`ml-[10px] text-xs text-[#999]`}>
                    ※非公開
                  </span>
                )}
              </>
            )}
            {note && (
              <span className="ml-[10px] text-xs text-[#999]">{note}</span>
            )}
          </div>
        )}
        {children}
        {!!error && (
          <div className={clsx("text-error note mt-[10px]", errorClass)}>
            {error as string}
          </div>
        )}
        {helperText && (
          <div className="mt-[10px] note font-bold text-[#B3B3B3]">
            {helperText}
          </div>
        )}
      </div>
    </>
  );
};
