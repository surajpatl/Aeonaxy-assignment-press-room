export default function SupportFooter() {
  // Check if the screen width is less than or equal to 1200 pixels
  const isSmallScreen = window.innerWidth <= 1024;

  return (
    <div className="flex flex-col">
      <h3 className="font-bold text-[18px] mt-7">Support</h3>
      {isSmallScreen ? (
        // Dropdown menu for small screens
        <select className="mt-1">
          <option> Help Center</option>
          <option>Hire a Professional</option>
          <option> Report Abuse</option>
          <option>System Status</option>
        </select>
      ) : (
        // Full list for larger screens
        <>
          <span className="mt-3 hover:text-blue-600 cursor-pointer">
            Help Center
          </span>
          <span className="mt-3 hover:text-blue-600 cursor-pointer">
            Hire a Professional
          </span>
          <span className="mt-3 hover:text-blue-600 cursor-pointer">
            Report Abuse
          </span>
          <span className="mt-3 hover:text-blue-600 cursor-pointer">
            System Status
          </span>
        </>
      )}
    </div>
  );
}
