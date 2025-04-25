export function Button({ className = "", children, ...props }) {
    return (
      <button
        className={`rounded-md font-medium transition-colors focus:outline-none ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }

  