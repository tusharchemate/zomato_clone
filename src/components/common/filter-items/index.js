import './index.css';

const FilterItem = (props) => {
  const { filterItem } = props;
  return (
    <div className="filter-item">
      <div>{filterItem.title}</div>
      <div className="absolute-center">{filterItem.icon}</div>
    </div>
  );
};

export default FilterItem;
