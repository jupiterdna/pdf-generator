

import { connect, deleteRow, submitForm } from "./action";
import Deletebtn from "./components/Deletebtn";
import Link from "next/link";


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
        return <div key={d.id}> 
          <div>
          {d.id}-----{d.name} ---- <Deletebtn item={d}/>
          <div>
            <Link href={`/testdb/${d.id}`}>edit</Link>
          </div>
          </div>
        </div>
      })}
    </div>
  );
}
