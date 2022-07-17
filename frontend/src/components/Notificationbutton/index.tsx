import axios from 'axios';
import { toast } from 'react-toastify';
import icon from '../../assets/img/notification-icon.svg'
import { BASE_URL } from '../../utils/request';

import './styles.css'
type Props ={
  saleId: number;

}

function handleclick(id :number){
  axios(`${BASE_URL}/sales/${id}/notification`).then(Response => {
    toast.info("Sms enviado com sucesso!!");
  });
}

function NotificationButton({saleId} : Props ) {
  return (
    <div className="msmeta-red-btn" onClick={() => handleclick(saleId)}>
      <img src={icon} alt="" />
    </div>
  )
}

export default NotificationButton
