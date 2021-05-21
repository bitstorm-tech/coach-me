import { useState } from 'react';

export default function TabBar({children}) {
  const [activeTabId, setActiveTabId] = useState(0);

  function activeTab(id) {
    return id === activeTabId ? ' text-accent border-b-4 font-medium border-accent' : ' text-primary';
  }

  return (
    <>
      <div className="bg-darkest">
        <nav className="flex flex-col sm:flex-row justify-center">
          {children && children.map((child, i) =>
            <button key={i} onClick={() => setActiveTabId(i)}
                    className={'py-4 px-6 block hover:text-accent focus:outline-none' + activeTab(i)}>
              {child.props.tabText}
            </button>)}
        </nav>
      </div>
      {children && children[activeTabId]}
    </>
  );
}
