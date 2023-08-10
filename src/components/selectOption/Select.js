import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import * as React from "https://cdn.skypack.dev/react@17.0.1";

// Clicking an item selects/unselects it.
// Multiple items can be selected at a time.
// Make sure to avoid unnecessary re-renders of each list item in the big list (performance).
// Currently selected items should be visually highlighted.
// Currently selected items' names should be shown at the top of the page.
const List = ({ items }) => {
  const [current, setCurrent] = React.useState([]);

  const updateCurrent = React.useCallback((name, selected) => {
    setCurrent((c) => (selected ? c.filter((i) => i !== name) : [...c, name]));
  }, []);

  return (
    <div>
      <span>{current.join(", ")}</span>
      <ul className="List">
        {items.map((item) => (
          <ListItem
            key={item.name}
            name={item.name}
            color={item.color}
            updateCurrent={updateCurrent}
          />
        ))}
      </ul>
    </div>
  );
};

const ListItem = React.memo(({ name, color, updateCurrent }) => {
  const [selected, setSelected] = React.useState(false);
  return (
    <li
      onClick={() => {
        setSelected(!selected);
        updateCurrent(name, selected);
      }}
      className={`List__item List__item--${color} ${selected && "select"}`}
    >
      {name}
    </li>
  );
});

// ---------------------------------------
// Do NOT change anything below this line.
// ---------------------------------------

const sizes = ["tiny", "small", "medium", "large", "huge"];
const colors = [
  "navy",
  "blue",
  "aqua",
  "teal",
  "olive",
  "green",
  "lime",
  "yellow",
  "orange",
  "red",
  "maroon",
  "fuchsia",
  "purple",
  "silver",
  "gray",
  "black"
];
const fruits = [
  "apple",
  "banana",
  "watermelon",
  "orange",
  "peach",
  "tangerine",
  "pear",
  "kiwi",
  "mango",
  "pineapple"
];

const items = sizes.reduce(
  (items, size) => [
    ...items,
    ...fruits.reduce(
      (acc, fruit) => [
        ...acc,
        ...colors.reduce(
          (acc, color) => [
            ...acc,
            {
              name: `${size} ${color} ${fruit}`,
              color
            }
          ],
          []
        )
      ],
      []
    )
  ],
  []
);

// ReactDOM.render(<List items={items} />, document.getElementById("root"));


export default List