

import { submitForm } from "./action";
import mysql from 'mysql2/promise';


const connect = async () => { 
  const con = await mysql
  .createConnection({
    user: 'root',
        database: 'test_db',
        password: 'example',
        host: 'localhost',
  })
  return con
}

const getData  = async () => {
  const connection = await connect()
  const [rows] = await connection.query('SELECT * FROM tbl_users')
  return rows

}



export default async function Page() {

  const data = await getData()

  return (
    <div className="p-4">
      <form
  
      >
        <div>
          <input
            required
            type="text"
            name="name"
            placeholder="enter name"
            className="border border-gray-200"
          />
        </div>
        <button formAction={submitForm} type="submit">submit</button>
      </form>

      {data?.map(d => {
        return <div key={d.id}> {d.id}-----{d.name}</div>
      })}
    </div>
  );
}
