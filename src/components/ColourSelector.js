import React from 'react';

const ColourSelector = (props) => {
  const { config, changeColor } = props;
  const { background, classname, label } = config;

  return (
    <button className={classname}  
    data-testid={config.key}
    onClick={() => changeColor(background)}>
      {label}
    </button>
  )
}

export default ColourSelector;
