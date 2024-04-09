export default function LearnFooter() {
  // Check if the screen width is less than or equal to 1200 pixels
  const isSmallScreen = window.innerWidth <= 1024;

  return (
    <div className="flex flex-col">
      <h3 className="font-bold text-[18px] mt-7">Learn</h3>
      {isSmallScreen ? (
        // Dropdown menu for small screens
        <select className="mt-1">
          <option>Wix Blog</option>
          <option>Privacy and Security Hub</option>
          <option>SEO Learning Hub</option>
          <option>Wix Encyclopedia</option>
        </select>
      ) : (
        // Full list for larger screens
        <>
          <span className="mt-3 hover:text-blue-600 cursor-pointer">
            Wix Blog
          </span>
          <span className="mt-3 hover:text-blue-600 cursor-pointer">
            Privacy and Security Hub
          </span>
          <span className="mt-3 hover:text-blue-600 cursor-pointer">
            SEO Learning Hub
          </span>
          <span className="mt-3 hover:text-blue-600 cursor-pointer">
            Wix Encyclopedia
          </span>
        </>
      )}
    </div>
  );
}
