"use client";
import { useState, useEffect, useMemo, useRef } from "react";
import { useTransition, a } from "@react-spring/web";
import { Popover } from "flowbite-react";

function Masonry({ data }) {
  const [columns, setColumns] = useState(2);

  useEffect(() => {
    const updateColumns = () => {
      if (window.matchMedia("(min-width: 1500px)").matches) {
        setColumns(5);
      } else if (window.matchMedia("(min-width: 1000px)").matches) {
        setColumns(4);
      } else if (window.matchMedia("(min-width: 600px)").matches) {
        setColumns(3);
      } else {
        setColumns(1); // Mobile devices
      }
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const ref = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [heights, gridItems] = useMemo(() => {
    let heights = new Array(columns).fill(0);
    let gridItems = data.map((child) => {
      const column = heights.indexOf(Math.min(...heights));
      const x = (width / columns) * column;
      const y = (heights[column] += child.height / 2) - child.height / 2;
      return { ...child, x, y, width: width / columns, height: child.height / 2 };
    });
    return [heights, gridItems];
  }, [columns, data, width]);

  const transitions = useTransition(gridItems, {
    keys: (item) => item.id,
    from: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 0 }),
    enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
    update: ({ x, y, width, height }) => ({ x, y, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
  });

  return (
    <div
      ref={ref}
      className="relative w-full h-full"
      style={{ height: Math.max(...heights) }}
    >
      {transitions((style, item) => (
        <a.div
          key={item.id}
          style={style}
          className="absolute p-[30px] md:py-8 [will-change:transform,width,height,opacity]"
        >
          <div
            className="relative w-full h-full overflow-hidden uppercase text-[10px] leading-[10px] rounded-[4px] shadow-[0px_10px_50px_-10px_rgba(0,0,0,0.2)] transition duration-300 ease hover:scale-110"
            style={{
              backgroundColor: "#ffffff",
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="flex flex-col gap-2.5 mt-4 justify-center items-center">
            {/* Flex container for text and "Show More" */}
            <div className="flex justify-center items-center gap-2">
              <h1 className="font-mono font-bold text-lg">{item.text}</h1>
              <Popover
                placement="top"
                trigger="hover"
                content={
                  <div className="w-60 text-sm text-gray-500 dark:border-gray-600 dark:bg-gray-800 flex justify-center items-center dark:text-gray-400">
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg dark:text-white mb-2">
                        About {item.text}
                      </h3>
                      <div className="space-y-2">
                        
                          <div >
                            <p className="text-gray-500 dark:text-gray-400">
                              <span className="text-lg font-bold">{item.city1}</span>
                            </p>
                            <p className="text-gray-500 dark:text-gray-400">
                              <span className="text-lg font-bold">{item.city1}</span>
                            </p>
                            
                          </div>
                       
                      </div>
                    </div>
                  </div>
                }
              >
                <a
                  href="#"
                  className="text-blue-600 underline hover:no-underline dark:text-blue-500"
                >
                  Show More
                </a>
              </Popover>
            </div>
          </div>
        </a.div>
      ))}
    </div>
  );
}

export default Masonry;