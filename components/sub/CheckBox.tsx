const CheckBox = ({ label, checked, onChange }: { label: string; checked: boolean, onChange: any }) => {
  return (
    <div className="group flex justify-start align-center mb-[35px]">
      <input
        checked={checked}
        type={"checkbox"}
        id="terms&condition"
        className="bg-border rounded-[8px] h-[28px] w-[28px] mr-[17px] terms_condition"
        onChange={onChange}
      />
      <label htmlFor="terms&condition" className="text-muted select-none">
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
