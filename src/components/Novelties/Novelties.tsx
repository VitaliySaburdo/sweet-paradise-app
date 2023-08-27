
import { Title } from "./Novelties.styled"

interface NoveltiesItem {
  _id: string;
  name: string;
  price: number;
  weight: string;
  category: string;
  favorite: boolean;
  img: string;
  ingredients: string;
  owner: string;
}

interface NoveltiesProps {
    novelties: NoveltiesItem[]; 
    loading: boolean
}

export const Novelties: React.FC<NoveltiesProps> = ({ novelties, loading }) => {

    return (
        <>
            <Title>Try our new items</Title>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {novelties.map(product => (
                        <li key={product._id}>{product.name} - ${product.price}</li>
                    ))}
                </ul>
            )}
        </>
    );
};