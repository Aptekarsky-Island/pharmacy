import Header from '../../components/Header/Header';
import NavTools from '../../components/NavTools/NavTools';
import Footer from '../../components/Footer/Footer';
import Modal from '../../components/ModalWindowLayout/Modal';


export default function Cart() {
    // const [poducts, updateProdcts] = useState([]); // состояние для хранения товаров в корзинe
    // const [totalPrice, setTotalPrice] = useState(0); // состояние для хранения общей стоимости товаров в корзине
    // const [totalCount, setTotalCount] = useState(0); // состояние для хранения общего количества товаров в корзинe

    return (
        <>
            <NavTools />
            <main className="cart__container">
                <h1>Корзина</h1>
                <p>Здесь будет содержимое вашей корзины.</p>
            </main>
        </>
    );
}