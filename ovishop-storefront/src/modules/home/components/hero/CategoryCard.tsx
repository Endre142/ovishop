
interface CategoryCardProps {
    name: string;
    image: string;
    url: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, image, url }) => {
    return (
        <a href={url} className="p-6 block rounded-lg overflow-hidden shadow-md hover:shadow-lg 
        transition-transform duration-300 bg-gray_combination-alma transform hover:scale-105 hover:bg-gray_combination-button_col_hover">
            <img src={image} alt={name} className=" object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 text-center">{name}</h3>
            </div>
        </a>
    );
};

export default CategoryCard;
