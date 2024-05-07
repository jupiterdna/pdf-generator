'use server'
import mysql from 'mysql2/promise';
import { redirect } from 'next/navigation'
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

export async function submitForm(formData: FormData) {

    const name = formData.get('name')

    const connection = await connect()
    connection.query('INSERT INTO tbl_users (name) VALUES (?)', [name])


    formData.set('name', '')
    redirect('/testdb/')
}