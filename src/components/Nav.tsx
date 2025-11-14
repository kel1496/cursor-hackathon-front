import { useLocation } from "wouter";

const tabs = [
  { label: "Home", path: "/", icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" className="inline align-middle" viewBox="0 0 24 24"><path d="M3 12l9-9 9 9"/><path d="M9 21V9h6v12"/></svg>
    ) 
  },
  { label: "Profile", path: "/profile", icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" className="inline align-middle" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a7.5 7.5 0 0 1 13 0"/></svg>
    ) 
  },
];

const Nav = () => {
  const [location, setLocation] = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 w-full mx-auto bg-white shadow flex justify-around z-20 py-2 rounded-t-xl" style={{boxShadow: "0 -1px 10px 0 rgba(0,0,0,0.06)"}}>
      {tabs.map((tab) => {
        const active = location === tab.path;
        return (
          <button
            key={tab.path}
            onClick={() => setLocation(tab.path)}
            className={`flex flex-col items-center px-3 py-1 transition-colors duration-150 ${active ? "text-blue-600 font-bold" : "text-gray-500"}`}
          >
            {tab.icon}
            <span className="text-xs mt-0.5">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default Nav;
