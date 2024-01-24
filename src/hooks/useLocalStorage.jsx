export default function useLocalStorage(itemName) {
  const getItem = () => {
    const local = JSON.parse(localStorage.getItem(itemName));
    if (local) {
      return local;
    }
    return [];
  };

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
  };

  return [getItem, saveItem];
}
