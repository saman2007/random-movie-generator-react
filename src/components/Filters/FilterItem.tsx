import classes from "../../styles/filter-item.module.scss";

interface Props {
  items: { id: number; name: string; param?: string }[];
  hasAll?: boolean;
  labelText: string;
  onChangeSetState: React.Dispatch<React.SetStateAction<any>>;
  onChangeProperty?: string;
}

const FilterItem = ({
  items,
  hasAll = true,
  labelText,
  onChangeSetState,
  onChangeProperty = "name",
}: Props) => {
  return (
    <div className={classes.filter}>
      <label>{labelText}</label>
      <select
        onChange={({ currentTarget: { value } }) => {
          if (value !== "All") {
            const matchedIndexValue = items.find((item) => item.name === value);

            onChangeSetState(
              matchedIndexValue![
                onChangeProperty as keyof typeof matchedIndexValue
              ]
            );
          } else onChangeSetState(null);
        }}
      >
        {hasAll ? (
          <option
            onClick={() => {
              onChangeSetState(null);
            }}
          >
            All
          </option>
        ) : (
          ""
        )}
        {items.map((item) => (
          <option key={item.id}>{item.name}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterItem;
