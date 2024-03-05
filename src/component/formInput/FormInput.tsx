function FormInput({
  htmlfor,
  label,
  type,
}: {
  htmlfor: string;
  label: string;
  type: string;
}) {
  return (
    <div className=" w-full">
      <input
        type={type}
        name={htmlfor}
        id={htmlfor}
        placeholder={label}
        inputMode={label === "phone" ? "numeric" : "text"}
        className=" inputStyle w-full"
      />
    </div>
  );
}

export default FormInput;
