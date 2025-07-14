export default function TabButton({ children, selectTab, isActive }) {
  return (
    <li>
      <button className = {isActive} onClick={selectTab}>{children}</button>
    </li>
  );
}
