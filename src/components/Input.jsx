export default function Input({ className, type, ref, isTextArea, ...props }) {
  return (
    <>
      {isTextArea ? (
        <textarea
          ref={ref}
          type={type}
          className={className}
          {...props}
        ></textarea>
      ) : (
        <input ref={ref} type={type} className={className} {...props} />
      )}
    </>
  );
}
