type SomethingType = {
  label: string;
  children: React.ReactNode;
};

const Checkbox = (props: SomethingType) => {
  return (
    <div>
      {props.label}
      <p>Ahihi</p>
    </div>
  );
};
export default Checkbox;
