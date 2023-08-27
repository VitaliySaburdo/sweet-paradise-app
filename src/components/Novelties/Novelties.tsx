
import { Title } from "./Novelties.styled"

interface NoveltiesProps {
    novelties: any[]; 
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