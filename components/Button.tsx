export default function Button({ className, children, ...props }: any) {
  return (
    <button
      type="button"
      className={
        "text-white focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 " +
        className
      }
      {...props}
    >
      {children}
    </button>
  );
}
