import React, { useState } from "react";

const LoadMore = () => {
  const [visible, setVisible] = useState(4);

  const loadMore = () => {
    setVisible(visible + 4);
  };

  return (
    <div>
      <div className="center">
        <button className="btn" onClick={loadMore}>
          Loadmore
        </button>
      </div>
    </div>
  );
};

export default LoadMore;
