"use client";
import { useState, useEffect } from "react";
import styles from "./scrollable-list.module.css";

interface ItemProps {
  id: number;
  label: string;
  isClicked: boolean;
}

const ScrollableList: React.FC = () => {
  const [items, setItems] = useState<ItemProps[]>([
    { id: 1, label: `Server Components`, isClicked: false },
    { id: 2, label: `Client Components`, isClicked: false },
    { id: 3, label: `Image Component`, isClicked: false },
    { id: 4, label: `usePathname`, isClicked: false },
  ]);

  console.log("items", items);

  // Modal
  useEffect(() => {
    items.map((item) => {
      if (item.isClicked) {
        console.log(item.label);
      }
    });
  }, [items]);

  return (
    <div className={styles.scrollableList}>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.id} className={styles.listItem}>
            <button
              onClick={() => {
                setItems((prevItems) =>
                  prevItems.map((prevItem) =>
                    prevItem.id === item.id
                      ? { ...prevItem, isClicked: !prevItem.isClicked }
                      : prevItem
                  )
                );
              }}
              className={`${styles.listItemButton} ${
                item.isClicked ? styles.clicked : styles.notClicked
              }`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScrollableList;
