const ErrorPage = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white">404</h1>
          <p className="text-xl text-white mb-8">Oops! Page not found.</p>
          <p className="text-lg text-white mb-8">
            The page you are looking for might have been removed or doesn't
            exist.
          </p>
          <p className="text-lg text-white mb-8">Here's a quote to ponder:</p>
          <p className="text-xl text-white italic">
            "Mistakes are the portals of discovery." - James Joyce
          </p>
          <a href="/" className="text-white text-lg underline">
            Go back to the homepage
          </a>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
