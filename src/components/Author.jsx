export default function Author({author, children}) {
  const {name, photo, twitterHandle} = author;

  return (
    <div className="mt-6 flex items-center">
      <div className="flex-shrink-0">
        <div>
          <span className="sr-only">{name}</span>
          <img className="h-10 w-10 rounded-full" src={photo.url} alt={name} />
        </div>
      </div>
      <div className="ml-3">
        <p className="text-sm font-medium text-gray-900">{name}</p>
        <div className="flex space-x-1 text-sm text-gray-500">
          {children
            ? children
            : twitterHandle && (
                <a
                  href={`https://twitter.com/${twitterHandle}`}
                  target="_blank"
                  className="twitter"
                >
                  @{twitterHandle}
                </a>
              )}
        </div>
      </div>
    </div>
  );
}
