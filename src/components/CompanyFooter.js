import React, { useState, useEffect } from "react";

export default function CompanyFooter() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col">
      <h3 className="font-bold text-[18px] mt-7">Company</h3>
      {isSmallScreen ? (
        // Dropdown menu for small screens
        <select className="mt-1">
          <option>Press & Media</option>
          <option>Investor Relations</option>
          <option>Wix Capital</option>
          <option>Accessibility Statement</option>
          <option>Patent Notice</option>
          <option>Sitemap</option>
          <option>Careers</option>
        </select>
      ) : (
        // Full list for larger screens
        <>
          <span className="mt-3 hover:text-blue-600 cursor-pointer">
            Press & Media
          </span>
          <span className="mt-3 hover:text-blue-600 cursor-pointer">
            Investor Relations
          </span>
          <span className="mt-3 hover:text-blue-600 cursor-pointer">
            Wix Capital
          </span>
          <span className="mt-3 hover:text-blue-600 cursor-pointer">
            Accessibility Statement
          </span>
          <span className="mt-3 hover:text-blue-600 cursor-pointer">
            Patent Notice
          </span>
          <span className="mt-3 hover:text-blue-600 cursor-pointer">
            Sitemap
          </span>
          <span className="mt-3 hover:text-blue-600 cursor-pointer">
            Careers
          </span>
        </>
      )}
    </div>
  );
}
