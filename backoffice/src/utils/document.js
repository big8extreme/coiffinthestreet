// Used because primereact dont clear input value after toggle
export function clearFieldValues(fields = []) {
  fields.forEach(field => {
    const item = document.getElementById(field);
    if (item) {
      item.value = '';
    }
  });
}