/* eslint-disable react/prop-types */
function NavigationItem(props) {
  const { menuItem } = props;

  return (
    <div className="text-xl my-4">
      <i className={menuItem.class}></i>
      <span className="ml-4">{menuItem.name}</span>
    </div>
  );
}

export default NavigationItem;
