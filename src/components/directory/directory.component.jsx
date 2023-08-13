import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss";

const Directory = ({categories}) => {
  return categories.map((category) => {
    return (
      <div key={category.id} className="category-container">
        <CategoryItem category={category} />
      </div>
    );
  });
};

export default Directory;