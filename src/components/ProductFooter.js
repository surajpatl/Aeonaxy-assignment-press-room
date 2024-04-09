export default function ProductFooter() {
  // Check if the screen width is less than or equal to 1200 pixels
  const isSmallScreen = window.innerWidth <= 1024;

  return (
    <div className="flex flex-col">
      <h3 className="font-bold text-[18px] mt-7">Product</h3>
      {isSmallScreen ? (
        // Dropdown menu for small screens
        <select className="mt-1">
          <option>Website Templates</option>
          <option>Website Builder</option>
          <option>Website Design</option>
          <option>Wix Features</option>
          <option>App Market</option>
          <option>Web Hosting</option>
          <option>Domain Names</option>
          <option>Website Accessibility</option>
          <option>Mobile App Builder</option>
        </select>
      ) : (
        // Full list for larger screens
        <>
          <span className="mt-3 hover:text-blue-600 cursor-pointer">
            Website Templates
          </span>
          <span className="mt-3 hover:text-blue-600 cursor-pointer">
            Website Builder
          </span>
          <span className="mt-3 hover:text-blue-600 cursor-pointer">
            Website Design
          </span>
          <span className="mt-3 hover:text-blue-600 cursor-pointer">
            Wix Features
          </span>
          <span className="mt-3 hover:text-blue-600 cursor-pointer">
            App Market
          </span>
          <span className="mt-3 hover:text-blue-600 cursor-pointer">
            Web Hosting
          </span>
          <span className="mt-3 hover:text-blue-600 cursor-pointer">
            Domain Names
          </span>
          <span className="mt-3 hover:text-blue-600 cursor-pointer">
            Website Accessibility
          </span>
          <span className="mt-3 hover:text-blue-600 cursor-pointer">
            Mobile App Builder
          </span>
        </>
      )}
    </div>
  );
}
