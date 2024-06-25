import React from 'react';
import { useSelector } from 'react-redux';

const Canvas = () => {
  const elements = useSelector(state => state.editor.elements);

  return (
    <div className="canvas">
      {elements.map((element, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            left: element.position.x,
            top: element.position.y
          }}
        >
          {element.type === 'flash' && (
            <embed
              src={element.src}
              type="application/x-shockwave-flash"
              width="200"
              height="200"
            />
          )}
          {/* Render other types of elements */}
        </div>
      ))}
    </div>
  );
};

export default Canvas;
