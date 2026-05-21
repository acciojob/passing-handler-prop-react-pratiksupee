import React from 'react';

const ColourSelector = (props) => {
  const { config, changeColor } = props;
  const { background, classname, label } = config;

  return (
    <button className={classname} onClick={() => changeColor(background)}>
      {label}
    </button>
  )
}

export default ColourSelector;
