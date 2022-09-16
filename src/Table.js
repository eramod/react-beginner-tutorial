import React from "react";

const Table = (props) => {
  const { characterData, removeCharacter } = props;

  return (
    <table>
      <TableHeader />
      <TableBody
        characterData={characterData}
        removeCharacter={removeCharacter}
      />
    </table>
  );
};

/**
 * `Table` as a class component.
 *
 * Because this component does not handle state, it's best practice to make it
 * a simple component.
 **/

// Class component
// class Table extends Component {
//   render() {
//     const { characterData } = this.props;
//     return (
//       <table>
//         <TableHeader />
//         <TableBody characterData={characterData} />
//       </table>
//     );
//   }
// }

// Simple components are functions
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const rows = props.characterData.map(({ name, job }, index) => {
    return (
      <tr key={index}>
        <td>{name}</td>
        <td>{job}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

export default Table;
