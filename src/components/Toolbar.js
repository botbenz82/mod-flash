import React from 'react';
import { useDispatch } from 'react-redux';
import { addElement } from '../redux/actions';

const Toolbar = () => {
  const dispatch = useDispatch();

  const handleAddFlash = () => {
    const newFlashElement = {
      type: 'flash',
      src: 'path/to/your/flash/file.swf',
      position: { x: 100, y: 30 }
    };
    dispatch(addElement(newFlashElement));
  };

  return (
    <div className="toolbar">
      <button onClick={handleAddFlash}>Add Flash</button>
      {/* Add more buttons for different elements */}
    </div>
  );
};

export default Toolbar;
