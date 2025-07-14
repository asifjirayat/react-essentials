export default function TabButton({ children, isActive, ...props }) {
  return (
    <li>
      <button className={isActive} {...props}>
        {children}
      </button>
    </li>
  );
}
