import React from "react"

import "./styles.css"

import NavBar from "../NavBar"

export default function Orders({ theme, toggleTheme }) {
  return (
    <>
      <main className="app2 grid orders" id={theme}>
        <NavBar theme={theme} toggleTheme={toggleTheme} />
        <div className="box weekly-sell grid">
          <div className="wrapper">
            <main className="table">
              <section className="table_header">
                <div className="top text-left">
                  <ul>
                    <li className="liactive">Orders</li>
                    <li>Dispatch</li>
                  </ul>
                </div>
              </section>
              <div className="covertbody">
                <section className="table_body">
                  <table>
                    <thead>
                      <tr>
                        <th>Received</th>
                        <th>Reference</th>
                        <th>Destination</th>
                        <th>Amount</th>
                        <th>Agent</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>10th May 2023</td>
                        <td>DH946582UK</td>
                        <td>London, UK</td>
                        <td>£ 23.400,00</td>
                        <td>Isabel O.</td>
                        <td className="status">Open</td>
                      </tr>
                      <tr>
                        <td>10th May 2023</td>
                        <td>DH946582UK</td>
                        <td>London, UK</td>
                        <td>£ 23.400,00</td>
                        <td>Isabel O.</td>
                        <td className="status">Open</td>
                      </tr>
                      <tr>
                        <td>10th May 2023</td>
                        <td>DH946582UK</td>
                        <td>London, UK</td>
                        <td>£ 23.400,00</td>
                        <td>Isabel O.</td>
                        <td className="status">Approved</td>
                      </tr>
                      <tr>
                        <td>10th May 2023</td>
                        <td>DH946582UK</td>
                        <td>London, UK</td>
                        <td>£ 23.400,00</td>
                        <td>Isabel O.</td>
                        <td className="status">Open</td>
                      </tr>
                      <tr>
                        <td>10th May 2023</td>
                        <td>DH946582UK</td>
                        <td>London, UK</td>
                        <td>£ 23.400,00</td>
                        <td>Isabel O.</td>
                        <td className="status">Delivered</td>
                      </tr>
                      <tr>
                        <td>10th May 2023</td>
                        <td>DH946582UK</td>
                        <td>London, UK</td>
                        <td>£ 23.400,00</td>
                        <td>Isabel O.</td>
                        <td className="status">Shipped</td>
                      </tr>
                      <tr>
                        <td>10th May 2023</td>
                        <td>DH946582UK</td>
                        <td>London, UK</td>
                        <td>£ 23.400,00</td>
                        <td>Isabel O.</td>
                        <td className="status">Cancelled</td>
                      </tr>
                      <tr>
                        <td>10th May 2023</td>
                        <td>DH946582UK</td>
                        <td>London, UK</td>
                        <td>£ 23.400,00</td>
                        <td>Isabel O.</td>
                        <td className="status">Shipped</td>
                      </tr>
                      <tr>
                        <td>10th May 2023</td>
                        <td>DH946582UK</td>
                        <td>London, UK</td>
                        <td>£ 23.400,00</td>
                        <td>Isabel O.</td>
                        <td className="status">Delivered</td>
                      </tr>
                      <tr>
                        <td>10th May 2023</td>
                        <td>DH946582UK</td>
                        <td>London, UK</td>
                        <td>£ 23.400,00</td>
                        <td>Isabel O.</td>
                        <td className="status">Delivered</td>
                      </tr>
                    </tbody>
                  </table>
                </section>
              </div>
            </main>
          </div>
        </div>
      </main>
    </>
  )
}
