import Data from '../../data.json';

function Map() {
  return (
    <div>
      {Data.map(
        (
          item,
          index // <-- Fix: Use "index" as key
        ) => (
          <div key={index}>
            <h3>{item.name}</h3>
            <p>{item.code || 'No code available'}</p>{' '}
            {/* <-- Handle missing "code" */}
          </div>
        )
      )}
    </div>
  );
}

export default Map;
