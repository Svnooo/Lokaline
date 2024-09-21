import CardCatalog from "../../components/CardCatalog";
import { Pagination } from "../../components/Pagination";

const Catalog = () => {
    return (
        <>
            <div className="container mt-20 ml-20">
                <CardCatalog />
            </div>
            {/* Pagination di bawah konten dan tidak fixed */}
            <div className="flex justify-center mt-10 mb-10">
                <Pagination />
            </div>
        </>
    );
};

export default Catalog;
