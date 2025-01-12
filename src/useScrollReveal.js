import { useEffect } from "react";

const useScrollReveal = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal'); // Select all elements with the 'reveal' class

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // Add the 'visible' class when element is in view
          observer.unobserve(entry.target); // Stop observing once revealed
        }
      });
    }, { threshold: 0.1 }); // 10% of the element should be in the viewport

    elements.forEach((element) => {
      observer.observe(element); // Start observing each element
    });

    // Cleanup observer when component unmounts
    return () => observer.disconnect();
  }, []);
};

export default useScrollReveal;
