import mysql, { ConnectionOptions } from 'mysql2';

const gateData = () => {
    const access: ConnectionOptions = {
        user: 'root',
        database: 'test_db',
        password: 'example',
        host: 'localhost',
      };
      
      try {
        const conn = mysql.createConnection(access);
      

        console.log("conn", conn)
      
      conn.query('SELECT * from `tbl_users`;', (_err, rows) => {
            console.log(rows)
      });
    
      } catch (error) {
        console.log("errr", error)
      }
}

export default function Page() {

    gateData()
  return (
    <div>pageee</div>
  )
}
