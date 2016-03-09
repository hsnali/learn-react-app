import React from 'react';

const List = ({notes}) => {
  return (
    <div>
      <ul className="list-group">
        {
          notes.map((note, index) => {
            if (note && typeof(note) === 'string') {
              return <li className="list-group-item" key={index}>{note}</li>
            }
          })
        }
      </ul>
    </div>
  );
}

List.propTypes = {
  notes: React.PropTypes.array.isRequired
}

export default List;
