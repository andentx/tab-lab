import { useState } from 'react';

const MyTable = () => {
  // Use the useState hook to initialize and update the numRows and numColumns state variables
  const [numRows, setNumRows] = useState(3);
  const [numColumns, setNumColumns] = useState(3);

  function handleNumRowsChange(event) {
    // Update the numRows state variable with the new value
    setNumRows(event.target.value);
  }

  function handleNumColumnsChange(event) {
    // Update the numColumns state variable with the new value
    setNumColumns(event.target.value);
  }

  return (
    <div>
      {/* Use the map method to render the table cells based on the values of the numRows and numColumns state variables */}
      <table>
        <tbody>
          {Array(numRows)
            .fill(0)
            .map((_, rowIndex) => (
              <tr key={rowIndex}>
                {Array(numColumns)
                  .fill(0)
                  .map((_, columnIndex) => (
                    <td key={columnIndex}>
                      Cell {rowIndex + 1}, {columnIndex + 1}
                    </td>
                  ))}
              </tr>
            ))}
        </tbody>
      </table>
      <form>
        <label>
          Enter the number of rows:
          <input type='number' value={numRows} onChange={handleNumRowsChange} />
        </label>
        <br />
        <label>
          Enter the number of columns:
          <input type='number' value={numColumns} onChange={handleNumColumnsChange} />
        </label>
      </form>
    </div>
  );
};

export default MyTable;
