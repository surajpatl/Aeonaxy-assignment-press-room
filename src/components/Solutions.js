export default function Solutions() {
  // Check if the screen width is less than or equal to 1200 pixels
  const isSmallScreen = window.innerWidth <= 1024;

  return (
    <div className="flex flex-col">
      <h3 className="font-bold text-[18px] mt-7">Solutions</h3>
      {isSmallScreen ? (
        // Dropdown menu for small screens
        <select className="mt-1">
          <option>Online Store</option>
          <option>Online Booking</option>
          <option>Restaurant Website</option>
          <option>Blog Website</option>
          <option>Portfolio Website</option>
          <option>eCommerce Website</option>
          <option>Wix Studio</option>
          <option>Enterprise Solutions</option>
          <option>Student Website</option>
          <option>Professional Tools</option>
          <option>Logo Maker</option>
        </select>
      ) : (
        // Full list for larger screens
        <>
          <span className="mt-3 hover:text-blue-600 cursor-pointer">
            Online Store
          </span>
          <span className="mt-3 hover:text-blue-600 cursor-pointer">
            Online Booking
          </span>
          <span className="mt-3 hover:text-blue-600 cursor-pointer">
            Restaurant Website
          </span>
          <span className="mt-3 hover:text-blue-600 cursor-pointer">
            Blog Website
          </span>
          <span className="mt-3 hover:text-blue-600 cursor-pointer">
            Portfolio Website
          </span>
          <span className="mt-3 hover:text-blue-600 cursor-pointer">
            eCommerce Website
          </span>
          <span className="mt-3 hover:text-blue-600 cursor-pointer">
            Wix Studio
          </span>
          <span className="mt-3 hover:text-blue-600 cursor-pointer">
            Enterprise Solutions
          </span>
          <span className="mt-3 hover:text-blue-600 cursor-pointer">
            Student Website
          </span>
          <span className="mt-3 hover:text-blue-600 cursor-pointer">
            Professional Tools
          </span>
          <span className="mt-3 hover:text-blue-600 cursor-pointer">
            Logo Maker
          </span>
        </>
      )}
    </div>
  );
}
