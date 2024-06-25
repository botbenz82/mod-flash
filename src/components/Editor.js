import React from 'react';
import Toolbar from './Toolbar';
import Canvas from './Canvas';

const Editor = () => {
  return (
    <div className="editor">
      <Toolbar />
      <Canvas />
    </div>
  );
};

export default Editor;
