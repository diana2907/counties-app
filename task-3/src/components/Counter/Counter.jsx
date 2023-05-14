export const Counter = () => {
  const selectedUniversities = () => {
    const checked = window.localStorage.getItem("checkedList");
    if (checked !== null) {
      return checked.length;
    }
    return 0;
  };

  return <div>Selected: {selectedUniversities()}</div>;
};
