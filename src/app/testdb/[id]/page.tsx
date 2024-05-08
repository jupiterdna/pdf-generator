import { connect, updateData } from "../action"
import Editform from "./component/EditForm"

const getUserData  = async (id: string) => {
  const con = await connect()
  const rows = await con.query('SELECT * FROM tbl_users WHERE id = ?', [id])
  return rows[0] || []
}
 

export default async function Page({params} : {params: {id: string}}) {

  if(!params.id) {
    return <div>Invalid id</div>
  }

  const data: any = await getUserData(params.id)

  if(!data?.length) {
    return <div>Invalid id</div>
  }
  
  const user = data[0]

  return (
    <div className="p-4">
        <Editform data={user}/>
    </div>
  )
}
