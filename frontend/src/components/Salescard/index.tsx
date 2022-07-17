import axios from 'axios'
import { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import { Sale } from '../../models/sale'
import 'react-datepicker/dist/react-datepicker.css'
import { BASE_URL } from '../../utils/request'
import Notificationbutton from '../Notificationbutton'
import './styles.css'
function Salescard() {
  const min = new Date(new Date().setDate(new Date().getDate() - 365))
  const max = new Date()

  const [minDate, setMinDate] = useState(min)
  const [maxDate, setMaxDate] = useState(max)

  const [sales, setSales] = useState<Sale[]>([])

  useEffect(() => {
    const dmin = minDate.toISOString().slice(0, 10)
    const dmax = maxDate.toISOString().slice(0, 10)

    axios
      .get(`${BASE_URL}/sales?minDate=${dmin}&maxDate=${dmax}`)
      .then(response => {
        setSales(response.data.content)
      })
  }, [minDate, maxDate])

  return (
    <div className="ds-card">
      <h2 className="ds-sales-title">Vendas</h2>
      <div>
        <div className="ds-meta-caixa">
          <DatePicker
            selected={minDate}
            onChange={(date: Date) => setMinDate(date)}
            className="ds-meta-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="ds-meta-caixa">
          <DatePicker
            selected={maxDate}
            onChange={(date: Date) => setMaxDate(date)}
            className="ds-meta-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </div>

      <div>
        <table className="ds-sales-table">
          <thead>
            <tr>
              <th className="show992">Id</th>
              <th className="show576">Data </th>
              <th>Vendedor</th>
              <th className="show992">Visitas </th>
              <th className="show992">Vendas </th>
              <th>Total</th>
              <th>Notificar</th>
            </tr>
          </thead>
          <tbody>
            {sales.map(sale => {
              return (
                <tr key={sale.id}>
                  <td className="show992">{sale.id}</td>
                  <td className="show576">
                    {new Date(sale.date).toLocaleDateString()}
                  </td>
                  <td>{sale.sellerName}</td>
                  <td className="show992">{sale.visited}</td>
                  <td className="show992">{sale.deals}</td>
                  <td>R$ {sale.amount.toFixed(2)}</td>
                  <td>
                    <div className="msmeta-red-btn-container">
                      <Notificationbutton saleId={sale.id} />
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Salescard
