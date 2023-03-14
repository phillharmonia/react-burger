import Modal from "../../components/Modal/Modal";
import {useNavigate} from "react-router-dom";
import IngridientDetails from "../../components/IngridientDetails/IngridientDetails";

export const IngridientDetailsPage = () => {
    const navigate = useNavigate()
    return (
            <Modal closePopup={() =>  navigate("/")}>
                <IngridientDetails />
            </Modal>
    )
}