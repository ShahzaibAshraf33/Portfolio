import React from "react";

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  React.PropsWithChildren<object>,
  State
> {
  constructor(props: React.PropsWithChildren<object>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo): void {
    // Log the error for debugging or send it to a monitoring service
    console.error("Unhandled error:", error);
    console.error("Component stack:", info.componentStack);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
          <h1 className="mb-4 text-3xl font-bold text-red-600">
            Something went wrong
          </h1>

          <p className="mb-6 text-gray-600">
            Please reload the page or try again later.
          </p>

          <button
            onClick={() => window.location.reload()}
            className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

